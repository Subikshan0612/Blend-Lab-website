import plaImage from "@/assets/material-pla.jpg";
import plaPlusImage from "@/assets/material-pla-plus.jpg";
import matteImage from "@/assets/material-matte.jpg";
import glossImage from "@/assets/material-gloss.jpg";
import chromeImage from "@/assets/material-chrome.jpg";
import customPaintImage from "@/assets/material-custom-paint.jpg";
import postProcessedImage from "@/assets/material-post-processed.jpg";
import pla480 from "@/assets/material-pla-480.webp";
import pla960 from "@/assets/material-pla-960.webp";
import plaPlus480 from "@/assets/material-pla-plus-480.webp";
import plaPlus960 from "@/assets/material-pla-plus-960.webp";
import matte480 from "@/assets/material-matte-480.webp";
import matte960 from "@/assets/material-matte-960.webp";
import gloss480 from "@/assets/material-gloss-480.webp";
import gloss960 from "@/assets/material-gloss-960.webp";
import chrome480 from "@/assets/material-chrome-480.webp";
import chrome960 from "@/assets/material-chrome-960.webp";
import customPaint480 from "@/assets/material-custom-paint-480.webp";
import customPaint960 from "@/assets/material-custom-paint-960.webp";
import postProcessed480 from "@/assets/material-post-processed-480.webp";
import postProcessed960 from "@/assets/material-post-processed-960.webp";

export interface Material {
  name: string;
  kind: "Material" | "Finish";
  note: string;
  /** Token-driven accent used for the swatch treatment. */
  accent: "cyan" | "blue" | "violet" | "magenta" | "amber" | "neutral";
  /** Replaceable close-up photo of the surface treatment. */
  image: string;
  imageSrcSet: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

export const materials: Material[] = [
  {
    name: "PLA",
    kind: "Material",
    note: "Everyday printing for form and display pieces.",
    accent: "neutral",
    image: plaImage,
    imageSrcSet: `${pla480} 480w, ${pla960} 960w, ${plaImage} 1280w`,
    imageAlt: "Close-up of a white PLA print with fine visible layer lines",
    imageWidth: 1280,
    imageHeight: 960,
  },
  {
    name: "PLA+",
    kind: "Material",
    note: "Tougher variant for parts that get handled.",
    accent: "cyan",
    image: plaPlusImage,
    imageSrcSet: `${plaPlus480} 480w, ${plaPlus960} 960w, ${plaPlusImage} 1280w`,
    imageAlt: "Close-up of a durable PLA+ functional part with crisp surface detail",
    imageWidth: 1280,
    imageHeight: 960,
  },
  {
    name: "Matte",
    kind: "Finish",
    note: "Flat surface that reads soft under light.",
    accent: "neutral",
    image: matteImage,
    imageSrcSet: `${matte480} 480w, ${matte960} 960w, ${matteImage} 1280w`,
    imageAlt: "Close-up of a matte finished surface reading soft under low light",
    imageWidth: 1280,
    imageHeight: 960,
  },
  {
    name: "Gloss",
    kind: "Finish",
    note: "Polished surface with sharper highlights.",
    accent: "blue",
    image: glossImage,
    imageSrcSet: `${gloss480} 480w, ${gloss960} 960w, ${glossImage} 1280w`,
    imageAlt: "Close-up of a polished gloss surface with sharp specular highlights",
    imageWidth: 1280,
    imageHeight: 960,
  },
  {
    name: "Chrome",
    kind: "Finish",
    note: "Mirror-like treatment for statement objects.",
    accent: "violet",
    image: chromeImage,
    imageSrcSet: `${chrome480} 480w, ${chrome960} 960w, ${chromeImage} 1280w`,
    imageAlt: "Close-up of a chrome finished object with mirror-like reflections",
    imageWidth: 1280,
    imageHeight: 960,
  },
  {
    name: "Custom Paint",
    kind: "Finish",
    note: "Colour matched and detailed by hand.",
    accent: "magenta",
    image: customPaintImage,
    imageSrcSet: `${customPaint480} 480w, ${customPaint960} 960w, ${customPaintImage} 1280w`,
    imageAlt: "Close-up of a hand-painted surface with colour-matched brushwork",
    imageWidth: 1280,
    imageHeight: 960,
  },
  {
    name: "Post-Processed",
    kind: "Finish",
    note: "Sanded, primed and refined past the layer lines.",
    accent: "amber",
    image: postProcessedImage,
    imageSrcSet: `${postProcessed480} 480w, ${postProcessed960} 960w, ${postProcessedImage} 1280w`,
    imageAlt: "Close-up of a sanded and primed surface refined past the layer lines",
    imageWidth: 1280,
    imageHeight: 960,
  },
];
