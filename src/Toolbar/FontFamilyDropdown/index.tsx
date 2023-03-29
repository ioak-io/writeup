import './style.css'

import React, { useState, useEffect } from 'react'
import { ToolbarPluginPropsType } from '../ToolbarPluginPropsType';

const FontFamilyDropdown = ({ editor }: ToolbarPluginPropsType) => {

    const handleChange = (event: any) => {
        switch (event.currentTarget.value) {
            case "Comic Sans":
                editor.chain().focus().setFontFamily('Comic Sans MS, Comic Sans').run()
                break;
            case "Reset":
                editor.chain().focus().unsetFontFamily().run()
                break;
            default:
                editor.chain().focus().setFontFamily(event.currentTarget.value).run()
        }
    }

    return (
        <select className={`heading-select ${!editor.isActive({ 'textStyle': { fontFamily: 'Comic Sans MS, Comic Sans' } }) ? 'is-active' : ''}`}
            value={
                editor.isActive('textStyle', { fontFamily: 'Comic Sans MS, Comic Sans' }) ? 'Comic Sans' :
                    editor.isActive('textStyle', { fontFamily: 'Inter' }) ? 'Inter' :
                        editor.isActive('textStyle', { fontFamily: 'Monospace' }) ? 'Monospace' :
                            editor.isActive('textStyle', { fontFamily: 'Serif' }) ? 'Serif' :
                                editor.isActive('textStyle', { fontFamily: 'Georgia' }) ? 'Georgia' : 'Reset'
            }
            onChange={handleChange}>
            <option>Inter</option>
            <option>Comic Sans</option>
            <option>Monospace</option>
            <option>Serif</option>
            <option>Georgia</option>
            <option>Reset</option>
        </select>
    )
}

export default FontFamilyDropdown;
