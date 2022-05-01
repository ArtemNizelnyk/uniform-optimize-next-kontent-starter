This is StarterKit/Example of [Next.js](https://nextjs.org/) project with direct integration of [Uniform Context](https://docs.uniform.app/context/) with [Kontent](https://kontent.ai/) via Uniform Context app

## Getting Started

First, you need provide API keys to connect with empty Uniform App project and empty Stack in Contentstack:

Copy `.env.example` into `.env` and fill all the keys, for example:

**IMPORTANT**: run slug generation script to enable SSR or SSG - `npm run generate:slug-page`

> The API key must have all the write permissions for Uniform Context in order to complete the setup below.

### Step 1: setup Uniform Context

1. `npm install`
1. Start by running import the Uniform Context definitions from local disk (`/data/context`) into your Uniform project by running this command:

    ```
    npm run push:context
    ```

1. If the command above is successful, now let's pull the newly imported Context definitions into a local manifest stored in `/lib/context-manifest.json` by running this command:

    ```
    npm run generate:manifest
    ```

### Step 2: setup Kontent Project content structure and actual content

Run backup import to install content models and create+publish content and assets:

```
 kontent backup --action restore --name ./scripts/kontent-export --project-id <KONTEN_PROJECT_ID> --api-key <KONTENT_MANAGEMENT_KEY>
```

### Run the project

Run dev server:

```
npm run dev
```

Or run production:

```
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Export you local changes in Contentstack and Uniform

Export latest Kontent content model and content:

```
kontent backup --action backup --project-id <KONTEN_PROJECT_ID> --api-key <KONTENT_MANAGEMENT_KEY>
```

Update TS types after changes in Kontent content structure

```
pnpm generate:types
```

Export Uniform Dev

```
npm run pull:context
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Kontent CMS JS SDK](https://kontent.ai/learn/tutorials/develop-apps/overview/?tech=javascript) - learn about Kontent JS SKD.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
