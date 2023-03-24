import React, { useEffect, useReducer, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image';
import ImageResize from 'tiptap-imagresize';

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
            Image.configure({
                HTMLAttributes: {
                  class: 'my-custom-class',
                },
                inline: true,
                allowBase64: true,
            }),
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