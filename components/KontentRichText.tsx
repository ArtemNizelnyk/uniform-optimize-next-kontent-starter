import type { Elements } from '@kentico/kontent-delivery';

export type KontentRichTextProps = {
  field: Elements.RichTextElement;
  className?: string;
};

export const KontentRichText = ({ field, className }: KontentRichTextProps) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: field.value,
      }}
    />
  );
};
