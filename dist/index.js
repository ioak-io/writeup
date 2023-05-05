'use strict';

var React = require('react');
var react = require('@tiptap/react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$r = ".ProseMirror {\r\n    outline: none;\r\n    padding: 10px 10px;\r\n    background-color: var(--writeup-background-color);\r\n    border-radius: 0 0 var(--writeup-border-radius) var(--writeup-border-radius);\r\n}\r\n\r\n.writeup-editor--toolbar-placement-bottom .ProseMirror {\r\n    border-radius: var(--writeup-border-radius) var(--writeup-border-radius) 0 0;\r\n}\r\n\r\n.writeup-editor--toolbar-placement-top.writeup-editor--contextbar-active .ProseMirror {\r\n    border-radius: 0;\r\n}\r\n\r\n\r\n\r\n.ProseMirror>*+* {\r\n    margin-top: 0.75em;\r\n}\r\n\r\n.ProseMirror ul,\r\n.ProseMirror ol {\r\n    padding: 0 1rem;\r\n}\r\n\r\n.ProseMirror h1,\r\n.ProseMirror h2,\r\n.ProseMirror h3,\r\n.ProseMirror h4,\r\n.ProseMirror h5,\r\n.ProseMirror h6 {\r\n    line-height: 1.1;\r\n}\r\n\r\n.ProseMirror code {\r\n    background-color: rgba(97, 97, 97, 0.1);\r\n    color: #616161;\r\n}\r\n\r\n.ProseMirror pre {\r\n    background: #0d0d0d;\r\n    color: #fff;\r\n    font-family: 'JetBrainsMono', monospace;\r\n    padding: 0.75rem 1rem;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n.ProseMirror pre code {\r\n    color: inherit;\r\n    padding: 0;\r\n    background: none;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.ProseMirror img {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.ProseMirror blockquote {\r\n    padding-left: 1rem;\r\n    border-left: 2px solid rgba(13, 13, 13, 0.1);\r\n}\r\n\r\n.ProseMirror hr {\r\n    border: none;\r\n    border-top: 2px solid rgba(13, 13, 13, 0.1);\r\n    margin: 2rem 0;\r\n}";
styleInject(css_248z$r);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var css_248z$q = ".writeup-contextbar .writeup-contextbar-content {\r\n    padding: 10px 10px;\r\n    padding: 4px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: flex-end;\r\n    /* overflow-x: auto; */\r\n    background-color: var(--writeup-contextbar-background-color);\r\n    border-radius: 0 0 0 0;\r\n    /* border-top: 1px solid var(--writeup-border-color);\r\n    border-bottom: none; */\r\n    grid-gap: 4px;\r\n}\r\n\r\n.writeup-contextbar .writeup-contextbar-content button {\r\n    background-color: var(--writeup-contextbar-background-color);\r\n}\r\n\r\n.writeup-contextbar .writeup-contextbar-content button:hover,\r\n.writeup-contextbar .writeup-contextbar-content button:focus {\r\n    background-color: var(--writeup-contextbar-button-background-color-hover);\r\n}\r\n\r\n/* .writeup-editor--toolbar-placement-top .writeup-contextbar .writeup-contextbar-content {\r\n    border-radius: 0 0 var(--writeup-border-radius) var(--writeup-border-radius);\r\n} */\r\n\r\n.writeup-contextbar .writeup-contextbar-content button svg {\r\n    fill: var(--writeup-color);\r\n    height: 12px;\r\n}\r\n\r\n\r\n.writeup-contextbar .writeup-contextbar-content input {\r\n    font-size: 12px;\r\n    width: 64px;\r\n    height: 30px;\r\n    padding: 0 10px;\r\n    background-color: var(--writeup-contextbar-background-color);\r\n    color: var(--writeup-color);\r\n    border: 1px solid var(--writeup-border-color-strong);\r\n    border-radius: var(--writeup-button-border-radius);\r\n    outline: none;\r\n}\r\n";
styleInject(css_248z$q);

var css_248z$p = ".writeup-toolbar {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.writeup-toolbar-main {\r\n    padding: 10px 10px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    /* overflow-x: auto; */\r\n    background-color: var(--writeup-background-color);\r\n    border-radius: var(--writeup-border-radius) var(--writeup-border-radius) 0 0;\r\n    border-bottom: 1px solid var(--writeup-border-color);\r\n    grid-gap: 4px;\r\n}\r\n\r\n.writeup-toolbar--placement-bottom .writeup-toolbar-main {\r\n    border-top: 1px solid var(--writeup-border-color);\r\n    border-bottom: none;\r\n    border-radius: 0 0 var(--writeup-border-radius) var(--writeup-border-radius);\r\n}\r\n\r\n.writeup-toolbar-main button {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    min-width: 30px;\r\n    height: 30px;\r\n    background-color: transparent;\r\n    color: var(--writeup-color);\r\n    border: none;\r\n    border-radius: var(--writeup-button-border-radius);\r\n    cursor: pointer;\r\n    transition: 250ms background-color ease-in-out, 250ms color ease-in-out;\r\n}\r\n\r\n.writeup-toolbar-main button:disabled {\r\n    color: var(--writeup-toolbar-button-color-disabled);\r\n}\r\n\r\n.writeup-toolbar-main button:disabled svg {\r\n    fill: var(--writeup-toolbar-button-color-disabled);\r\n}\r\n\r\n.writeup-toolbar-main button svg {\r\n    fill: var(--writeup-color);\r\n    /* padding: 3px; */\r\n    height: 12px;\r\n}\r\n\r\n\r\n.writeup-toolbar-main button.is-active {\r\n    background-color: var(--writeup-toolbar-button-background-color-active);\r\n    color: var(--writeup-toolbar-button-color-active);\r\n}\r\n\r\n.writeup-toolbar-main button:hover,\r\n.writeup-toolbar-main button:focus {\r\n    background-color: var(--writeup-toolbar-button-background-color-hover);\r\n    color: var(--writeup-toolbar-button-color-hover);\r\n}\r\n\r\n.color-picker {\r\n    width: 30px;\r\n    height: 30px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\ninput[type=\"color\"] {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    width: 20px;\r\n    height: 16px;\r\n    background-color: transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\ninput[type=\"color\"]::-webkit-color-swatch-wrapper {\r\n    padding: 0;\r\n}\r\n\r\ninput[type=\"color\"]::-webkit-color-swatch {\r\n    border-radius: 2px;\r\n    border: none;\r\n}\r\n\r\ninput[type=\"color\"]::-moz-color-swatch {\r\n    border-radius: 2px;\r\n    border: none;\r\n}\r\n\r\n.heading-select {\r\n    height: 30px;\r\n    background-color: inherit;\r\n    color: inherit;\r\n    outline: none;\r\n    border: none;\r\n    border-radius: var(--writeup-button-border-radius);\r\n}\r\n\r\n.heading-select:hover,\r\n.heading-select:focus {\r\n    background-color: var(--writeup-toolbar-button-background-color-hover);\r\n    color: var(--writeup-toolbar-button-color-hover);\r\n}\r\n\r\n.heading-select.is-active {\r\n    background-color: var(--writeup-toolbar-button-background-color-active);\r\n    color: var(--writeup-toolbar-button-color-active);\r\n}\r\n\r\nul[data-type=\"taskList\"] li {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\nul[data-type=\"taskList\"] li p {\r\n    margin: 0;\r\n}\r\n\r\nul[data-type=\"taskList\"] li input[type=\"checkbox\"] {\r\n    width: 16px;\r\n    height: 16px;\r\n    border-radius: 0;\r\n}";
styleInject(css_248z$p);

var css_248z$o = "";
styleInject(css_248z$o);

var css_248z$n = ".writeup-table-context-actions button {\r\n}\r\n\r\n.writeup-table-context-actions button svg {\r\n}";
styleInject(css_248z$n);

var TableContextActions = function (props) {
    return (React.createElement("div", { className: "writeup-contextbar-content" },
        React.createElement("button", { onClick: function () { return props.editor.chain().focus().addColumnAfter().run(); }, type: "button", className: "writeup-contextbar-button" },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
                React.createElement("path", { d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" })),
            React.createElement("div", null, "Column")),
        React.createElement("button", { onClick: function () { return props.editor.chain().focus().deleteColumn().run(); }, type: "button", className: "writeup-contextbar-button" },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
                React.createElement("path", { d: "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" })),
            React.createElement("div", null, "Column")),
        React.createElement("button", { onClick: function () { return props.editor.chain().focus().addRowAfter().run(); }, type: "button", className: "writeup-contextbar-button" },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
                React.createElement("path", { d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" })),
            React.createElement("div", null, "Row")),
        React.createElement("button", { onClick: function () { return props.editor.chain().focus().deleteRow().run(); }, type: "button", className: "writeup-contextbar-button" },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
                React.createElement("path", { d: "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" })),
            React.createElement("div", null, "Row")),
        React.createElement("button", { onClick: function () { return props.editor.chain().focus().toggleHeaderRow().run(); }, type: "button", className: "writeup-contextbar-button" },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512" },
                React.createElement("path", { d: "M224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H160V320c0 17.7 14.3 32 32 32s32-14.3 32-32V208H336c17.7 0 32-14.3 32-32s-14.3-32-32-32H224V32zM0 480c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z" })),
            React.createElement("div", null, "Header")),
        React.createElement("button", { onClick: function () { return props.editor.chain().focus().deleteTable().run(); }, type: "button", className: "writeup-contextbar-button" },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
                React.createElement("path", { d: "M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" })))));
};

var ContextBar = function (props) {
    var _a;
    return (React.createElement(React.Fragment, null,
        props.content && props.content,
        ((_a = props.editor) === null || _a === void 0 ? void 0 : _a.isActive('table')) && React.createElement(TableContextActions, { editor: props.editor })));
};

var Toolbar = function (_a) {
    var editor = _a.editor, placement = _a.placement, children = _a.children; __rest(_a, ["editor", "placement", "children"]);
    var _b = React.useState(), contextBar = _b[0], setContextBar = _b[1];
    if (!editor) {
        return null;
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
    var onContextBarChange = function (detail) {
        setContextBar(detail);
    };
    return (React.createElement("div", { className: "writeup-toolbar writeup-toolbar--placement-".concat(placement) },
        placement === 'bottom' && React.createElement("div", { className: "writeup-contextbar" },
            React.createElement(ContextBar, { content: contextBar, editor: editor })),
        React.createElement("div", { className: "writeup-toolbar-main" }, React.Children.map(children, function (child) {
            return React.cloneElement(child, { onContextBarChange: onContextBarChange });
        })),
        placement !== 'bottom' && React.createElement("div", { className: "writeup-contextbar" },
            React.createElement(ContextBar, { content: contextBar, editor: editor }))));
};

var Editor = function (props) {
    var _a;
    var _b = React.useState(), contextBar = _b[0], setContextBar = _b[1];
    var onContextBarChange = function (detail) {
        setContextBar(detail);
    };
    return (React.createElement("div", { className: "writeup-editor ".concat((((_a = props.editor) === null || _a === void 0 ? void 0 : _a.isActive('table')) || contextBar) ? 'writeup-editor--contextbar-active' : '', " writeup-editor--toolbar-placement-").concat(props.toolbarPlacement || 'top') },
        props.toolbarPlacement !== "bottom" && React.createElement(Toolbar, { editor: props.editor, placement: props.toolbarPlacement, onContextBarChange: onContextBarChange }, props.children),
        React.createElement("div", { className: 'writeup-editor-content' },
            React.createElement(react.EditorContent, { editor: props.editor })),
        props.toolbarPlacement === "bottom" && React.createElement(Toolbar, { editor: props.editor, placement: props.toolbarPlacement, onContextBarChange: onContextBarChange }, props.children)));
};

var css_248z$m = "";
styleInject(css_248z$m);

var Bold = function (_a) {
    var editor = _a.editor;
    return (React.createElement("button", { onClick: function () { return editor.chain().focus().toggleBold().run(); }, disabled: !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run(), className: editor.isActive('bold') ? 'is-active' : '', type: "button" },
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512" },
            React.createElement("path", { d: "M0 64C0 46.3 14.3 32 32 32H80 96 224c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128H96 80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V256 96H32C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64H112V224H224zM112 288V416H256c35.3 0 64-28.7 64-64s-28.7-64-64-64H224 112z" }))));
};

var css_248z$l = "";
styleInject(css_248z$l);

var Italic = function (_a) {
    var editor = _a.editor;
    return (React.createElement("button", { onClick: function () { return editor.chain().focus().toggleItalic().run(); }, disabled: !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run(), className: editor.isActive('italic') ? 'is-active' : '', type: "button" },
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512" },
            React.createElement("path", { d: "M128 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H293.3L160 416h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H90.7L224 96H160c-17.7 0-32-14.3-32-32z" }))));
};

var css_248z$k = "";
styleInject(css_248z$k);

var Underline = function (_a) {
    var editor = _a.editor;
    return (React.createElement("button", { onClick: function () { return editor.chain().focus().toggleUnderline().run(); }, className: editor.isActive('underline') ? 'is-active' : '', type: "button" },
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
            React.createElement("path", { d: "M16 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128V224c0 53 43 96 96 96s96-43 96-96V96H304c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H384V224c0 88.4-71.6 160-160 160s-160-71.6-160-160V96H48C30.3 96 16 81.7 16 64zM0 448c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z" }))));
};

var css_248z$j = "";
styleInject(css_248z$j);

var Strikethrough = function (_a) {
    var editor = _a.editor;
    return (React.createElement("button", { onClick: function () { return editor.chain().focus().toggleStrike().run(); }, disabled: !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run(), type: "button", className: editor.isActive('strike') ? 'is-active' : '' },
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
            React.createElement("path", { d: "M161.3 144c3.2-17.2 14-30.1 33.7-38.6c21.1-9 51.8-12.3 88.6-6.5c11.9 1.9 48.8 9.1 60.1 12c17.1 4.5 34.6-5.6 39.2-22.7s-5.6-34.6-22.7-39.2c-14.3-3.8-53.6-11.4-66.6-13.4c-44.7-7-88.3-4.2-123.7 10.9c-36.5 15.6-64.4 44.8-71.8 87.3c-.1 .6-.2 1.1-.2 1.7c-2.8 23.9 .5 45.6 10.1 64.6c4.5 9 10.2 16.9 16.7 23.9H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H270.1c-.1 0-.3-.1-.4-.1l-1.1-.3c-36-10.8-65.2-19.6-85.2-33.1c-9.3-6.3-15-12.6-18.2-19.1c-3.1-6.1-5.2-14.6-3.8-27.4zM348.9 337.2c2.7 6.5 4.4 15.8 1.9 30.1c-3 17.6-13.8 30.8-33.9 39.4c-21.1 9-51.7 12.3-88.5 6.5c-18-2.9-49.1-13.5-74.4-22.1c-5.6-1.9-11-3.7-15.9-5.4c-16.8-5.6-34.9 3.5-40.5 20.3s3.5 34.9 20.3 40.5c3.6 1.2 7.9 2.7 12.7 4.3l0 0 0 0c24.9 8.5 63.6 21.7 87.6 25.6l0 0 .2 0c44.7 7 88.3 4.2 123.7-10.9c36.5-15.6 64.4-44.8 71.8-87.3c3.6-21 2.7-40.4-3.1-58.1H335.1c7 5.6 11.4 11.2 13.9 17.2z" }))));
};

var css_248z$i = "";
styleInject(css_248z$i);

var HeadingDropdown = function (_a) {
    var editor = _a.editor;
    var handleHeadingStateChange = function (event) {
        switch (event.currentTarget.value) {
            case "Heading 1":
                editor.chain().focus().toggleHeading({ level: 1 }).run();
                break;
            case "Heading 2":
                editor.chain().focus().toggleHeading({ level: 2 }).run();
                break;
            case "Heading 3":
                editor.chain().focus().toggleHeading({ level: 3 }).run();
                break;
            case "Heading 4":
                editor.chain().focus().toggleHeading({ level: 4 }).run();
                break;
            case "Heading 5":
                editor.chain().focus().toggleHeading({ level: 5 }).run();
                break;
            case "Heading 6":
                editor.chain().focus().toggleHeading({ level: 6 }).run();
                break;
            default:
                editor.chain().focus().setParagraph().run();
        }
    };
    return (React.createElement("select", { className: "heading-select ".concat(!editor.isActive('paragraph') ? 'is-active' : ''), value: editor.isActive('heading', { level: 1 }) ? 'Heading 1' :
            editor.isActive('heading', { level: 2 }) ? 'Heading 2' :
                editor.isActive('heading', { level: 3 }) ? 'Heading 3' :
                    editor.isActive('heading', { level: 4 }) ? 'Heading 4' :
                        editor.isActive('heading', { level: 5 }) ? 'Heading 5' :
                            editor.isActive('heading', { level: 6 }) ? 'Heading 6' : "Paragraph", onChange: handleHeadingStateChange },
        React.createElement("option", null, "Paragraph"),
        React.createElement("option", null, "Heading 1"),
        React.createElement("option", null, "Heading 2"),
        React.createElement("option", null, "Heading 3"),
        React.createElement("option", null, "Heading 4"),
        React.createElement("option", null, "Heading 5"),
        React.createElement("option", null, "Heading 6")));
};

var css_248z$h = "";
styleInject(css_248z$h);

var AlignmentDropdown = function (_a) {
    var editor = _a.editor;
    var handleAlignmentStateChange = function (event) {
        switch (event.currentTarget.value) {
            case "Right":
                editor.chain().focus().setTextAlign('right').run();
                break;
            case "Center":
                editor.chain().focus().setTextAlign('center').run();
                break;
            case "Justify":
                editor.chain().focus().setTextAlign('justify').run();
                break;
            default:
                editor.chain().focus().setTextAlign('left').run();
        }
    };
    return (React.createElement("select", { className: "heading-select ".concat(!editor.isActive({ 'textAlign': 'left' }) ? 'is-active' : ''), value: editor.isActive({ 'textAlign': 'center' }) ? 'Center' :
            editor.isActive({ 'textAlign': 'right' }) ? 'Right' :
                editor.isActive({ 'textAlign': 'justify' }) ? 'Justify' : 'Left', onChange: handleAlignmentStateChange },
        React.createElement("option", null, "Left"),
        React.createElement("option", null, "Right"),
        React.createElement("option", null, "Center"),
        React.createElement("option", null, "Justify")));
};

var css_248z$g = "";
styleInject(css_248z$g);

var AlignLeft = function (_a) {
    var editor = _a.editor;
    return (React.createElement("button", { onClick: function () { return editor.chain().focus().setTextAlign('left').run(); }, className: editor.isActive({ textAlign: 'left' }) ? 'is-active' : '', type: "button" },
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
            React.createElement("path", { d: "M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" }))));
};

var css_248z$f = "";
styleInject(css_248z$f);

var AlignRight = function (_a) {
    var editor = _a.editor;
    return (React.createElement("button", { onClick: function () { return editor.chain().focus().setTextAlign('right').run(); }, className: editor.isActive({ textAlign: 'right' }) ? 'is-active' : '', type: "button" },
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
            React.createElement("path", { d: "M448 64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" }))));
};

var css_248z$e = "";
styleInject(css_248z$e);

var AlignCenter = function (_a) {
    var editor = _a.editor;
    return (React.createElement("button", { onClick: function () { return editor.chain().focus().setTextAlign('center').run(); }, className: editor.isActive({ textAlign: 'center' }) ? 'is-active' : '', type: "button" },
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
            React.createElement("path", { d: "M352 64c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32zm96 128c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 448c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM352 320c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32z" }))));
};

var css_248z$d = "";
styleInject(css_248z$d);

var AlignJustify = function (_a) {
    var editor = _a.editor;
    return (React.createElement("button", { onClick: function () { return editor.chain().focus().setTextAlign('justify').run(); }, className: editor.isActive({ textAlign: 'justify' }) ? 'is-active' : '', type: "button" },
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
            React.createElement("path", { d: "M448 64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32zm0 256c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 192c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM448 448c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z" }))));
};

var css_248z$c = "";
styleInject(css_248z$c);

var BulletList = function (_a) {
    var editor = _a.editor;
    return (React.createElement("button", { onClick: function () { return editor.chain().focus().toggleBulletList().run(); }, className: editor.isActive('bulletList') ? 'is-active' : '', type: "button" },
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
            React.createElement("path", { d: "M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" }))));
};

var css_248z$b = "";
styleInject(css_248z$b);

var BlockQuote = function (_a) {
    var editor = _a.editor;
    return (React.createElement("button", { onClick: function () { return editor.chain().focus().toggleBlockquote().run(); }, className: editor.isActive('blockquote') ? 'is-active' : '', type: "button" },
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
            React.createElement("path", { d: "M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" }))));
};

var css_248z$a = "";
styleInject(css_248z$a);

var OrderedList = function (_a) {
    var editor = _a.editor;
    return (React.createElement("button", { onClick: function () { return editor.chain().focus().toggleOrderedList().run(); }, className: editor.isActive('orderedList') ? 'is-active' : '', type: "button" },
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
            React.createElement("path", { d: "M24 56c0-13.3 10.7-24 24-24H80c13.3 0 24 10.7 24 24V176h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H40c-13.3 0-24-10.7-24-24s10.7-24 24-24H56V80H48C34.7 80 24 69.3 24 56zM86.7 341.2c-6.5-7.4-18.3-6.9-24 1.2L51.5 357.9c-7.7 10.8-22.7 13.3-33.5 5.6s-13.3-22.7-5.6-33.5l11.1-15.6c23.7-33.2 72.3-35.6 99.2-4.9c21.3 24.4 20.8 60.9-1.1 84.7L86.8 432H120c13.3 0 24 10.7 24 24s-10.7 24-24 24H32c-9.5 0-18.2-5.6-22-14.4s-2.1-18.9 4.3-25.9l72-78c5.3-5.8 5.4-14.6 .3-20.5zM224 64H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32z" }))));
};

var css_248z$9 = "";
styleInject(css_248z$9);

var AddImage = function (_a) {
    var editor = _a.editor, props = __rest(_a, ["editor"]);
    var addImage = function (url) {
        // const url = window.prompt('URL')
        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    };
    var browse = function () {
        var input = document.createElement('input');
        input.type = 'file';
        input.onchange = function () {
            Array.from(input.files);
            var payload = new FormData();
            payload.append(props.imageUploadParam, input.files[0]);
            fetch(props.imageUploadURL, {
                method: props.imageUploadMethod,
                body: payload
            })
                .then(function (response) { return response.json(); })
                .then(function (response) {
                addImage(response.url);
            });
        };
        input.click();
    };
    return (React.createElement("div", null,
        React.createElement("button", { onClick: browse, type: "button" },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
                React.createElement("path", { d: "M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" })))));
};

var css_248z$8 = ".writeup-add-table {\r\n    position: relative;\r\n}\r\n";
styleInject(css_248z$8);

var css_248z$7 = ".writeup-add-table-grid-size {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n}\r\n\r\n.writeup-add-table-grid-size input,\r\n.writeup-add-table-grid-size button {\r\n    margin-right: 10px;\r\n}\r\n\r\n";
styleInject(css_248z$7);

var GridSize = function (props) {
    var _a = React.useState({
        rows: 2,
        columns: 4
    }), state = _a[0], setState = _a[1];
    var handleChange = function (event) {
        var _a;
        setState(__assign(__assign({}, state), (_a = {}, _a[event.currentTarget.name] = event.currentTarget.valueAsNumber, _a)));
    };
    var onApply = function () {
        props.onApply(state);
    };
    var onCancel = function () {
        setState({
            rows: 2,
            columns: 4
        });
        props.onCancel();
    };
    return (React.createElement("div", { className: "writeup-contextbar-content" },
        React.createElement("input", { name: "rows", value: state.rows, placeholder: "Rows", type: "number", onInput: handleChange }),
        React.createElement("input", { name: "columns", value: state.columns, placeholder: "Columns", type: "number", onInput: handleChange }),
        React.createElement("button", { onClick: onApply, type: "button", className: "writeup-contextbar-button" },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
                React.createElement("path", { d: "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" }))),
        React.createElement("button", { onClick: onCancel, type: "button", className: "writeup-contextbar-button" },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512" },
                React.createElement("path", { d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" })))));
};

var AddTable = function (_a) {
    var editor = _a.editor, onContextBarChange = _a.onContextBarChange; __rest(_a, ["editor", "onContextBarChange"]);
    var contextActions = {
        onCancel: function () {
            onContextBarChange(null);
        },
        onApply: function (_a) {
            var rows = _a.rows, columns = _a.columns;
            editor.chain().focus().insertTable({ rows: rows + 1, cols: columns, withHeaderRow: true }).run();
            onContextBarChange(null);
        }
    };
    var showContextBar = function () {
        var contextBarContent = React.createElement(GridSize, { onApply: contextActions.onApply, onCancel: contextActions.onCancel });
        onContextBarChange(contextBarContent);
    };
    return (React.createElement("div", { className: "writeup-add-table" },
        React.createElement("button", { onClick: showContextBar, type: "button" },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
                React.createElement("path", { d: "M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" })))));
};

var css_248z$6 = "";
styleInject(css_248z$6);

var AddYoutubeVideo = function (_a) {
    var editor = _a.editor;
    React.useRef(640);
    React.useRef(480);
    var addYoutubeVideo = function () {
        var url = prompt('Enter YouTube URL');
        if (url) {
            editor.commands.setYoutubeVideo({
                src: url,
                // width: Math.max(320, parseInt(widthRef.current.value, 10)) || 640,
                // height: Math.max(180, parseInt(heightRef.current.value, 10)) || 480,
            });
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { id: "add", onClick: addYoutubeVideo, type: "button" },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512" },
                React.createElement("path", { d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" })))));
};

var css_248z$5 = "";
styleInject(css_248z$5);

var Code = function (_a) {
    var editor = _a.editor;
    return (React.createElement("button", { onClick: function () { return editor.chain().focus().toggleCode().run(); }, disabled: !editor.can()
            .chain()
            .focus()
            .toggleCode()
            .run(), className: editor.isActive('code') ? 'is-active' : '', type: "button" },
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512" },
            React.createElement("path", { d: "M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" }))));
};

var css_248z$4 = "";
styleInject(css_248z$4);

var CodeBlock = function (_a) {
    var editor = _a.editor;
    return (React.createElement("button", { onClick: function () { return editor.chain().focus().toggleCodeBlock().run(); }, className: editor.isActive('codeBlock') ? 'is-active' : '', type: "button" },
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512" },
            React.createElement("path", { d: "M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" }))));
};

var css_248z$3 = "";
styleInject(css_248z$3);

var ClearFormatting = function (_a) {
    var editor = _a.editor;
    return (React.createElement("button", { onClick: function () { editor.chain().focus().clearNodes().unsetAllMarks().run(); }, type: "button" },
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512" },
            React.createElement("path", { d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" }))));
};

var css_248z$2 = "";
styleInject(css_248z$2);

var HorizontalRule = function (_a) {
    var editor = _a.editor;
    return (React.createElement("button", { onClick: function () { return editor.chain().focus().setHorizontalRule().run(); }, type: "button" },
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
            React.createElement("path", { d: "M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z" }))));
};

var css_248z$1 = "";
styleInject(css_248z$1);

var FontColor = function (_a) {
    var editor = _a.editor;
    return (React.createElement("div", { className: "color-picker" },
        React.createElement("input", { type: "color", onInput: function (event) { return editor.chain().focus().setColor(event.target.value).run(); }, value: editor.getAttributes('textStyle').color || "#ffffff" })));
};

var css_248z = "";
styleInject(css_248z);

var HighlightColor = function (_a) {
    var editor = _a.editor;
    return (React.createElement("div", { className: "color-picker" },
        React.createElement("input", { type: "color", onInput: function (event) { return editor.chain().focus().toggleHighlight({ color: event.target.value }).run(); }, value: editor.getAttributes('highlight').color || "#ffffff" })));
};

exports.AddImage = AddImage;
exports.AddTable = AddTable;
exports.AddYoutubeVideo = AddYoutubeVideo;
exports.AlignCenter = AlignCenter;
exports.AlignJustify = AlignJustify;
exports.AlignLeft = AlignLeft;
exports.AlignRight = AlignRight;
exports.AlignmentDropdown = AlignmentDropdown;
exports.BlockQuote = BlockQuote;
exports.Bold = Bold;
exports.BulletList = BulletList;
exports.ClearFormatting = ClearFormatting;
exports.Code = Code;
exports.CodeBlock = CodeBlock;
exports.Editor = Editor;
exports.FontColor = FontColor;
exports.HeadingDropdown = HeadingDropdown;
exports.HighlightColor = HighlightColor;
exports.HorizontalRule = HorizontalRule;
exports.Italic = Italic;
exports.OrderedList = OrderedList;
exports.Strikethrough = Strikethrough;
exports.Underline = Underline;
//# sourceMappingURL=index.js.map
