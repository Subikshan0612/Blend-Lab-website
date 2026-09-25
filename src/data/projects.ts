import customCollectiblesImage from "@/assets/work-custom-collectibles.jpg";
import functionalPartsImage from "@/assets/work-functional-parts.jpg";
import characterModelsImage from "@/assets/work-character-models.jpg";
import productPrototypesImage from "@/assets/work-product-prototypes.jpg";
import decorativeObjectsImage from "@/assets/work-decorative-objects.jpg";
import smallBatchImage from "@/assets/work-small-batch.jpg";
import customCollectibles480 from "@/assets/work-custom-collectibles-480.webp";
import customCollectibles960 from "@/assets/work-custom-collectibles-960.webp";
import functionalParts480 from "@/assets/work-functional-parts-480.webp";
import functionalParts960 from "@/assets/work-functional-parts-960.webp";
import characterModels480 from "@/assets/work-character-models-480.webp";
import characterModels960 from "@/assets/work-character-models-960.webp";
import productPrototypes480 from "@/assets/work-product-prototypes-480.webp";
import productPrototypes960 from "@/assets/work-product-prototypes-960.webp";
import decorativeObjects480 from "@/assets/work-decorative-objects-480.webp";
import decorativeObjects960 from "@/assets/work-decorative-objects-960.webp";
import smallBatch480 from "@/assets/work-small-batch-480.webp";
import smallBatch960 from "@/assets/work-small-batch-960.webp";

export type ProjectCategory = "Custom Prints" | "Collectibles" | "Functional" | "Prototypes";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  /** Illustrative image — replace with real Blend Lab photography when available. */
  image: string;
  imageSrcSet: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  /** Layout weight used by the asymmetric grid. */
  span: "wide" | "tall" | "regular";
  meta: string;
}

/** TEMPORARY CONTENT — replace with real Blend Lab projects. */
export const projects: Project[] = [
  {
    slug: "custom-collectibles",
    title: "Custom Collectibles",
    category: "Collectibles",
    summary: "Display pieces printed at fine layer heights and hand-finished.",
    image: customCollectiblesImage,
    imageSrcSet: `${customCollectibles480} 480w, ${customCollectibles960} 960w, ${customCollectiblesImage} 1280w`,
    imageAlt: "A group of abstract 3D printed sculptures on a dark studio workbench",
    imageWidth: 1280,
    imageHeight: 960,
    span: "wide",
    meta: "PLA+ / Matte",
  },
  {
    slug: "functional-parts",
    title: "Functional Parts",
    category: "Functional",
    summary: "Brackets, housings and replacements printed to fit.",
    image: functionalPartsImage,
    imageSrcSet: `${functionalParts480} 480w, ${functionalParts960} 960w, ${functionalPartsImage} 1280w`,
    imageAlt: "A printed electronics enclosure, mounting bracket and connector on a work surface",
    imageWidth: 1280,
    imageHeight: 960,
    span: "regular",
    meta: "PLA+ / Raw",
  },
  {
    slug: "character-models",
    title: "Character Models",
    category: "Collectibles",
    summary: "Sculpted models printed, sanded and painted in detail.",
    image: characterModelsImage,
    imageSrcSet: `${characterModels480} 360w, ${characterModels960} 720w, ${characterModelsImage} 960w`,
    imageAlt: "An original painted science-fiction character model displayed on a plinth",
    imageWidth: 960,
    imageHeight: 1280,
    span: "tall",
    meta: "PLA / Painted",
  },
  {
    slug: "product-prototypes",
    title: "Product Prototypes",
    category: "Prototypes",
    summary: "Form and fit iterations to validate a design before committing.",
    image: productPrototypesImage,
    imageSrcSet: `${productPrototypes480} 480w, ${productPrototypes960} 960w, ${productPrototypesImage} 1280w`,
    imageAlt: "Three progressive 3D printed handheld product prototypes beside design sketches",
    imageWidth: 1280,
    imageHeight: 960,
    span: "regular",
    meta: "PLA / Iteration",
  },
  {
    slug: "decorative-objects",
    title: "Decorative Objects",
    category: "Custom Prints",
    summary: "Objects designed around surface, texture and light.",
    image: decorativeObjectsImage,
    imageSrcSet: `${decorativeObjects480} 480w, ${decorativeObjects960} 960w, ${decorativeObjectsImage} 1280w`,
    imageAlt: "Two ribbed 3D printed decorative vessels on a dark gallery plinth",
    imageWidth: 1280,
    imageHeight: 960,
    span: "regular",
    meta: "PLA+ / Gloss",
  },
  {
    slug: "small-batch-production",
    title: "Small Batch Production",
    category: "Custom Prints",
    summary: "Repeatable runs with consistent finishing across the batch.",
    image: smallBatchImage,
    imageSrcSet: `${smallBatch480} 480w, ${smallBatch960} 960w, ${smallBatchImage} 1280w`,
    imageAlt: "An orderly batch of identical printed housings with one light inspection sample",
    imageWidth: 1280,
    imageHeight: 960,
    span: "wide",
    meta: "Batch / Mixed",
  },
];

export const projectCategories = [
  "All",
  "Custom Prints",
  "Collectibles",
  "Functional",
  "Prototypes",
] as const;
