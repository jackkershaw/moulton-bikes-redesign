# How I built this site

Identified site i wanted to redesign. Moulton bicycles has an iconic product, but its digital site leaves a lot to be desired. It doesn't even feature a responsive design for mobile devices.

Decided to redesign with a modern stack (Next.js) with headless Shopify.

used [this demo project](https://github.com/vercel/commerce) to get started

Used [this integration guide](https://vercel.com/docs/integrations/ecommerce/shopify) to connect nextjs and headless shopify

Made a collection of bike shops and bike related websites on Are.na to use as inspiration

Made a figma board of this inspiration, looking at what works on other bike company sites and started working out the look of the redesigned site.

Edited template based on this figma design.

## Running locally

You can use this comprehensive [integration guide](https://vercel.com/docs/integrations/ecommerce/shopify) with step-by-step instructions on how to configure Shopify as a headless CMS using Next.js Commerce as your headless Shopify storefront on Vercel.

You will need to use the environment variables [defined in `.env.example`](.env.example) to run Next.js Commerce. It's recommended you use [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables) for this, but a `.env` file is all that is necessary.

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control your Shopify store.

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and GitHub accounts (creates `.vercel` directory): `vercel link`
3. Download your environment variables: `vercel env pull`

```bash
pnpm install
pnpm dev
```

Your app should now be running on [localhost:3000](http://localhost:3000/).
