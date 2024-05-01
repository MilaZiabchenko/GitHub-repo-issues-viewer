import { z } from 'zod';

export const RepoSchema = z.object({
  id: z.number(),
  name: z.string(),
  html_url: z.string(),
  stargazers_count: z.number()
});

export type Repo = z.infer<typeof RepoSchema>;
