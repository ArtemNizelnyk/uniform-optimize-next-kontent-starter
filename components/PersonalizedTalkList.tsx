import { Personalize } from '@uniformdev/context-react';
import { TalkList } from './TalkList';
import { formatPersonalizeVariants } from '../lib/formatPersonalizeVariants';
import { PersonalizedTalksLists as IPersonalizedTalksLists } from '../lib/contentTypes/personalized_talks_lists';
import { TalksList as ITalksList } from '../lib/contentTypes/talks_list';

export function PersonalizedTalkList(props: IPersonalizedTalksLists) {
  if (!props.elements.personalizedTalksListsList.linkedItems.length) {
    return null;
  }

  //@todo consider adding "count" field to Personalized List content type from the app
  return (
    <Personalize
      name={props.elements.title.value ?? 'Default name for Personalized list of TalkList'}
      variations={formatPersonalizeVariants<ITalksList>(
        props.elements.personalizedTalksListsList.linkedItems as ITalksList[]
      )}
      component={TalkList}
    />
  );
}
