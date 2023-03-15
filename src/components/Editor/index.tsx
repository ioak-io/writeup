import * as React from 'react';
import { schema } from "prosemirror-schema-basic"
import { EditorState } from "prosemirror-state"
import { EditorView } from "prosemirror-view"
import { undo, redo, history } from "prosemirror-history"
import { keymap } from "prosemirror-keymap"
import { baseKeymap } from "prosemirror-commands"
import { Plugin } from "prosemirror-state"
import { dropCursor } from "prosemirror-dropcursor"
import { gapCursor } from "prosemirror-gapcursor"
import { menuBar, MenuItem } from "prosemirror-menu"

import { buildMenuItems } from "../../core/menu"
import { buildKeymap } from "../../core/keymap"
import { buildInputRules } from "../../core/inputrules"

import './style.css';
import './editor.css';

export default function EditorWrapper(): JSX.Element {
  const documentRef = React.useRef<any>();
  React.useEffect(() => {
    const plugins = [
      history(),
      keymap({ "Mod-z": undo, "Mod-y": redo }),
      keymap(baseKeymap)
    ];
    plugins.push(menuBar({
      floating: false,
      content: buildMenuItems(schema).fullMenu
    }))
    let state = EditorState.create({
      schema, plugins
    });

    let view = new EditorView(documentRef.current, {
      state, dispatchTransaction(transaction) {
        console.log("Document size went from", transaction.before.content.size,
          "to", transaction.doc.content.size)
        let newState = view.state.apply(transaction)
        view.updateState(newState)
      }
    });

    console.log(view);
  }, [documentRef]);

  return (
    <div ref={documentRef}>Editor</div>
  );
}
