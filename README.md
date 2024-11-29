# Next.js API Function Behavior Demo

This project demonstrates unexpected behaviors when mixing Vercel serverless functions (`api/*.js`) with Next.js App Router API routes (`app/api/*/route.ts`). It shows how these different API implementations behave across various Next.js environments (local development, Vercel development, and Vercel production), revealing some surprising inconsistencies.

## Installation

```bash
pnpm install
```

## API Function Behavior

This project demonstrates different API function behaviors across various Next.js environments:

| Function Type | next dev | vercel dev | vercel deployed |
|--------------|----------|------------|-----------------|
| `api/time.js`<br/><sub>Root level Node.js function</sub> | 404 (expected) | 200 | 200 |
| `app/api/random/route.ts`<br/><sub>App route</sub> | 200 | 404 | 200 |
| `app/api/hello/[slug]/route.ts`<br/><sub>Dynamic app route</sub> | 200 | 404 | 200 if slug is '[slug]', or 405 |

### Test Endpoints
You can test the following endpoints:
- `/api/time`
- `/api/random`
- `/api/hello/test`
- `/api/hello/[slug]`
