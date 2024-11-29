# Next.js API Function Behavior Demo

This project demonstrates inconsistent behaviour when mixing Vercel serverless functions (`api/*.js`) with Next.js App Router API routes (`app/api/*/route.ts`). It shows how these different API implementations behave across various Next.js environments (local development, Vercel development, and Vercel production).

This behaviour was originally observed using a Python API function as demonstrated in the [FastAPI example](https://vercel.com/templates/next.js/nextjs-fastapi-starter).

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
| `app/api/hello/[slug]/route.ts`<br/><sub>Dynamic app route</sub> | 200 | 404 | 404, unless slug is "[slug]" |

### Test Endpoints
You can test the following endpoints:
- `/api/time`
- `/api/random`
- `/api/hello/test`
- `/api/hello/[slug]`

View an example Vercel deployment of this project [here](https://next-functions-and-routes-poc.vercel.app/).