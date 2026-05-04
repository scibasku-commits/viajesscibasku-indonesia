# indonesia.viajesscibasku.com

Microsite Astro + Tailwind para programas a Indonesia operados con DMC PACTO. Subdominio de viajesscibasku.com (mejor SEO que dominio nuevo).

## Stack

- Astro 5 + Tailwind v4
- Content collections (5 programas en `src/content/programas/`)
- Imágenes en Cloudinary `viajesscibasku/indonesia/`
- Deploy en Vercel proyecto `viajesscibasku-indonesia` (team `scibasku`)
- Auto-deploy desde GitHub `scibasku-commits/viajesscibasku-indonesia`

## Local

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # build estático en dist/
```

## Deploy

Push a `main` → Vercel deploya automáticamente.

Manual: `vercel deploy --prod --yes`

## URL producción

- Vercel: https://viajesscibasku-indonesia.vercel.app
- Dominio final: https://indonesia.viajesscibasku.com (pendiente CNAME en GoDaddy)

## TODO operativo (al despertar)

### 1. Configurar DNS en GoDaddy

Login en https://dcc.godaddy.com → DNS de viajesscibasku.com → añadir registro:

```
Type:   CNAME
Name:   indonesia
Value:  cname.vercel-dns.com
TTL:    1 hora
```

Vercel auto-emite SSL en ~5 minutos tras propagación.

### 2. Verificar dominio

```bash
dig indonesia.viajesscibasku.com CNAME +short
# debe devolver: cname.vercel-dns.com.
curl -sI https://indonesia.viajesscibasku.com | head -3
```

### 3. Cuando llegue respuesta de PACTO sobre API

Si confirman comisión y/o connectivity, actualizar:

- `src/content/programas/*.md`: añadir campo `comision_b2c` y `precio_publico`
- `src/components/ProgramaCard.astro`: mostrar precio público con desde €
- `~/projects/scibasku-knowledge/raw/proveedores/pacto-dmc.md`: actualizar sección "Estado de la relación con Scibasku"

## Estructura

```
src/
├── content/programas/      # 5 markdown con itinerarios
├── content.config.ts       # schema Zod de programas
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   └── ProgramaCard.astro
├── layouts/BaseLayout.astro
├── pages/
│   ├── index.astro                  # home con hero + 5 cards
│   ├── programas/index.astro        # listado completo
│   ├── programas/[slug].astro       # detalle dinámico
│   ├── sobre-indonesia.astro
│   └── contacto.astro
└── styles/global.css       # paleta Scibasku oro/cian/dark
```

## Programas publicados

| Slug | Días | Desde € | Estado |
|---|---|---|---|
| `gran-vuelta-indonesia` | 25 | 3.275 | draft |
| `indonesia-esencial` | 12 | 1.430 | draft |
| `bali-authentic` | 5 | 565 | draft |
| `bali-highlights` | 4 | 405 | draft |
| `bali-lembongan` | 4 | 240 | draft |

Precios orientativos sobre tarifa neta PACTO 2026 (1-abr → 31-oct), grupo 4-8 pax, sin vuelos internacionales.

## Diseño

V0 funcional. Cuando Giora apruebe contenido, iterar diseño con DESIGN.md propio.

## Voz editorial

Datos verificables, sin marketing vacío, blackouts religiosos honestos, opinión personal solo si Giora estuvo (`giora_estuvo: false` actualmente — todos los programas están redactados con perspectiva de agente, no de viajero).
