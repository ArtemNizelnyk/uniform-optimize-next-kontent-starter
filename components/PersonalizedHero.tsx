import { Personalize } from "@uniformdev/optimize-tracker-react";
import { PersonalizedHeroData } from "../lib/types";
import { Hero } from "./Hero";
import { useRouter } from "next/router";

export const PersonalizedHero = ({ item }: { item: PersonalizedHeroData }) => {
  const { query } = useRouter();

  if (query.preview) {
    return (
      <div className="personalized-hero-preview relative">
        <p className="preview-mode fixed z-50 top-20 left-0 p-2 w-full bg-black text-white">
          You are in preview mode inside Spotlight. We are showing all hero
          variants for easy editing.
        </p>
        {item.heros.map((hero, index) => (
          <Hero {...hero} key={index} />
        ))}
      </div>
    );
  } else {
    return <Personalize variations={item.heros} component={Hero} />;
  }
};
