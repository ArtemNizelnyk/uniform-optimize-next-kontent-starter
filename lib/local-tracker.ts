import { Context, ManifestV2, enableContextDevTools } from '@uniformdev/context';
import { NextCookieTransitionDataStore } from '@uniformdev/context-next';
import { NextPageContext } from 'next';
import manifest from './intentManifest.json';

export function createUniformContext(serverContext?: NextPageContext) {
  const context = new Context({
    manifest: manifest as ManifestV2,
    // enable storage consent by default (optional)
    defaultConsent: true,
    // configure next.js for SSR (if not using SSR, you can omit the transitionStore)
    transitionStore: new NextCookieTransitionDataStore({
      serverContext,
    }),
    // enable the Uniform Context Chrome Extension to connect (optional)
    plugins: [enableContextDevTools()],
  });

  return context;
}