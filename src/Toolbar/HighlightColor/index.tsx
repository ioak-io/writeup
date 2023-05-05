import './style.css'

import React, { useState, useEffect } from 'react'
import { ToolbarPluginPropsType } from '../ToolbarPluginPropsType';

const HighlightColor = ({ editor }: ToolbarPluginPropsType) => {

    return (
        <div className="color-picker">
            <input
                type="color"
                onInput={(event: any) => editor.chain().focus().toggleHighlight({ color: event.target.value }).run()}
                value={editor.getAttributes('highlight').color || "#ffffff"}
            />
        </div>
    )
}

export default HighlightColor;
