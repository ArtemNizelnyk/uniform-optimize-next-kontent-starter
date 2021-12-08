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
import KontentSmartLink from "@kentico/kontent-smart-link";
import { useEffect } from "react";

export default function Home({ id, title, components }: HomeProps) {
  const PageSection = (props) => {
    return (
      <div data-kontent-item-id={id}>
        <div data-kontent-element-codename="page_section__content">
          {props.children}
        </div>
      </div>
    );
  };

  useEffect(() => {
    const kontentSmartLink = KontentSmartLink.initialize({
      defaultDataAttributes: {
        projectId: "9b1ee72c-8e7a-0055-fca2-ef882e788627",
        languageCodename: "default",
      },
      queryParam: "preview",
      debug: true,
    });

    return () => {
      kontentSmartLink.destroy();
    };
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="UniformConf, a Uniform Optimize demo site"
        />
      </Head>
      <PageSection>
        {components.map((component, index) => {
          if (isPersonalizedHeroData(component)) {
            return <PersonalizedHero item={component} key={index} />;
          } else if (isHeroData(component)) {
            return <Hero {...component} key={index} />;
          }
        })}
      </PageSection>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  const slug = (context.params?.slug as string) || "homepage";
  const page = await deliveryClient
    .item<PageItem>(slug)
    .depthParameter(3)
    .toPromise();
  const id = page.item.system.id;
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
      id,
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
