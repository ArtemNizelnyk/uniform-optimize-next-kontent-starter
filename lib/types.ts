import { IntentTags } from '@uniformdev/optimize-common';

export enum ComponentType {
  Hero = 'hero',
  PersonalizedHero = 'personalized-hero'
}

export type HomeProps = {
  id: string;
  title: string;
  components: (HeroData | PersonalizedHeroData)[]
}

export type ComponentData = HeroData | PersonalizedHeroData;

export type HeroData = {
  id: string;
  type: ComponentType.Hero;
  title: string;
  description: string;
  image: string,
  intentTag: IntentTags | undefined | null;
}

export const isHeroData = (item: { type: string }): item is HeroData => {
  return item.type === ComponentType.Hero;
}

export type PersonalizedHeroData = {
  type: ComponentType.PersonalizedHero;
  heros: HeroData[];
}

export const isPersonalizedHeroData = (item: { type: string }): item is PersonalizedHeroData => {
  return item.type === ComponentType.PersonalizedHero;
}