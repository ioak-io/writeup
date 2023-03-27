import './style.css'

import React, { useState, useEffect } from 'react'

const AlignmentDropdown = ({ editor }: any) => {
    const [alignmentState, setAlignmentState] = useState("Left");

    const handleAlignmentStateChange = (event: any) => {
        switch (event.currentTarget.value) {
            case "Right":
                editor.chain().focus().setTextAlign('right').run()
                break;
            case "Center":
                editor.chain().focus().setTextAlign('center').run()
                break;
            case "Justify":
                editor.chain().focus().setTextAlign('justify').run()
                break;
            default:
                editor.chain().focus().setTextAlign('left').run()
        }
        setAlignmentState(event.currentTarget.value || "Left");
    }

    return (
        <select className={`heading-select ${!editor.isActive({ 'textAlign': 'left' }) ? 'is-active' : ''}`}
            value={
                editor.isActive({ 'textAlign': 'center' }) ? 'Center' :
                    editor.isActive({ 'textAlign': 'right' }) ? 'Right' :
                        editor.isActive({ 'textAlign': 'justify' }) ? 'Justify' : 'Left'
            }
            onChange={handleAlignmentStateChange}>
            <option>Left</option>
            <option>Right</option>
            <option>Center</option>
            <option>Justify</option>
        </select>
    )
}

export default AlignmentDropdown;
