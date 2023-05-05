/// <reference types="react" />
import './contextbar.css';
import './style.css';
export declare type ToolbarProps = {
    editor: any;
    placement?: 'top' | 'bottom';
    children: any;
    onContextBarChange: any;
};
declare const Toolbar: ({ editor, placement, children, ...props }: ToolbarProps) => JSX.Element | null;
export default Toolbar;
