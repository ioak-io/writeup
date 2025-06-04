import React, { useEffect, useReducer, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react'

import './style.css';
import Toolbar from '../Toolbar';
import Undo from '../Toolbar/Undo';
import Redo from '../Toolbar/Redo';
import HeadingDropdown from '../Toolbar/HeadingDropdown';
import Bold from '../Toolbar/Bold';
import Italic from '../Toolbar/Italic';
import Strikethrough from '../Toolbar/Strikethrough';
import AlignmentDropdown from '../Toolbar/AlignmentDropdown';
import AlignLeft from '../Toolbar/AlignLeft';
import AlignCenter from '../Toolbar/AlignCenter';
import AlignRight from '../Toolbar/AlignRight';
import AlignJustify from '../Toolbar/AlignJustify';
import FontColor from '../Toolbar/FontColor';
import HighlightColor from '../Toolbar/HighlightColor';
import BulletList from '../Toolbar/BulletList';
import OrderedList from '../Toolbar/OrderedList';
import BlockQuote from '../Toolbar/BlockQuote';
import Code from '../Toolbar/Code';
import CodeBlock from '../Toolbar/CodeBlock';
import ClearFormatting from '../Toolbar/ClearFormatting';
import HorizontalRule from '../Toolbar/HorizontalRule';
import AddImage from '../Toolbar/AddImage';
import AddTable from '../Toolbar/AddTable';
import AddYoutubeVideo from '../Toolbar/AddYoutubeVideo';
import UnderlineComponent from '../Toolbar/Underline';
import TaskListComponent from '../Toolbar/TaskList';
import { getEditorConfig } from '../utils/EditorUtils';
import Divider from '../Toolbar/Divider';
import Link from '../Toolbar/Link';
import Subscript from '../Toolbar/Subscript';
import SuperScript from '../Toolbar/SuperScript';
import FontFamilyDropdown from '../Toolbar/FontFamilyDropdown';
import Editor from '../Editor';

export type EditorDemoProps = {
    toolbarPlacement?: 'top' | 'bottom';
}

const EditorDemo = (props: EditorDemoProps) => {
    const editor = getEditorConfig();

    return (
        <>
            <div id="editor">
                <Editor editor={editor} toolbarPlacement={props.toolbarPlacement}>
                    <Bold editor={editor} />
                    <Italic editor={editor} />
                    <UnderlineComponent editor={editor} />
                    <Strikethrough editor={editor} />
                    <Subscript editor={editor} />
                    <SuperScript editor={editor} />
                    <HeadingDropdown editor={editor} />
                    <AlignmentDropdown editor={editor} />
                    <FontFamilyDropdown editor={editor} />
                    <AlignLeft editor={editor} />
                    <AlignCenter editor={editor} />
                    <AlignRight editor={editor} />
                    <AlignJustify editor={editor} />
                    <Divider />
                    <BulletList editor={editor} />
                    <OrderedList editor={editor} />
                    <Link editor={editor} />
                    <TaskListComponent editor={editor} />
                    <BlockQuote editor={editor} />
                    <Code editor={editor} />
                    <CodeBlock editor={editor} />
                    <FontColor editor={editor} />
                    <HighlightColor editor={editor} />
                    <ClearFormatting editor={editor} />
                    <HorizontalRule editor={editor} />
                    <Divider />
                    <AddImage editor={editor} imageUploadMethod="POST" imageUploadParam='file'
                        imageUploadURL='http://localhost:4000/api/upload/powerui' />
                    <AddTable editor={editor} />
                    <AddYoutubeVideo editor={editor} />
                    <Divider />
                    <Undo editor={editor} />
                    <Redo editor={editor} />
                </Editor>
            </div>
        </>
    )
}

export default EditorDemo;