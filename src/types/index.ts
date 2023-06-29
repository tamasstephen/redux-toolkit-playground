import z from "zod";

export const productSchema = z.object({
  id: z.number(),
  category: z.string(),
  description: z.string(),
  discountPercentage: z.number(),
  images: z.array(z.string()),
  price: z.number(),
  rating: z.number(),
  stock: z.number(),
  thumbnail: z.string(),
  title: z.string(),
});

export const productListSchema = z.array(productSchema);
export const productListResponseSchema = z.object({
  products: productListSchema,
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});

export type Product = z.infer<typeof productSchema>;
