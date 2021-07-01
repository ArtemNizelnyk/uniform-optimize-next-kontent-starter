import { Elements } from "@kentico/kontent-delivery";
import { HeroItem, PersonalizedHeroItem } from "./api";
import { ComponentType, HeroData, PersonalizedHeroData } from "./types";

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
    intentTag: convertIntents(hero.intent_tags)
  }
}

export const convertPersonalizedHero = (component: PersonalizedHeroItem): PersonalizedHeroData => {
  return {
    type: ComponentType.PersonalizedHero,
    heros: component.unfrmoptp13nlist.value.map(convertHero)
  }
}