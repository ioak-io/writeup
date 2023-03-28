import './style.css'

import React, { useState, useEffect } from 'react'

export type GridSizeProps = {
    onApply: any;
    onCancel: any;
}

const GridSize = (props: GridSizeProps) => {
    const [state, setState] = useState({
        rows: 2,
        columns: 4
    });

    const handleChange = (event: any) => {
        setState({
            ...state, [event.currentTarget.name]: event.currentTarget.value
        })
    }

    const onApply = () => {
        props.onApply(state);
    }

    const onCancel = () => {
        setState({
            rows: 2,
            columns: 4
        })
        props.onCancel();
    }

    return (
        <div className="writeup-add-table-grid-size">
            <input name="rows" value={state.rows} placeholder="Rows" type="number" onInput={handleChange} />
            <input name="columns" value={state.columns} placeholder="Columns" type="number" onInput={handleChange} />
            <button onClick={onApply}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
            </button>
            <button onClick={onCancel}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                </svg>
            </button>
        </div>
    )
}

export default GridSize;
