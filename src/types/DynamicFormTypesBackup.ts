import { OptionsObjectType } from 'basicui';
import { EditorOptions } from '@tiptap/react';


type FormFieldType =
  | 'text'
  | 'textarea'
  | 'richtext'
  | 'select'
  | 'autocomplete'
  | 'checkbox'
  | 'checkbox-group'
  | 'radio'
  | 'radio-group'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'custom';

export interface OptionType {
  label: string;
  value: string | number | boolean;
}

export interface BaseFormField {
  type: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  tooltip?: string;
  options?: OptionsObjectType[]; // For dropdowns, radios, etc.
  multiple?: boolean; // for multi-select
  required?: boolean;
  children?: React.ReactNode;  // For custom type
  [key: string]: any; // Allow custom extensions
}

interface CustomFormField extends Omit<BaseFormField, 'type'> {
  type: 'custom';
  children: React.ReactNode | (() => React.ReactNode); // ✅ Allow function or node
}

interface EditorFormField extends Omit<BaseFormField, 'type'> {
  type: 'editor';
  editorConfig: Partial<EditorOptions>; // optional customization of the editor
}


export type FormFieldMetadata = BaseFormField | CustomFormField | EditorFormField;


export interface FormData {
  [key: string]: any;
}

export interface DynamicFormProps {
  metadata: FormFieldMetadata[];
  data: FormData;
  onChange: (name: string, value: any) => void;
  onSubmit?: (formData: FormData) => void;
  editMode?: boolean;
}


export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

export interface DynamicFormHandle {
  submit: () => void;
  reset: () => void;
  validate: () => ValidationResult;
}