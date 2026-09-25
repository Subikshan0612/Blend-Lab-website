import customPrintingImage from "@/assets/service-custom-printing.jpg";
import prototypingImage from "@/assets/service-prototyping.jpg";
import smallBatchImage from "@/assets/service-small-batch.jpg";
import finishingImage from "@/assets/service-finishing.jpg";
import modelFabricationImage from "@/assets/service-model-fabrication.jpg";
import customPrinting480 from "@/assets/service-custom-printing-480.webp";
import customPrinting960 from "@/assets/service-custom-printing-960.webp";
import prototyping480 from "@/assets/service-prototyping-480.webp";
import prototyping960 from "@/assets/service-prototyping-960.webp";
import smallBatch480 from "@/assets/service-small-batch-480.webp";
import smallBatch960 from "@/assets/service-small-batch-960.webp";
import finishing480 from "@/assets/service-finishing-480.webp";
import finishing960 from "@/assets/service-finishing-960.webp";
import modelFabrication480 from "@/assets/service-model-fabrication-480.webp";
import modelFabrication960 from "@/assets/service-model-fabrication-960.webp";

export interface Service {
  number: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  imageSrcSet: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

export const services: Service[] = [
  {
    number: "01",
    title: "Custom 3D Printing",
    description:
      "Print from your file or ours, at the layer height and orientation that suits the object.",
    points: ["Single pieces", "Size and colour options", "File review before printing"],
    image: customPrintingImage,
    imageSrcSet: `${customPrinting480} 480w, ${customPrinting960} 960w, ${customPrintingImage} 1280w`,
    imageAlt: "A professional 3D printer building a geometric object layer by layer",
    imageWidth: 1280,
    imageHeight: 960,
  },
  {
    number: "02",
    title: "Product Prototyping",
    description: "Physical iterations to check form, fit and proportion before you commit.",
    points: ["Form studies", "Fit checks", "Revision rounds"],
    image: prototypingImage,
    imageSrcSet: `${prototyping480} 480w, ${prototyping960} 960w, ${prototypingImage} 1280w`,
    imageAlt: "Three printed form studies arranged beside calipers and concept sketches",
    imageWidth: 1280,
    imageHeight: 960,
  },
  {
    number: "03",
    title: "Small Batch Production",
    description: "Repeat runs of the same part with consistent dimensions and finishing.",
    points: ["Repeatable runs", "Consistent finishing", "Packed per unit"],
    image: smallBatchImage,
    imageSrcSet: `${smallBatch480} 480w, ${smallBatch960} 960w, ${smallBatchImage} 1280w`,
    imageAlt: "A tray of matching printed components prepared for quality control",
    imageWidth: 1280,
    imageHeight: 960,
  },
  {
    number: "04",
    title: "Finishing & Painting",
    description: "Sanding, priming, painting and detailing to take a print past its layer lines.",
    points: ["Sanded and primed", "Matte, gloss or custom paint", "Detail work by hand"],
    image: finishingImage,
    imageSrcSet: `${finishing480} 480w, ${finishing960} 960w, ${finishingImage} 1280w`,
    imageAlt: "A printed object shown through raw, sanded and painted finishing stages",
    imageWidth: 1280,
    imageHeight: 960,
  },
  {
    number: "05",
    title: "Custom Model Fabrication",
    description: "Model preparation and fabrication for pieces that need building, not just printing.",
    points: ["Model prep and repair", "Multi-part assemblies", "Bespoke one-offs"],
    image: modelFabricationImage,
    imageSrcSet: `${modelFabrication480} 480w, ${modelFabrication960} 960w, ${modelFabricationImage} 1280w`,
    imageAlt: "A complex scale model surrounded by its precisely fitted printed components",
    imageWidth: 1280,
    imageHeight: 960,
  },
];

export const capabilities = [
  "Custom Printing",
  "Prototyping",
  "Small Batch",
  "Finishing",
] as const;

export interface ProcessStepData {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStepData[] = [
  { number: "01", title: "Idea", description: "Share your concept, reference or requirements." },
  { number: "02", title: "Design", description: "Prepare or refine the model for fabrication." },
  {
    number: "03",
    title: "Print",
    description: "Produce the object using the appropriate material and settings.",
  },
  {
    number: "04",
    title: "Finish",
    description: "Post-processing, sanding, painting and final detailing where required.",
  },
];
