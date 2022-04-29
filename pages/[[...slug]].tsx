import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  CanvasToKontentProps, HeroComponentProps
} from "../lib/types";
import { CanvasClient, enhance, EnhancerBuilder } from '@uniformdev/canvas'
import { Composition, Slot } from '@uniformdev/canvas-react';
import {resolveRenderer} from "../lib/utils";
import { kontentEnhancer } from "../lib/enchansing";
import { CANVAS_KONTENT_PARAMETER_TYPES } from "@uniformdev/canvas-kontent";

export default function Home({ composition }: CanvasToKontentProps) {
  return (
    <>
    <div>some strange data here</div>
    <Composition<HeroComponentProps> data={composition} resolveRenderer={resolveRenderer}>
      <Slot name="main" />      
    </Composition>

    </>
  );
}

export const getStaticProps: GetStaticProps<CanvasToKontentProps> = async (context) => {

    // create the Canvas client
    const client = new CanvasClient({
      // if this weren't a tutorial, ↙ should be in an environment variable :)
      apiKey: process.env.UNIFORM_API_KEY,
      // if this weren't a tutorial, ↙ should be in an environment variable :)
      projectId: process.env.UNIFORM_PROJECT_ID,
      apiHost: process.env.UNIFORM_CLI_BASE_URL
      
    });
    const slug = (context.params?.slug as string)|| "";
    // fetch the composition from Canvas
    const { composition } = await client.getCompositionBySlug({
      // if you used something else as your slug, use that here instead
      slug: "/"+slug,
    });

    await enhance({
      composition,
      enhancers: new EnhancerBuilder().parameterType(CANVAS_KONTENT_PARAMETER_TYPES, kontentEnhancer),
      context: {},
    });
    //console.log (composition.slots.main[0].slots.pz[0].parameters.image.value)
  
    // set `composition` as a prop to the route
    return {
      props: {
        composition:composition,
      },
    };
  }

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ["/", "/developers", "/marketers"],
    fallback: false,
  };
};
