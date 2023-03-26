import React, { useEffect, useReducer, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Color from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import Text from '@tiptap/extension-text';
import TextAlign from '@tiptap/extension-text-align';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Image from '@tiptap/extension-image';
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Youtube from '@tiptap/extension-youtube'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'

import './style.css';
import Toolbar from '../Toolbar';

export type EditorProps = {

}

const Editor = (props: EditorProps) => {
    const editor = useEditor({
        extensions: [
            Highlight,
            Typography,
            Document, Paragraph, Text, TextStyle, Color,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Image.configure({
                HTMLAttributes: {
                    class: 'my-custom-class',
                },
                inline: true,
                allowBase64: true,
            }),
            Youtube.configure({
                inline: false,
                controls: false,
            }),
            Table.configure({
                HTMLAttributes: {
                    class: 'my-custom-class',
                },
                resizable: true
            }),
            TableRow,
            TableHeader,
            TableCell,
            StarterKit.configure({
                bulletList: {
                    keepMarks: true,
                    keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
                },
                orderedList: {
                    keepMarks: true,
                    keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
                },
            }),
        ],
        content: `Hello`,
    })

    return (
        <div id="editor">
            <Toolbar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    )
}

export default Editor;