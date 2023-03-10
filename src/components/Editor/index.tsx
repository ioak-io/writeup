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
import './editor.css';
import FloatingTextFormatToolbarPlugin from '../../plugins/FloatingTextFormatToolbarPlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import YouTubePlugin from '../../plugins/YouTubePlugin';
import PollPlugin from '../../plugins/PollPlugin';
import TwitterPlugin from '../../plugins/TwitterPlugin';
import FigmaPlugin from '../../plugins/FigmaPlugin';
import ClickableLinkPlugin from '../../plugins/ClickableLinkPlugin';
import { HorizontalRulePlugin } from '@lexical/react/LexicalHorizontalRulePlugin';
import EquationsPlugin from '../../plugins/EquationsPlugin';
import ExcalidrawPlugin from '../../plugins/ExcalidrawPlugin';
import TabFocusPlugin from '../../plugins/TabFocusPlugin';
import { TabIndentationPlugin } from '@lexical/react/LexicalTabIndentationPlugin';
import CollapsiblePlugin from '../../plugins/CollapsiblePlugin';
import DragDropPaste from '../../plugins/DragDropPastePlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { ClearEditorPlugin } from '@lexical/react/LexicalClearEditorPlugin';
import ComponentPickerMenuPlugin from '../../plugins/ComponentPickerPlugin';
import AutoEmbedPlugin from '../../plugins/AutoEmbedPlugin';
import NewMentionsPlugin from '../../plugins/MentionsPlugin';
import { HashtagPlugin } from '@lexical/react/LexicalHashtagPlugin';
import KeywordsPlugin from '../../plugins/KeywordsPlugin';
import SpeechToTextPlugin from '../../plugins/SpeechToTextPlugin';
import CommentPlugin from '../../plugins/CommentPlugin';
import TableCellResizerPlugin from '../../plugins/TableCellResizer';
import ListMaxIndentLevelPlugin from '../../plugins/ListMaxIndentLevelPlugin';
import CodeHighlightPlugin from '../../plugins/CodeHighlightPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';

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
        <div className="editor-shell">
          {/* <ToolbarPlugin />
          <div className="editor-container">
            <RichTextPlugin
              placeholder={<></>}
              contentEditable={<ContentEditable className='editor' />}
              ErrorBoundary={LexicalErrorBoundary} />
            <DragDropPaste />
            <AutoFocusPlugin />
            <ClearEditorPlugin />
            <ComponentPickerMenuPlugin />
            <EmojiPickerPlugin />
            <AutoEmbedPlugin />
            <NewMentionsPlugin />
            <EmojisPlugin />
            <HashtagPlugin />
            <KeywordsPlugin />
            <SpeechToTextPlugin />
            <HistoryPlugin />

            <MarkdownShortcutPlugin />
            <CodeHighlightPlugin />
            <ListPlugin />
            <CheckListPlugin />
            <ListMaxIndentLevelPlugin maxDepth={7} />
            <TablePlugin />
            <TableCellResizerPlugin />
            <ImagesPlugin />
            <LinkPlugin />
            <PollPlugin />
            <TwitterPlugin />
            <YouTubePlugin />
            <FigmaPlugin />
            <ClickableLinkPlugin />
            <HorizontalRulePlugin />
            <EquationsPlugin />
            <ExcalidrawPlugin />
            <TabFocusPlugin />
            <TabIndentationPlugin />
            <CollapsiblePlugin /> */}
          {/* </div> */}
          <Editor />
        </div>
      </LexicalComposer>
    </div>
  );
}

export default EditorWrapper;
