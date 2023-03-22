import React, { useRef, useState } from 'react';
import ToolbarPlugin from '../plugins/ToolbarPlugin/ToolbarPlugin';

import {
  AlignDropdown,
  BackgroundColorPicker,
  BlockFormatDropdown,
  BoldButton,
  CodeFormatButton,
  CodeLanguageDropdown,
  FloatingLinkEditor,
  FontFamilyDropdown,
  FontSizeDropdown,
  InsertDropdown,
  InsertLinkButton,
  ItalicButton,
  RedoButton,
  TextColorPicker,
  TextFormatDropdown,
  UnderlineButton,
  UndoButton,
} from '../plugins/ToolbarPlugin/components';
import { $createParagraphNode, $createTextNode, $getRoot } from 'lexical';
import EditorComposer from '../EditorComposer';
import Editor from '../Editor';
import Divider from '../ui/Divider';
import { SharedAutocompleteContext } from '../context/SharedAutocompleteContext';
import { TableContext } from '../plugins/TablePlugin';
import { SharedHistoryContext, useSharedHistoryContext } from '../context/SharedHistoryContext';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import Settings from '../Settings';
import PlaygroundNodes from '../nodes/PlaygroundNodes';
import PlaygroundEditorTheme from '../themes/PlaygroundEditorTheme';
import EditorContext from '../context/EditorContext';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import Placeholder from '../ui/Placeholder';
import { SettingsContext, useSettings } from '../context/SettingsContext';

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
    settings: { emptyEditor, measureTypingPerf },
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

  return (
    <SettingsContext>
      <LexicalComposer initialConfig={initialConfig}>
        <SharedHistoryContext>
          <TableContext>
            <SharedAutocompleteContext>
              {/* <ToolbarPlugin /> */}
              <div className="editor-shell"><div
                className={`editor-container ${showTreeView ? 'tree-view' : ''} ${!isRichText ? 'plain-text' : ''
                  }`}>
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
              </div>
              </div>
            </SharedAutocompleteContext>
          </TableContext>
        </SharedHistoryContext>
      </LexicalComposer></SettingsContext>
  )
};
