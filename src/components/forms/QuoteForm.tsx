import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Paperclip, X } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/brand-button";
import { EASE } from "@/lib/animations";
import { cn } from "@/lib/utils";

const projectTypes = [
  "Custom Print",
  "Collectible",
  "Functional Part",
  "Prototype",
  "Small Batch",
  "Other",
];
const materialOptions = ["PLA", "PLA+", "Not sure"];
const finishOptions = ["Raw", "Matte", "Gloss", "Chrome", "Custom Paint", "Not sure"];

const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().min(6, "Enter a phone or WhatsApp number."),
  projectType: z.string().min(1, "Select a project type."),
  quantity: z.coerce.number().int().min(1, "Quantity must be at least 1."),
  size: z.string().min(1, "Give an approximate size."),
  material: z.string().min(1, "Select a material."),
  finish: z.string().min(1, "Select a finish."),
  targetDate: z.string().optional(),
  description: z.string().min(20, "Tell us a little more — at least 20 characters."),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;

/** Swap this for a real API call later; the form already awaits a promise. */
async function submitQuoteRequest(_values: QuoteFormValues, _files: File[]) {
  await new Promise((resolve) => setTimeout(resolve, 700));
}

const fieldClass =
  "h-12 w-full border border-input bg-surface/60 px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-cyan";

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
  className?: string | undefined;
}) {
  return (
    <label className={cn("flex flex-col gap-2", className)}>
      <span className="label-mono">{label}</span>
      {children}
      {error ? <span className="text-xs text-destructive">{error}</span> : null}
    </label>
  );
}

export function QuoteForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { quantity: 1, projectType: "", material: "", finish: "" },
  });

  const onSubmit = async (values: QuoteFormValues) => {
    await submitQuoteRequest(values, files);
    setSubmitted(true);
    reset();
    setFiles([]);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="flex flex-col items-start gap-5 border border-cyan/40 bg-surface/50 p-8 sm:p-12"
        role="status"
      >
        <span className="grid size-10 place-items-center border border-cyan text-cyan">
          <Check className="size-5" />
        </span>
        <h2 className="text-2xl font-semibold sm:text-3xl">Request captured</h2>
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
          Your details were validated in the browser. Note: this form isn’t connected to a backend
          yet, so nothing has been sent — sending will go live once the studio inbox is wired up.
        </p>
        <Button type="button" variant="outline" onClick={() => setSubmitted(false)}>
          New Request
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input className={fieldClass} placeholder="Your name" {...register("name")} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input type="email" className={fieldClass} placeholder="you@email.com" {...register("email")} />
        </Field>
        <Field label="Phone / WhatsApp" error={errors.phone?.message}>
          <input className={fieldClass} placeholder="Include country code" {...register("phone")} />
        </Field>
        <Field label="Project Type" error={errors.projectType?.message}>
          <select className={fieldClass} {...register("projectType")}>
            <option value="">Select…</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Quantity" error={errors.quantity?.message}>
          <input type="number" min={1} className={fieldClass} {...register("quantity")} />
        </Field>
        <Field label="Approximate Size" error={errors.size?.message}>
          <input className={fieldClass} placeholder="e.g. 120 × 80 × 60 mm" {...register("size")} />
        </Field>
        <Field label="Material" error={errors.material?.message}>
          <select className={fieldClass} {...register("material")}>
            <option value="">Select…</option>
            {materialOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Finish" error={errors.finish?.message}>
          <select className={fieldClass} {...register("finish")}>
            <option value="">Select…</option>
            {finishOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Target Date" error={errors.targetDate?.message}>
          <input type="date" className={fieldClass} {...register("targetDate")} />
        </Field>
      </div>

      <Field label="Project Description" error={errors.description?.message}>
        <textarea
          rows={6}
          className={cn(fieldClass, "h-auto resize-y py-4 leading-relaxed")}
          placeholder="What are you making, how will it be used, and any references you have."
          {...register("description")}
        />
      </Field>

      <div className="flex flex-col gap-3">
        <span className="label-mono">Reference images / 3D model files</span>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="flex flex-col items-center justify-center gap-2 border border-dashed border-input bg-surface/40 px-6 py-10 text-center transition-colors hover:border-cyan"
        >
          <Paperclip className="size-5 text-muted-foreground" aria-hidden="true" />
          <span className="text-sm text-foreground">Attach files</span>
          <span className="text-xs text-muted-foreground">
            Images, STL, OBJ, 3MF, STEP or ZIP — attachments stay in your browser for now
          </span>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,.stl,.obj,.3mf,.step,.stp,.zip"
          className="hidden"
          onChange={(event) => setFiles(Array.from(event.target.files ?? []))}
        />

        <AnimatePresence initial={false}>
          {files.length ? (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="flex flex-col gap-2 overflow-hidden"
            >
              {files.map((file) => (
                <li
                  key={file.name}
                  className="flex items-center justify-between gap-4 border border-border px-4 py-3 text-sm"
                >
                  <span className="truncate">{file.name}</span>
                  <button
                    type="button"
                    aria-label={`Remove ${file.name}`}
                    onClick={() => setFiles((prev) => prev.filter((f) => f.name !== file.name))}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <X className="size-4" />
                  </button>
                </li>
              ))}
            </motion.ul>
          ) : null}
        </AnimatePresence>
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Checking…" : "Submit Request"}
        </Button>
        <p className="text-xs text-muted-foreground">
          Frontend validation only — no backend is connected yet.
        </p>
      </div>
    </form>
  );
}
