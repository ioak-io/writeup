import React, { useEffect, useMemo, useReducer, useState } from 'react';
import { BaseEditor, createEditor, Editor, Transforms } from 'slate'
import { Slate, Editable, ReactEditor, withReact } from 'slate-react'

import './style.css';
import Toolbar from '../Toolbar';
import useEditorConfig from '../useEditorConfig';

export type EditorWrapperProps = {

}

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor
        Element: CustomElement
        Text: CustomText
    }
}

const EditorWrapper = (props: EditorWrapperProps) => {
    const editor = useMemo(() => withReact(createEditor()), []);
    const [value, setValue] = React.useState<any[]>([
        {
            type: 'paragraph',
            children: [{ text: 'A line of text in a paragraph.' }],
        },
    ]);
    const { renderElement, renderLeaf } = useEditorConfig(editor);

    const onKeyDown = (event: any) => {
        console.log(event.key)
        // return next()
    }

    return (
        <div id="editor">
            editor
            <Toolbar editor={editor} />
            <Slate
                editor={editor}
                value={value}
                onChange={(v) => setValue(v)}>
                <Editable
                    renderElement={renderElement}
                    onKeyDown={event => {
                        if (event.key === '`' && event.ctrlKey) {
                            // Prevent the "`" from being inserted by default.
                            event.preventDefault()
                            // Otherwise, set the currently selected blocks type to "code".
                            Transforms.setNodes(
                                editor,
                                { type: 'code' },
                                { match: n => Editor.isBlock(editor, n) }
                            )
                        }
                    }} />
            </Slate>
        </div>
    )
}

export default EditorWrapper;