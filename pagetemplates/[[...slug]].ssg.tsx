import type { GetStaticPaths, GetStaticPropsContext } from 'next';
import { getEntriesByContentType, getPageBySlug } from '../lib/api';
import Page from '../components/Page';
import { Page as IPage } from '../lib/contentTypes/page';

export default Page;

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context?.params?.slug;
  const slugString = Array.isArray(slug) ? slug.join('/') : slug;
  const preview = Boolean(context.preview);

  const pageSlug = slugString ? `/${slugString}` : '/';
  const page = await getPageBySlug(preview, pageSlug);

  return {
    props: {
      preview,
      page,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages: IPage[] = (await getEntriesByContentType(false, 'page')) ?? [];
  const pagesWithSlugs = pages.map((c) => c.elements.slug.value);

  return {
    paths: pagesWithSlugs,
    fallback: true,
  };
};
