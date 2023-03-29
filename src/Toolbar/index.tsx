import './style.css'

import React, { useState, useEffect } from 'react'
import { ToolbarPropsType } from './ToolbarPropsType';
import ContextBar from './ContextBar';

// import AlignLeft from '../../icons/feather/align-left.svg';

export type ToolbarProps = {
    editor: any;
    placement?: 'top' | 'bottom';
    children: any;
    onContextBarChange: any;
}

const Toolbar = ({ editor, placement, children, ...props }: ToolbarProps) => {
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
        props.onContextBarChange(detail);
    }

    return (
        <div className={`writeup-toolbar writeup-toolbar--placement-${placement}`}>
            {/* <button onClick={() => editor.chain().focus().unsetTextAlign().run()}>unsetTextAlign</button> */}
            {/* <button onClick={() => editor.chain().focus().setHardBreak().run()}>
                hard break
            </button> */}
            <div className="writeup-toolbar-main">
                {React.Children.map(children, (child: any) => {
                    return React.cloneElement(child, { onContextBarChange })
                })}
            </div>
        </div>
    )
}

export default Toolbar;
