import './style.css'

import React, { useState, useEffect } from 'react'
import AlignmentDropdown from './AlignmentDropdown';
import Bold from './Bold';
import Italic from './Italic';
import Strikethrough from './Strikethrough';
import HeadingDropdown from './HeadingDropdown';
import { ToolbarPluginPropsType } from './ToolbarPluginPropsType';
import Underline from './Underline';
import Undo from './Undo';
import Redo from './Redo';
import AlignLeft from './AlignLeft';
import AlignRight from './AlignRight';
import AlignCenter from './AlignCenter';
import AlignJustify from './AlignJustify';
import Code from './Code';
import BlockQuote from './BlockQuote';
import TaskList from './TaskList';
import OrderedList from './OrderedList';
import BulletList from './BulletList';
import CodeBlock from './CodeBlock';

// import AlignLeft from '../../icons/feather/align-left.svg';

const Toolbar = ({ editor }: ToolbarPluginPropsType) => {
    const widthRef = React.useRef<any>(null)
    const heightRef = React.useRef<any>(null)
    if (!editor) {
        return null
    }

    // useEffect(() => {
    //     if (widthRef.current && heightRef.current) {
    //         widthRef.current.value = 640
    //         heightRef.current.value = 480
    //     }
    // }, [widthRef.current, heightRef.current])

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

    const addImage = () => {
        const url = window.prompt('URL')

        if (url) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }

    return (
        <div className="writeup-toolbar">
            <Undo editor={editor} />
            <Redo editor={editor} />
            <HeadingDropdown editor={editor} />
            <Bold editor={editor} />
            <Italic editor={editor} />
            <Underline editor={editor} />
            <Strikethrough editor={editor} />
            <AlignmentDropdown editor={editor} />
            <AlignLeft editor={editor} />
            <AlignCenter editor={editor} />
            <AlignRight editor={editor} />
            <AlignJustify editor={editor} />
            <div className="color-picker">
                <input
                    type="color"
                    onInput={(event: any) => editor.chain().focus().setColor(event.target.value).run()}
                    value={editor.getAttributes('textStyle').color}
                />
            </div>
            <div className="color-picker">
                <input
                    type="color"
                    onInput={(event: any) => editor.chain().focus().toggleHighlight({ color: event.target.value }).run()}
                    value={editor.getAttributes('highlight').color}
                />
            </div>
            {/* <button onClick={() => editor.chain().focus().unsetTextAlign().run()}>unsetTextAlign</button> */}
            <BulletList editor={editor} />
            <OrderedList editor={editor} />
            <TaskList editor={editor} />
            <BlockQuote editor={editor} />
            <Code editor={editor} />
            <CodeBlock editor={editor} />
            <button onClick={() => { editor.chain().focus().clearNodes().unsetAllMarks().run() }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                </svg>
            </button>
            <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <path d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z" />
                </svg>
            </button>
            {/* <button onClick={() => editor.chain().focus().setHardBreak().run()}>
                hard break
            </button> */}
            <button onClick={addImage}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                </svg>
            </button>
            <button onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <path d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                </svg>
            </button>
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
        </div>
    )
}

export default Toolbar;
