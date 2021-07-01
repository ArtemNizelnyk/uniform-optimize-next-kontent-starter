import React from "react";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  deliveryClient,
  isHeroItem,
  isPersonalizedHeroItem,
  PageItem,
} from "../lib/api";
import { PersonalizedHero } from "../components/PersonalizedHero";
import {
  ComponentData,
  HomeProps,
  isHeroData,
  isPersonalizedHeroData,
} from "../lib/types";
import { Hero } from "../components/Hero";
import { convertHero, convertPersonalizedHero } from "../lib/utils";

export default function Home({ title, components }: HomeProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <body className="leading-normal tracking-normal text-white gradient" />
      </Head>
      {components.map((component, index) => {
        if (isPersonalizedHeroData(component)) {
          return <PersonalizedHero item={component} key={index} />;
        } else if (isHeroData(component)) {
          return <Hero {...component} key={index} />;
        }
      })}
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  const slug = (context.params?.slug as string) || "homepage";
  const page = await deliveryClient
    .item<PageItem>(slug)
    .depthParameter(3)
    .toPromise();

  const components = page.item.page_components.value.map<ComponentData>(
    (component) => {
      if (isPersonalizedHeroItem(component)) {
        return convertPersonalizedHero(component);
      } else if (isHeroItem(component)) {
        return convertHero(component);
      }
    }
  );

  return {
    props: {
      title: slug,
      components: components,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ["/", "/developers", "/marketers"],
    fallback: false,
  };
};
