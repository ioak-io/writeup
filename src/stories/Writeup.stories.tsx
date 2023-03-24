import React, { useRef, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import ImageTool from '@editorjs/image';
import LinkTool from '@editorjs/link';
import Quote from '@editorjs/quote';
import CodeTool from '@editorjs/code';
import InlineCode from '@editorjs/inline-code';
import Checklist from '@editorjs/checklist';
import '../style.css';

export default {
  title: 'Writeup',
};


export const FullEditor = () => {
  const editor = new EditorJS({
    /**
     * Id of Element that should contain Editor instance
     */
    holder: 'editorjs',
    tools: {
      header: {
        class: Header,
        inlineToolbar: ['link']
      },
      list: {
        class: List,
        inlineToolbar: true,
        config: {
          defaultStyle: 'unordered'
        },
      },
      embed: {
        class: Embed,
        config: {
          services: {
            youtube: true,
            twitter: true
          }
        }
      },
      table: {
        class: Table,
        inlineToolbar: true,
        config: {
          rows: 2,
          cols: 3,
        },
      },
      image: {
        class: ImageTool,
        config: {
          endpoints: {
            byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
            byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
          }
        }
      },
      checklist: {
        class: Checklist,
        inlineToolbar: true,
      },
      linkTool: {
        class: LinkTool,
        config: {
          endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching,
        }
      },
      code: {
        class: CodeTool
      },
      inlineCode: {
        class: InlineCode,
        shortcut: 'CMD+SHIFT+M',
      },
      quote: {
        class: Quote,
        inlineToolbar: true,
        shortcut: 'CMD+SHIFT+O',
        config: {
          quotePlaceholder: 'Enter a quote',
          captionPlaceholder: 'Quote\'s author',
        },
      },
    },
  });

  return (
    <div id="editorjs">
      Editor
    </div>
  )
};
