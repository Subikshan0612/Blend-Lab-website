// TEMPORARY one-off helper for the initial GitHub backup push. Deleted immediately after use.
import { createFileRoute } from '@tanstack/react-router'

const PUSH_TOKEN = 'tmp-push-9f3k2x7q'
const GATEWAY = 'https://connector-gateway.lovable.dev/github'
const REPO = 'Subikshan0612/Blend-Lab-website'

async function gh(path: string, body: unknown, method = 'POST') {
  const res = await fetch(`${GATEWAY}${path}`, {
    method,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.LOVABLE_API_KEY}`,
      'X-Connection-Api-Key': process.env.GITHUB_API_KEY!,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  const text = await res.text()
  if (!res.ok) throw new Error(`GitHub POST ${path} failed [${res.status}]: ${text}`)
  return JSON.parse(text)
}

export const Route = createFileRoute('/api/public/github-push')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        if (request.headers.get('x-push-token') !== PUSH_TOKEN) {
          return new Response('forbidden', { status: 403 })
        }
        try {
          const { action, ...data } = await request.json()
          let out
          if (action === 'blob') out = await gh(`/repos/${REPO}/git/blobs`, data)
          else if (action === 'seed') out = await gh(`/repos/${REPO}/contents/${data.path}`, data, 'PUT')
          else if (action === 'tree') out = await gh(`/repos/${REPO}/git/trees`, data)
          else if (action === 'commit') out = await gh(`/repos/${REPO}/git/commits`, data)
          else if (action === 'ref') out = await gh(`/repos/${REPO}/git/refs`, data)
          else if (action === 'refupdate') out = await gh(`/repos/${REPO}/git/refs/heads/main`, data, 'PATCH')
          else if (action === 'get') out = await gh(`/repos/${REPO}${data.path}`, undefined, 'GET')
          else return new Response('bad action', { status: 400 })
          return Response.json(out)
        } catch (err) {
          const message = err instanceof Error ? err.message : String(err)
          return Response.json({ error: message }, { status: 500 })
        }
      },
    },
  },
})
