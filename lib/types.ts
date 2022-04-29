import { KontentEnhancerResult } from "@uniformdev/canvas-kontent";
import { ComponentInstance } from "@uniformdev/canvas/.";
import { EnrichmentData } from "@uniformdev/context/*";

export enum ComponentType {
  Hero = 'hero',
  PersonalizedHero = 'personalized-hero'
}

export type CanvasToKontentProps = {
  composition: ComponentInstance;
}

export type HeroComponentProps = {
  kontentItem: KontentEnhancerResult;
};

export type ComponentData = HeroData | PersonalizedHeroData;

export type HeroData = {
  type: ComponentType.Hero;
  title: string;
  description: string;
  image: string,
  enrichment: EnrichmentData
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