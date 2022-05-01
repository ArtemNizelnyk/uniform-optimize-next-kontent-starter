import { ComponentType } from 'react';
import { IContentItem } from '@kentico/kontent-delivery';
import { DefaultNotImplementedComponent } from './DefaultNotImplementedComponent';
import { Hero } from './Hero';
import { TalkList } from './TalkList';
import { WhyAttend } from './WhyAttend';
import { Talk } from './Talk';
import { RegisterForm } from './RegisterForm';
import Navbar from './Navbar';
import Footer from './Footer';
import { PersonalizedTalkList } from './PersonalizedTalkList';
import { PersonalizedHeroList } from './PersonalizedHeroList';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ComponentMapping = Record<string, ComponentType<any>>;

const mappings: ComponentMapping = {
  hero: Hero,
  talks_list: TalkList,
  talk: Talk,
  why_attend: WhyAttend,
  registration_form: RegisterForm,
  header: Navbar,
  footer: Footer,
  personalized_heroes: PersonalizedHeroList,
  personalized_talks_lists: PersonalizedTalkList,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function resolveRenderer(kontentEntry: IContentItem): ComponentType<IContentItem> {
  const componentImpl = mappings[kontentEntry.system.type];
  return componentImpl ?? DefaultNotImplementedComponent;
}

export default mappings;
