import './contextbar.css';
import './style.css'

import React, { useState, useEffect } from 'react'
import ContextBar from './ContextBar';

// import AlignLeft from '../../icons/feather/align-left.svg';

export type ToolbarProps = {
    editor: any;
    placement?: 'top' | 'bottom';
    children: any;
    onContextBarChange: any;
}

const Toolbar = ({ editor, placement, children, ...props }: ToolbarProps) => {
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
        setContextBar(detail);
    }

    return (
        <div className={`powerui-toolbar powerui-toolbar--placement-${placement}`}>
            {placement === 'bottom' && <div className={`powerui-contextbar`}>
                <ContextBar content={contextBar} editor={editor} />
            </div>}
            <div className="powerui-toolbar-main">
                {React.Children.map(children, (child: any) => {
                    return React.cloneElement(child, { onContextBarChange })
                })}
            </div>
            {placement !== 'bottom' && <div className={`powerui-contextbar`}>
                <ContextBar content={contextBar} editor={editor} />
            </div>}
        </div>
    )
}

export default Toolbar;
