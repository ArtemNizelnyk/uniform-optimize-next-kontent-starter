import { Elements } from "@kentico/kontent-delivery";
import { ComponentType, HeroData, PersonalizedHeroData } from "./types";
import { Hero } from "../components/Hero";
import { RenderComponentResolver } from "@uniformdev/canvas-react";
import { ComponentInstance } from "@uniformdev/canvas/.";

export const convertIntents = (IntentTagValue: Elements.CustomElement) => {
  return JSON.parse(IntentTagValue.value);
};

export const convertImage = (imageValue) => {
  return imageValue.value[0].url;
};

export const convertHero = (hero: any): HeroData => {
  return {
    type: ComponentType.Hero,
    title: hero.elements.title.value,
    description: hero.elements.description.value,
    image: convertImage(hero.elements.image),
    enrichment: hero.elements.enrichment,
  };
};


function UnknownComponent({ component }) {
  return <h1>This is unknown component type: {component.type}</h1>;
}

export const resolveRenderer: RenderComponentResolver = (type: ComponentInstance) => {
  if (type.type == "hero") {
    return Hero;
  }
  return UnknownComponent;
};
