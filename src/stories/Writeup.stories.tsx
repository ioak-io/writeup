import React, { useRef, useState } from 'react';
import { $createParagraphNode, $createTextNode, $getRoot } from 'lexical';
import { SharedAutocompleteContext } from '../context/SharedAutocompleteContext';
import { TableContext } from '../plugins/TablePlugin';
import { SharedHistoryContext, useSharedHistoryContext } from '../context/SharedHistoryContext';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import PlaygroundNodes from '../nodes/PlaygroundNodes';
import PlaygroundEditorTheme from '../themes/PlaygroundEditorTheme';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import ContentEditable from '../ui/ContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import Placeholder from '../ui/Placeholder';
import { SettingsContext, useSettings } from '../context/SettingsContext';
import ToolbarPlugin from '../plugins/ToolbarPlugin';
import '../style.css';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { CheckListPlugin } from '@lexical/react/LexicalCheckListPlugin';
import { TablePlugin } from '@lexical/react/LexicalTablePlugin';
import ListMaxIndentLevelPlugin from '../plugins/ListMaxIndentLevelPlugin';
import TableCellResizerPlugin from '../plugins/TableCellResizer';
import { TablePlugin as NewTablePlugin } from '../plugins/TablePlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import NewMentionsPlugin from '../plugins/MentionsPlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import ImagesPlugin from '../plugins/ImagesPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import ClickableLinkPlugin from '../plugins/ClickableLinkPlugin';
import FloatingTextFormatToolbarPlugin from '../plugins/FloatingTextFormatToolbarPlugin';
import TableCellNodes from '../nodes/TableCellNodes';
import YouTubePlugin from '../plugins/YouTubePlugin';
import EquationsPlugin from '../plugins/EquationsPlugin';
import PollPlugin from '../plugins/PollPlugin';
import TwitterPlugin from '../plugins/TwitterPlugin';
import FigmaPlugin from '../plugins/FigmaPlugin';
import { HorizontalRulePlugin } from '@lexical/react/LexicalHorizontalRulePlugin';
import ExcalidrawPlugin from '../plugins/ExcalidrawPlugin';
import { MaxLengthPlugin } from '../plugins/MaxLengthPlugin';
import DragDropPaste from '../plugins/DragDropPastePlugin';
import { ClearEditorPlugin } from '@lexical/react/LexicalClearEditorPlugin';
import ComponentPickerMenuPlugin from '../plugins/ComponentPickerPlugin';
import EmojiPickerPlugin from '../plugins/EmojiPickerPlugin';
import AutoEmbedPlugin from '../plugins/AutoEmbedPlugin';
import EmojisPlugin from '../plugins/EmojisPlugin';
import { HashtagPlugin } from '@lexical/react/LexicalHashtagPlugin';
import KeywordsPlugin from '../plugins/KeywordsPlugin';
import SpeechToTextPlugin from '../plugins/SpeechToTextPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import CodeHighlightPlugin from '../plugins/CodeHighlightPlugin';
import TabFocusPlugin from '../plugins/TabFocusPlugin';
import { TabIndentationPlugin } from '@lexical/react/LexicalTabIndentationPlugin';
import CollapsiblePlugin from '../plugins/CollapsiblePlugin';

export default {
  title: 'Writeup',
};

const initialState = () => {
  const paragraph = $createParagraphNode();
  const text = $createTextNode('Hello World!');
  paragraph.append(text);
  const root = $getRoot();
  root.append(paragraph);
  root.selectEnd();
};

export const FullEditor = () => {
  const placeholder = <Placeholder>placeholder text</Placeholder>;
  const {
    settings: {
      isCollab,
      isAutocomplete,
      isMaxLength,
      isCharLimit,
      isCharLimitUtf8,
      isRichText,
      showTreeView,
      showTableOfContents,
    },
  } = useSettings();

  const editorStateRef = useRef(null);
  const { historyState } = useSharedHistoryContext();
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null);
  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };
  const {
    settings: { emptyEditor },
  } = useSettings();

  const initialConfig = {
    editorState: isCollab
      ? null
      : emptyEditor
        ? undefined
        : "prepopulatedRichText",

    namespace: 'Playground',
    nodes: [...PlaygroundNodes],
    onError: (error: Error) => {
      throw error;
    },
    theme: PlaygroundEditorTheme,
  };

  const cellEditorConfig = {
    namespace: 'Playground',
    nodes: [...TableCellNodes],
    onError: (error: Error) => {
      throw error;
    },
    theme: PlaygroundEditorTheme,
  };

  return (
    <SettingsContext>
      <LexicalComposer initialConfig={initialConfig}>
        <SharedHistoryContext>
          <TableContext>
            <SharedAutocompleteContext>
              <div className="editor-shell">
                <ToolbarPlugin />
                <div
                  className={`editor-container ${showTreeView ? 'tree-view' : ''} ${!isRichText ? 'plain-text' : ''
                    }`}>
                  {/* <MaxLengthPlugin maxLength={30} /> */}
                  <DragDropPaste />
                  <AutoFocusPlugin />
                  <ClearEditorPlugin />
                  <ComponentPickerMenuPlugin />
                  <EmojiPickerPlugin />
                  <AutoEmbedPlugin />
                  {/* <MentionsPlugin /> */}
                  <EmojisPlugin />
                  <HashtagPlugin />
                  <KeywordsPlugin />
                  <SpeechToTextPlugin />
                  {/* <AutoLinkPlugin /> */}
                  <HistoryPlugin externalHistoryState={historyState} />
                  <RichTextPlugin
                    contentEditable={
                      <div className="editor-scroller">
                        <div className="editor" ref={onRef}>
                          <ContentEditable />
                        </div>
                      </div>
                    }
                    placeholder={placeholder}
                    ErrorBoundary={LexicalErrorBoundary}
                  />
                  <MarkdownShortcutPlugin />
                  <CodeHighlightPlugin />
                  <ListPlugin />
                  <CheckListPlugin />
                  <ListMaxIndentLevelPlugin maxDepth={7} />
                  <TablePlugin />
                  <TableCellResizerPlugin />
                  <NewTablePlugin cellEditorConfig={cellEditorConfig}>
                    <AutoFocusPlugin />
                    <RichTextPlugin
                      contentEditable={
                        <ContentEditable className="TableNode__contentEditable" />
                      }
                      placeholder={null}
                      ErrorBoundary={LexicalErrorBoundary}
                    />
                    <NewMentionsPlugin />
                    <HistoryPlugin />
                    <ImagesPlugin captionsEnabled={false} />
                    <LinkPlugin />
                    <ClickableLinkPlugin />
                    <FloatingTextFormatToolbarPlugin />
                  </NewTablePlugin>
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
                  <CollapsiblePlugin />
                </div>
              </div>
            </SharedAutocompleteContext>
          </TableContext>
        </SharedHistoryContext>
      </LexicalComposer>
    </SettingsContext>
  )
};
