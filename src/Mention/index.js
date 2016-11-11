import React from 'react';
import { Entity } from 'draft-js';

const Mention = (props) => {
    const { entityKey,  theme = {}, mentionComponent } = props;
    const { mention } = Entity.get(entityKey).getData();

    const MentionLink = ({ mention, mentionPrefix, children, theme }) => (
        <a
            href={ mention.get('link') }
            className={ theme.mention }
            spellCheck={ false }
        >
            { mentionPrefix }{ children }
        </a>
    );

    const MentionText = ({ theme, mentionPrefix, children}) =>  (
        <span
          className={ theme.mention }
          spellCheck={ false }
        >
          { mentionPrefix }{ children } 
        </span>
    );

    const Component = (
        mentionComponent || (mention.has('link') ? MentionLink : MentionText)
    );



    return (
        <Component
            entityKey={entityKey}
            theme={theme}
            mention={mention}
            mentionPrefix={props.mentionPrefix}
        >
            { props.children }
        </Component>
    );
};

export default Mention;
