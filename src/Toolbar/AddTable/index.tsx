import './style.css'

import React, { useState, useEffect } from 'react'
import { ToolbarPluginPropsType } from '../ToolbarPluginPropsType';
import GridSize from './GridSize';

const AddTable = ({ editor, onContextBarChange, ...props }: ToolbarPluginPropsType) => {

    const contextActions = {
        onCancel: () => {
            onContextBarChange(null);
        },
        onApply: ({ rows, columns }: any) => {
            editor.chain().focus().insertTable({ rows: rows + 1, cols: columns, withHeaderRow: true }).run()
            onContextBarChange(null);
        }
    }

    const create = () => {
        editor.chain().focus().insertTable({ rows: 2, cols: 3, withHeaderRow: true }).run()
    }

    const showContextBar = () => {
        const contextBarContent = <GridSize onApply={contextActions.onApply} onCancel={contextActions.onCancel} />
        onContextBarChange(contextBarContent);
    }

    const addTableWizard = () => {
        props.toggleAddTableWizard();
    }

    return (
        <div className="writeup-add-table">
            <button onClick={showContextBar} type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <path d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                </svg>
            </button>
        </div>
    )
}

export default AddTable;
