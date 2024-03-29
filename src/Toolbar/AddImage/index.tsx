import './style.css'

import React, { useState, useEffect } from 'react'

export type AddImagePluginProps = {
    editor: any;
    imageUploadURL: string;
    imageUploadParam: string;
    imageUploadMethod: string;
}

const AddImage = ({ editor, ...props }: AddImagePluginProps) => {

    const addImage = (url: string) => {
        // const url = window.prompt('URL')

        if (url) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }

    const browse = () => {
        const input: any = document.createElement('input');
        input.type = 'file';
        input.onchange = () => {
            let files = Array.from(input.files);
            const payload = new FormData()
            payload.append(props.imageUploadParam, input.files[0])
            fetch(props.imageUploadURL, {
                method: props.imageUploadMethod,
                body: payload
            })
                .then(response => response.json())
                .then((response: any) => {
                    addImage(response.url);
                })
        };
        input.click();
    }

    return (
        <div>
            <button onClick={browse} type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                </svg>
            </button>
        </div>
    )
}

export default AddImage;
