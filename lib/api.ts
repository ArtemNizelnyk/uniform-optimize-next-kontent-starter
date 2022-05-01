import {
  createDeliveryClient,
  IContentItem,
  IContentItemElements,
  camelCasePropertyNameResolver,
} from '@kentico/kontent-delivery';
import type { Page } from './contentTypes/page';

if (!process.env.KONTEN_PROJECT_ID) {
  throw new Error('KONTEN_PROJECT_ID env not set.');
}

if (!process.env.KONTENT_PREVIEW_PRIMARY_KEY) {
  throw new Error('KONTENT_PREVIEW_PRIMARY_KEY env not set.');
}

if (!process.env.KONTENT_PREVIEW_SECONDARY_KEY) {
  throw new Error('KONTENT_PREVIEW_SECONDARY_KEY env not set.');
}

const deliveryClient = createDeliveryClient({
  projectId: process.env.KONTEN_PROJECT_ID,
  previewApiKey: process.env.KONTENT_PREVIEW_PRIMARY_KEY,
  propertyNameResolver: camelCasePropertyNameResolver,
});

const client = deliveryClient;

const previewClient = deliveryClient;

const getClient = (preview: boolean) => (preview ? previewClient : client);

export const getPageBySlug = async (preview: boolean, slug: string): Promise<Page | undefined> => {
  const result = await getClient(preview)
    .items<Page>()
    .type('page')
    .equalsFilter('elements.slug', slug)
    .depthParameter(3)
    .toPromise();

  const first = result.data.items[0];
  return first ?? undefined;
};

export const getEntriesByContentType = async <T extends IContentItemElements>(
  preview: boolean,
  type: string
): Promise<IContentItem<T>[]> => {
  const result = await getClient(preview).items<IContentItem<T>>().type(type).toPromise();

  return result.data.items;
};
