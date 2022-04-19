import { Elements } from "@kentico/kontent-delivery";
import { HeroItem, PersonalizedHeroItem } from "./api";
import { ComponentType, HeroData, PersonalizedHeroData } from "./types";
import {Hero} from "../components/Hero";
import { RenderComponentResolver } from '@uniformdev/canvas-react';

export const convertIntents = (IntentTagValue: Elements.CustomElement) => {
  return JSON.parse(IntentTagValue.value)
}

export const convertImage = (imageValue) => {
  return imageValue.value[0].url
}

export const convertHero = (hero: HeroItem): HeroData => {
  return {
    type: ComponentType.Hero,
    title: hero.title.value,
    description: hero.description.value,
    image: convertImage(hero.image),
  }
}

export const convertPersonalizedHero = (component: PersonalizedHeroItem): PersonalizedHeroData => {
  return {
    type: ComponentType.PersonalizedHero,
    heros: component.unfrmoptp13nlist.value.map(convertHero)
  }
}



function UnknownComponent(component) {
  return `<div>[unknown component: {component.type}]</div>`;
}

export default function resolveRenderer({ type }) {
  if (type == "hero") {
    return Hero;
  }
  return UnknownComponent;
}