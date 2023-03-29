import './style.css'

import React, { useState, useEffect } from 'react'
import TableContextActions from '../TableContextActions';
import GridSize from '../AddTable/GridSize';

// import AlignLeft from '../../icons/feather/align-left.svg';

export type ContextBarProps = {
    editor: any;
    content: any;
}

const ContextBar = (props: ContextBarProps) => {

    return (
        <>
            {props.content && <div className="writeup-contextbar">
                {props.content}
            </div>}
            {props.editor?.isActive('table') && <TableContextActions editor={props.editor} />}
        </>
    )
}

export default ContextBar;
