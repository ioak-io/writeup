/// <reference types="react" />
import './style.css';
export declare type EditorProps = {
    editor: any;
    children: any;
    toolbarPlacement?: 'top' | 'bottom';
};
declare const Editor: (props: EditorProps) => JSX.Element;
export default Editor;
