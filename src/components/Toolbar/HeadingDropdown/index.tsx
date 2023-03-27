import './style.css'

import React, { useState, useEffect } from 'react'
import { ToolbarPluginPropsType } from '../ToolbarPluginPropsType';

const HeadingDropdown = ({ editor }: ToolbarPluginPropsType) => {

    const handleHeadingStateChange = (event: any) => {
        switch (event.currentTarget.value) {
            case "Heading 1":
                editor.chain().focus().toggleHeading({ level: 1 }).run()
                break;
            case "Heading 2":
                editor.chain().focus().toggleHeading({ level: 2 }).run();
                break;
            case "Heading 3":
                editor.chain().focus().toggleHeading({ level: 3 }).run();
                break;
            case "Heading 4":
                editor.chain().focus().toggleHeading({ level: 4 }).run();
                break;
            case "Heading 5":
                editor.chain().focus().toggleHeading({ level: 5 }).run();
                break;
            case "Heading 6":
                editor.chain().focus().toggleHeading({ level: 6 }).run();
                break;
            default:
                editor.chain().focus().setParagraph().run();
        }
    }

    return (
        <select className={`heading-select ${!editor.isActive('paragraph') ? 'is-active' : ''}`}
                value={
                    editor.isActive('heading', { level: 1 }) ? 'Heading 1' :
                        editor.isActive('heading', { level: 2 }) ? 'Heading 2' :
                            editor.isActive('heading', { level: 3 }) ? 'Heading 3' :
                                editor.isActive('heading', { level: 4 }) ? 'Heading 4' :
                                    editor.isActive('heading', { level: 5 }) ? 'Heading 5' :
                                        editor.isActive('heading', { level: 6 }) ? 'Heading 6' : "Paragraph"
                }
                onChange={handleHeadingStateChange}>
                <option>Paragraph</option>
                <option>Heading 1</option>
                <option>Heading 2</option>
                <option>Heading 3</option>
                <option>Heading 4</option>
                <option>Heading 5</option>
                <option>Heading 6</option>
            </select>
    )
}

export default HeadingDropdown;
