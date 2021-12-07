import { ContentItem, DeliveryClient, Elements, IContentItem, TypeResolver } from "@kentico/kontent-delivery";

export type ComponentType = PersonalizedHeroItem | HeroItem;

export class PageItem extends ContentItem {
  public page_components: Elements.LinkedItemsElement<ComponentType>;
  public title: Elements.TextElement
  public slug: Elements.UrlSlugElement
}

export class PersonalizedHeroItem extends ContentItem {
  public unfrmoptp13nlist: Elements.LinkedItemsElement<IContentItem>;
}

export const isPersonalizedHeroItem = (item: IContentItem): item is PersonalizedHeroItem => {
  return item.system.type === 'personalized_hero_banner';
}

export class HeroItem extends ContentItem {
  public title: Elements.TextElement;
  public description: Elements.RichTextElement;
  public image: Elements.AssetsElement;
  public intent_tags: Elements.CustomElement;
}

export const isHeroItem = (item: IContentItem): item is HeroItem => {
  return item.system.type === 'hero_banner';
}

export const deliveryClient = new DeliveryClient({
  projectId: process.env.KONTENT_PROJECT_ID,
  previewApiKey: process.env.KONTENT_PREVIEW_API,
  globalQueryConfig: {
    usePreviewMode: true,
  },
  typeResolvers: [
    new TypeResolver('page', () => new PageItem()),
    new TypeResolver('personalized_hero_banner', () => new PersonalizedHeroItem()),
    new TypeResolver('hero_banner', () => new HeroItem())
  ],
});