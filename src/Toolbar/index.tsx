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
    const [contextBar, setContextBar] = useState<any>();
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

    const onContextBarChange = (detail: any) => {
        console.log(detail);
        setContextBar(detail);
    }

    return (
        <div className="writeup-toolbar-group">
            {/* <button onClick={() => editor.chain().focus().unsetTextAlign().run()}>unsetTextAlign</button> */}
            {/* <button onClick={() => editor.chain().focus().setHardBreak().run()}>
                hard break
            </button> */}
            <div className="writeup-toolbar">
                {React.Children.map(children, (child: any) => {
                    return React.cloneElement(child, {onContextBarChange})
                })}
            </div>
            <div className="writeup-toolbar">
                {contextBar}
            </div>
        </div>
    )
}

export default Toolbar;
