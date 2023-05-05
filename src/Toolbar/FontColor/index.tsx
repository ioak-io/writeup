import './style.css'

import React, { useState, useEffect } from 'react'
import { ToolbarPluginPropsType } from '../ToolbarPluginPropsType';

const FontColor = ({ editor }: ToolbarPluginPropsType) => {

    return (
        <div className="color-picker">
            <input
                type="color"
                onInput={(event: any) => editor.chain().focus().setColor(event.target.value).run()}
                value={editor.getAttributes('textStyle').color || "#ffffff"}
            />
        </div>
    )
}

export default FontColor;
