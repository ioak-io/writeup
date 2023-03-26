import './style.css'

import React, { useEffect } from 'react'
import { Editor, Transforms } from 'slate'

const Toolbar = ({ editor }: any) => {

    const getActiveStyles = () => {
        return new Set(Object.keys(Editor.marks(editor) ?? {}));
    }

    const toggleStyle = (style: string) => {
            Editor.addMark(editor, 'bold', true);
        // const activeStyles = getActiveStyles();
        // console.log(activeStyles, style);
        // if (activeStyles.has(style)) {
        //     Editor.removeMark(editor, style);
        // } else {
        //     Editor.addMark(editor, style, true);
        // }
    }

    const toggleMark = (event: any, format: string) => {
        event.preventDefault();
        console.log(editor, format, isMarkActive(format));
        const isActive = isMarkActive(format)

        if (isActive) {
            Editor.removeMark(editor, format)
        } else {
            console.log("**bolding");
            Editor.addMark(editor, format, true)
        }
    }

    const isMarkActive = (format: string) => {
        const marks: any = Editor.marks(editor)
        return marks ? marks[format] === true : false
    }

    return (
        <div className="writeup-toolbar">
            <button
                onClick={(event: any) => toggleStyle('bold')}
            // className={editor?.isActive('bold') ? 'is-active' : ''}
            >
                B
            </button>
            <button
                onClick={(event: any) => toggleStyle('italic')}
            // className={editor?.isActive('bold') ? 'is-active' : ''}
            >
                I
            </button>
            <button
                onClick={(event: any) => toggleStyle('h1')}
            // className={editor?.isActive('bold') ? 'is-active' : ''}
            >
                H1
            </button>
            {/* <input
                type="color"
                onInput={(event: any) => editor.chain().focus().setColor(event.target.value).run()}
                value={editor.getAttributes('textStyle').color}
            />
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleBold()
                        .run()
                }
                className={editor.isActive('bold') ? 'is-active' : ''}
            >
                B
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleItalic()
                        .run()
                }
                className={editor.isActive('italic') ? 'is-active' : ''}
            >
                I
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleStrike()
                        .run()
                }
                className={editor.isActive('strike') ? 'is-active' : ''}
            >
                S
            </button><button
                onClick={() => editor.chain().focus().setTextAlign('left').run()}
                className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
            >
                left
            </button>
            <button
                onClick={() => editor.chain().focus().setTextAlign('center').run()}
                className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
            >
                center
            </button>
            <button
                onClick={() => editor.chain().focus().setTextAlign('right').run()}
                className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
            >
                right
            </button>
            <button
                onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
            >
                justify
            </button>
            <button onClick={() => editor.chain().focus().unsetTextAlign().run()}>unsetTextAlign</button>
            <button
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleCode()
                        .run()
                }
                className={editor.isActive('code') ? 'is-active' : ''}
            >
                code
            </button>
            <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
                clear marks
            </button>
            <button onClick={() => editor.chain().focus().clearNodes().run()}>
                clear nodes
            </button>
            <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={editor.isActive('paragraph') ? 'is-active' : ''}
            >
                P
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
            >
                h1
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
            >
                h2
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
            >
                h3
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
            >
                h4
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
            >
                h5
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
            >
                h6
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
                UL
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? 'is-active' : ''}
            >
                OL
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive('codeBlock') ? 'is-active' : ''}
            >
                &lt;&gt;
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive('blockquote') ? 'is-active' : ''}
            >
                blockquote
            </button>
            <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                HR
            </button>
            <button onClick={() => editor.chain().focus().setHardBreak().run()}>
                hard break
            </button>
            <button
                onClick={() => editor.chain().focus().undo().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .undo()
                        .run()
                }
            >
                undo
            </button>
            <button
                onClick={() => editor.chain().focus().redo().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .redo()
                        .run()
                }
            >
                redo
            </button>
            <button
                onClick={() => editor.chain().focus().setColor('#958DF1').run()}
                className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}
            >
                purple
            </button>
            <button onClick={addImage}>setImage</button>
            <button onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}>
                table
            </button>
            <>
                <button id="add" onClick={addYoutubeVideo}>Add YouTube video</button>
                <input id="width" type="number" min="320" max="1024" ref={widthRef} placeholder="width" />
                <input id="height" type="number" min="180" max="720" ref={heightRef} placeholder="height" />
            </> */}
        </div>
    )
}

export default Toolbar;
