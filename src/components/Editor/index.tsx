import { AutoLinkPlugin } from '@lexical/react/LexicalAutoLinkPlugin';
import { CheckListPlugin } from '@lexical/react/LexicalCheckListPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { TablePlugin } from '@lexical/react/LexicalTablePlugin';
import * as React from 'react';
import { useEffect, useState } from 'react';
import Editor from '../../Editor';
import PlaygroundNodes from '../../nodes/PlaygroundNodes';
import ActionsPlugin from '../../plugins/ActionsPlugin';
import EmojiPickerPlugin from '../../plugins/EmojiPickerPlugin';
import EmojisPlugin from '../../plugins/EmojisPlugin';
import ImagesPlugin from '../../plugins/ImagesPlugin';
import ToolbarPlugin from '../../plugins/ToolbarPlugin';
import PlaygroundEditorTheme from '../../themes/PlaygroundEditorTheme';
import './style.css';

const EditorWrapper = () => {

  const initialConfig = {
    namespace: 'Playground',
    onError: (error: Error) => {
      throw error;
    },
    theme: PlaygroundEditorTheme,
    nodes: [...PlaygroundNodes],
  };

  return (
    <div>
      test
      <LexicalComposer initialConfig={initialConfig}>
        <ToolbarPlugin />
        <RichTextPlugin
        placeholder={<></>}
          contentEditable={<ContentEditable className='editor' />}
          ErrorBoundary={LexicalErrorBoundary} />
        {/* <div className="editor-shell"> */}
        <ImagesPlugin />
        <TablePlugin />
        <ListPlugin />
        <LinkPlugin />
        <EmojiPickerPlugin />
        <EmojisPlugin />
        <CheckListPlugin />
        {/* </div> */}
      </LexicalComposer>
    </div>
  );
}

export default EditorWrapper;
