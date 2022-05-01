import React from 'react';
import { IContentItem } from '@kentico/kontent-delivery';
import { resolveRenderer } from './index';
import { Page as IPage } from '../lib/contentTypes/page';

export function PageComponentsList({ components }: { components: IPage['elements']['components'] }) {
  return (
    <div>
      {components &&
        components.linkedItems.map((entry) => {
          // @todo figure out why testing-library is applied inside non-test file
          // I have tried https://github.com/testing-library/eslint-plugin-testing-library#eslint-overrides
          // eslint-disable-next-line testing-library/render-result-naming-convention, @typescript-eslint/no-explicit-any
          const Component: React.ComponentType<IContentItem> = resolveRenderer(entry);

          return <Component key={entry.system.id} {...entry} />;
        })}
    </div>
  );
}
