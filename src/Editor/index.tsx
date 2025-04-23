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
    onChange?: (content: string) => void; 
}

const Editor = (props: EditorProps) => {
    const [contextBar, setContextBar] = useState<any>();

    const onContextBarChange = (detail: any) => {
        setContextBar(detail);
    }

    useEffect(() => {
        if (!props.editor || !props.onChange) return;

        const handleUpdate = () => {
            const html = props.editor.getHTML();
            props.onChange?.(html);
        };

        props.editor.on('update', handleUpdate);

        return () => {
            props.editor.off('update', handleUpdate);
        };
    }, [props.editor, props.onChange]);

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
