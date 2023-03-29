import './style.css'

import React, { useState, useEffect } from 'react'
import { ToolbarPluginPropsType } from '../ToolbarPluginPropsType';

const FontFamilyDropdown = ({ editor }: ToolbarPluginPropsType) => {

    const handleChange = (event: any) => {
        switch (event.currentTarget.value) {
            case "Comic Sans":
                editor.chain().focus().setFontFamily('Comic Sans MS, Comic Sans').run()
                break;
            case "Font family":
            case "-Clear-":
                editor.chain().focus().unsetFontFamily().run()
                break;
            default:
                editor.chain().focus().setFontFamily(event.currentTarget.value).run()
        }
    }

    return (
        <select className={`heading-select ${(
                editor.isActive('textStyle', { fontFamily: 'Comic Sans MS, Comic Sans' }) ||
                editor.isActive('textStyle', { fontFamily: 'Inter' }) ||
                editor.isActive('textStyle', { fontFamily: 'Monospace' }) ||
                editor.isActive('textStyle', { fontFamily: 'Serif' }) ||
                editor.isActive('textStyle', { fontFamily: 'Georgia' })
            ) ? 'is-active' : ''}`}
            value={
                editor.isActive('textStyle', { fontFamily: 'Comic Sans MS, Comic Sans' }) ? 'Comic Sans' :
                    editor.isActive('textStyle', { fontFamily: 'Inter' }) ? 'Inter' :
                        editor.isActive('textStyle', { fontFamily: 'Monospace' }) ? 'Monospace' :
                            editor.isActive('textStyle', { fontFamily: 'Serif' }) ? 'Serif' :
                                editor.isActive('textStyle', { fontFamily: 'Georgia' }) ? 'Georgia' : 'Font family'
            }
            onChange={handleChange}>
            <option>Font family</option>
            <option>Inter</option>
            <option>Comic Sans</option>
            <option>Monospace</option>
            <option>Serif</option>
            <option>Georgia</option>
            <option>-Clear-</option>
        </select>
    )
}

export default FontFamilyDropdown;
