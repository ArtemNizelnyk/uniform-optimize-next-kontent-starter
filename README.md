
# Uniform Optimize Kontent Taxonomy Integration
A "lite" integration of Uniform Optimize intents leveraging Kontent taxonomy.

## Getting Started
* `yarn install`
* Restore the backup located in the `data` directory using https://kentico.github.io/kontent-template-manager/import
* Copy `.env.example` to `.env`
* Populate the `KONTENT_PROJECT_ID` in `.env` using your `Project Id` from Kontent
* Sign up or create a new account for [Uniform Optimize](https://uniform.app/).
* Create a site in Uniform Optimize
* Create an API key in Uniform Optimize in Site Settings
* Populate `UNIFORM_API_KEY` in `.env` with the Uniform Optimize API key
* Create an intent named `Developer` with a public ID of `dev`. `dev` is what is stored on the taxonomy item's `codename`.
* Create an intent named `Marketer`
* Publish the site in Uniform Optimize
* `yarn generate:intents`
* `yarn dev`

In production builds, `generate:intents` should be run before each site builds so all of the latest intent data is built with the application.