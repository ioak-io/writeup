import React from 'react';
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

export const FullEditor = () => (
  <EditorComposer initialEditorState={initialState}>
    <Editor>
      <ToolbarPlugin>
        <FontFamilyDropdown />
        <FontSizeDropdown />
        <Divider />
        <BoldButton />
        <ItalicButton />
        <UnderlineButton />
        <CodeFormatButton />
        <InsertLinkButton />
        <TextColorPicker />
        <BackgroundColorPicker />
        <TextFormatDropdown />
        <Divider />
        <InsertDropdown />
        <Divider />
        <AlignDropdown />
      </ToolbarPlugin>
    </Editor>
  </EditorComposer>
);
