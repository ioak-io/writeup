import './style.css'

import React, { useState, useEffect } from 'react'
import { ToolbarPluginPropsType } from '../ToolbarPluginPropsType';

const AddYoutubeVideo = ({ editor }: ToolbarPluginPropsType) => {
    const widthRef = React.useRef<any>(null)
    const heightRef = React.useRef<any>(null)
    
    const addYoutubeVideo = () => {
        const url = prompt('Enter YouTube URL')

        if (url) {
            editor.commands.setYoutubeVideo({
                src: url,
                width: Math.max(320, parseInt(widthRef.current.value, 10)) || 640,
                height: Math.max(180, parseInt(heightRef.current.value, 10)) || 480,
            })
        }
    }

    return (
        <>
            <button id="add" onClick={addYoutubeVideo}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                </svg>
            </button>
            {/* <input id="width" type="number" min="320" max="1024" ref={widthRef} placeholder="width" />
                <input id="height" type="number" min="180" max="720" ref={heightRef} placeholder="height" /> */}
        </>
    )
}

export default AddYoutubeVideo;
