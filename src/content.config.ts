import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const programas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/programas' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    duracion_dias: z.number(),
    duracion_noches: z.number(),
    destinos: z.array(z.string()).default([]),
    nivel_exigencia: z.enum(['bajo', 'medio', 'alto']).default('medio'),
    ritmo: z.enum(['relax', 'pausado', 'equilibrado', 'intenso']).default('equilibrado'),
    desde_eur: z.number().optional(),
    desde_usd: z.number().optional(),
    moneda_base: z.string().default('USD'),
    proveedor: z.string().default('PACTO DMC'),
    estado: z.enum(['draft', 'review', 'published']).default('draft'),
    giora_estuvo: z.boolean().default(false),
    updated: z.union([z.string(), z.date()])
      .transform(v => v instanceof Date ? v.toISOString().split('T')[0] : v),
    hero_image: z.string().optional(),
    status: z.enum(['draft', 'review', 'published']).default('draft'),
    tags: z.array(z.string()).default([]),
  }).passthrough(),
});

export const collections = { programas };
