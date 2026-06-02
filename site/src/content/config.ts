import { defineCollection, z } from 'astro:content';

const markdownCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
  }),
});

export const collections = {
  trip_reports: markdownCollection,
  course_notes: markdownCollection,
};
