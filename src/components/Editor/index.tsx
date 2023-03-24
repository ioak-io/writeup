import React, { useEffect, useReducer, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Color from '@tiptap/extension-color';
import Image from '@tiptap/extension-image';
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'

import './style.css';
import Toolbar from '../Toolbar';

export type EditorProps = {

}

const Editor = (props: EditorProps) => {
    const editor = useEditor({
        extensions: [
            // TextStyle,
            // Text,
            // Paragraph,
            // Document,
            Color.configure({
                types: ['textStyle'],
              }),
            Image.configure({
                HTMLAttributes: {
                    class: 'my-custom-class',
                },
                inline: true,
                allowBase64: true,
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