import {object, number, string, TypeOf} from "zod";

export const picsumImageSchema = object({
  id: string(),
  author: string(),
  width: number(),
  height: number(),
  url: string(),
  download_url: string(),
});

export type PicsumImage = TypeOf<typeof picsumImageSchema>;

export const validateImage = (image: unknown): PicsumImage | never => {
  const parsed = picsumImageSchema.safeParse(image);
  if (!parsed.success) throw new Error("Invalid image structure");
  return parsed.data;
};
