import './style.css'

import React, { useState, useEffect } from 'react'
import { ToolbarPropsType } from './ToolbarPropsType';
import ContextBar from './ContextBar';
import { EditorContent } from '@tiptap/react';

// import AlignLeft from '../../icons/feather/align-left.svg';

export type EditorProps = {
    editor: any;
}

const Toolbar = ({ editor }: EditorProps) => {

    return (
        <div className={`writeup-editor`}>
            <EditorContent editor={editor} />
        </div>
    )
}

export default Toolbar;
