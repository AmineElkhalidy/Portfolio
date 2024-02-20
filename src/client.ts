import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: import.meta.env.VITE_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-02-20",
  useCdn: true,
  token: import.meta.env.VITE_APP_SANITY_TOKEN,
});

// Useful for image of sanity
const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);
