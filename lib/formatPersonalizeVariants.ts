import { PersonalizedVariant } from '@uniformdev/context';
import { IContentItem } from '@kentico/kontent-delivery';

export type PersonalizedContentItem<T> = T & PersonalizedVariant;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatPersonalizeVariants<T extends IContentItem>(
  variants: T[]
): PersonalizedContentItem<T>[] {
  return variants.map((variant) => {
    const personalizedVariant: PersonalizedContentItem<T> = { ...variant, id: variant.system.id };
    if (variant.elements.personalizationCriteria) {
      const parsedValue = JSON.parse(variant.elements.personalizationCriteria.value);
      personalizedVariant.pz = parsedValue as PersonalizedVariant['pz'];
    }
    return personalizedVariant;
  });
}
