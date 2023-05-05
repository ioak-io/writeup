import './style.css'

import React, { useState, useEffect } from 'react'
import { EditorContent } from '@tiptap/react';
import Toolbar from '../Toolbar';
import ContextBar from '../Toolbar/ContextBar';

// import AlignLeft from '../../icons/feather/align-left.svg';

export type EditorProps = {
    editor: any;
    children: any;
    toolbarPlacement?: 'top' | 'bottom';
}

const Editor = (props: EditorProps) => {
    const [contextBar, setContextBar] = useState<any>();

    const onContextBarChange = (detail: any) => {
        setContextBar(detail);
    }

    return (
        <div className={`writeup-editor ${(props.editor?.isActive('table') || contextBar) ? 'writeup-editor--contextbar-active' : ''} writeup-editor--toolbar-placement-${props.toolbarPlacement || 'top'}`}>
            {props.toolbarPlacement !== "bottom" && <Toolbar editor={props.editor} placement={props.toolbarPlacement} onContextBarChange={onContextBarChange}>
                {props.children}
            </Toolbar>}
            <div className='writeup-editor-content'>
                <EditorContent editor={props.editor} />
            </div>
            {props.toolbarPlacement === "bottom" && <Toolbar editor={props.editor} placement={props.toolbarPlacement} onContextBarChange={onContextBarChange}>
                {props.children}
            </Toolbar>}
        </div>
    )
}

export default Editor;
