import { Personalize } from "@uniformdev/optimize-tracker-react";
import { PersonalizedHeroData } from "../lib/types";
import { Hero } from "./Hero";

export const PersonalizedHero = ({ item }: { item: PersonalizedHeroData }) => {
  return <Personalize variations={item.heros} component={Hero} />;
};
