import type { NextPage } from 'next';
import Head from 'next/head';
import { Track } from '@uniformdev/context-react';
import type { Page as IPage } from '../lib/contentTypes/page';
import { PageComponentsList } from './PageComponentsList';
import { EnrichmentData } from '@uniformdev/context';

export type PageProps = {
  preview: boolean;
  page: IPage;
};

const Page: NextPage<PageProps> = (props) => {
  const { page } = props;
  const behaviour: EnrichmentData[] = [];
  if (page.elements.enrichmentTags?.value) {
    const parsedValue = JSON.parse(page.elements.enrichmentTags.value);
    behaviour.push(...parsedValue);
  }
  return (
    <Track behavior={behaviour}>
      <Head>
        <title>Uniform Context + Kontent + NextJS</title>
        <meta name="description" content="Generated by create next app, modified with typescript, etc" />
      </Head>

      {page?.elements.components && <PageComponentsList components={page?.elements.components} />}
    </Track>
  );
};

export default Page;
