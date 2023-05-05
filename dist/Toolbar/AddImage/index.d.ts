/// <reference types="react" />
import './style.css';
export declare type AddImagePluginProps = {
    editor: any;
    imageUploadURL: string;
    imageUploadParam: string;
    imageUploadMethod: string;
};
declare const AddImage: ({ editor, ...props }: AddImagePluginProps) => JSX.Element;
export default AddImage;
