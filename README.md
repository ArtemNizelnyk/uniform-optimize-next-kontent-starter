# Optimize Kontent Next.js Example Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

This is a 'lite' and bare bones personalization example.

### Get your kontent content

- Restore the backup located in the `data` directory using https://kentico.github.io/kontent-template-manager/import

###

- Go into the Kontent CMS, find the Hero Banner component, edit the intent tags field settings.
- Add your API Uniform API key.

### Configure environment variables

- Copy .env.example to .env
- Set kontent variable values to match your CMS
- Configure your Uniform data source

### Install packages

```shell
npm i
# or
yarn
```

### Run the development server

```shell
npm run dev
# or
yarn dev
```

Open <http://localhost:3000> with your browser to see the result.

## Learn More

For full documentation on integrating Kenico Kontent with Uniform Optimize go here: <https://docs.uniform.app/optimize/dev/content-management/kontent/getting-started/>

It is also possible to use Edge Based personalization with CDN Edge workders. This would make sur epersonalization can also work without the need of JavaScript.

Reach out to <https://twitter.com/timbenniks> on Twitter or sign up for a demo at <https://uniform.dev/sign-up> for more information.
