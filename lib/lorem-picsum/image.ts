import {object, number, string, TypeOf} from "zod";

export const imageSchema = object({
  id: string(),
  author: string(),
  width: number(),
  height: number(),
  url: string(),
  download_url: string(),
});

export type Image = TypeOf<typeof imageSchema>;

export const validateImage = (image: unknown): Image | never => {
  const parsed = imageSchema.safeParse(image);
  if (!parsed.success) throw new Error("Invalid image structure");
  return parsed.data;
};
