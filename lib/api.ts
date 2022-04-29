import { ContentItem, Elements, IContentItem } from "@kentico/kontent-delivery";

export class HeroItem extends ContentItem {
  public title: Elements.TextElement;
  public description: Elements.RichTextElement;
  public image: Elements.AssetsElement;
  public intent_tags: Elements.CustomElement;
}