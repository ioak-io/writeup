import React, { useEffect, useMemo, useReducer, useState } from 'react';
import { createEditor, Editor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { BaseEditor, Descendant } from 'slate'
import { ReactEditor } from 'slate-react'

import './style.css';
import Toolbar from '../Toolbar';
import useEditorConfig from '../useEditorConfig';

export type EditorWrapperProps = {

}

const EditorWrapper = (props: EditorWrapperProps) => {
    const editor = useMemo(() => withReact(createEditor()), []);
    const [value, setValue] = React.useState<any[]>([
        {
            children: [{ text: 'Testing' }],
        },
    ]);
    const { renderElement, renderLeaf } = useEditorConfig(editor);

    return (
        <div id="editor">
            editor
            <Toolbar editor={editor} />
            <Slate editor={editor} value={value} onChange={(v) => setValue(v)}>
                <Editable className='writeup-editor' renderElement={renderElement} renderLeaf={renderLeaf} />
            </Slate>
        </div>
    )
}

export default EditorWrapper;