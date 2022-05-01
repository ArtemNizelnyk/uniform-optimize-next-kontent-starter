import { Personalize } from '@uniformdev/context-react';
import { Hero } from './Hero';
import { formatPersonalizeVariants } from '../lib/formatPersonalizeVariants';
import { PersonalizedHeroes as IPersonalizedHeroes } from '../lib/contentTypes/personalized_heroes';
import { Hero as IHero } from '../lib/contentTypes/hero';

export function PersonalizedHeroList(props: IPersonalizedHeroes) {
  if (!props.elements.personalizedHeroesList.linkedItems.length) {
    return null;
  }

  //@todo consider adding "count" field to Personalized List content type from the app
  return (
    <Personalize
      name={props.elements.title.value ?? 'Default name for Personalized list of Heroes'}
      variations={formatPersonalizeVariants<IHero>(
        props.elements.personalizedHeroesList.linkedItems as IHero[]
      )}
      component={Hero}
    />
  );
}
