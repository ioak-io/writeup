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
import FontColor from './FontColor';
import HighlightColor from './HighlightColor';
import ClearFormatting from './ClearFormatting';
import AddTable from './AddTable';
import AddImage from './AddImage';
import HorizontalRule from './HorizontalRule';
import AddYoutubeVideo from './AddYoutubeVideo';
import { ToolbarPropsType } from './ToolbarPropsType';

// import AlignLeft from '../../icons/feather/align-left.svg';

const Toolbar = ({ editor, children }: ToolbarPropsType) => {
    const [childWidgets, setChildWidgets] = useState<React.ReactNode[]>([]);
    if (!editor) {
        return null
    }


    // useEffect(() => {
    //     const _childWidgets: any[] = [];
    //     React.Children.forEach(children, (child: any) => {
    //         let _child = child;
    //         // if ([
    //         //   "ArticleViewTitleChildWidget",
    //         //   "ArticleViewSummaryChildWidget",
    //         //   "ArticleViewBodyChildWidget",
    //         //   "ArticleViewMetadataChildWidget",
    //         //   "ArticleViewTagsChildWidget"
    //         // ].includes(child.type.displayName)) {
    //         _child = React.cloneElement(child, { editor });
    //         // }
    //         _childWidgets.push(_child);
    //     })

    //     setChildWidgets(_childWidgets);
    // }, [children]);

    // useEffect(() => {
    //     if (widthRef.current && heightRef.current) {
    //         widthRef.current.value = 640
    //         heightRef.current.value = 480
    //     }
    // }, [widthRef.current, heightRef.current])

    return (
        <div className="writeup-toolbar">
            {children}
            {/* <button onClick={() => editor.chain().focus().unsetTextAlign().run()}>unsetTextAlign</button> */}
            {/* <button onClick={() => editor.chain().focus().setHardBreak().run()}>
                hard break
            </button> */}
        </div>
    )
}

export default Toolbar;
