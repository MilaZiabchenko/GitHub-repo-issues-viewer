import { z } from 'zod';

export const OwnerSchema = z.object({
  login: z.string(),
  html_url: z.string()
});

export type Owner = z.infer<typeof OwnerSchema>;
