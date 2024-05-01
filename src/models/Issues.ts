import { z } from 'zod';

const BasicIssuesSchema = z.object({
  total_count: z.number()
});

const IssueSchema = z.object({
  id: z.number(),
  title: z.string(),
  number: z.number(),
  comments: z.number(),
  created_at: z.string(),
  user: z.object({
    type: z.string()
  })
});

export const IssuesSchema = BasicIssuesSchema.extend({
  items: z.array(IssueSchema)
});

export type Issue = z.infer<typeof IssueSchema>;
export type Issues = z.infer<typeof IssuesSchema>;
