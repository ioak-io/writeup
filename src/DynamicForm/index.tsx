import React, { forwardRef, useImperativeHandle } from 'react';
import { DynamicFormProps, DynamicFormHandle, ValidationResult } from '../types/DynamicFormTypes';
import FormField from './FormField';
import FormFieldView from './FormFieldView';

const DynamicForm = forwardRef<DynamicFormHandle, DynamicFormProps>(
    ({ metadata, data, optionsLookupDictionary, editMode, onChange, onSubmit, editor, className }, ref) => {
        const initialData = React.useRef(data);

        const validate = (): ValidationResult => {
            const errors: Record<string, string> = {};

            Object.entries(metadata.fields).forEach(([fieldName, field]) => {
                if (field.required && (data[fieldName] === undefined || data[fieldName] === null || data[fieldName] === '')) {
                    const label = field.displayOptions?.label || fieldName;
                    errors[fieldName] = `${label} is required`;
                }
            });

            return {
                valid: Object.keys(errors).length === 0,
                errors,
            };
        };

        useImperativeHandle(ref, () => ({
            submit: () => {
                const result = validate();
                if (result.valid && onSubmit) {
                    onSubmit(data);
                }
            },
            reset: () => {
                Object.entries(initialData.current).forEach(([name, value]) => {
                    onChange(name, value);
                });
            },
            validate,
        }));

        const content = Object.entries(metadata.fields).map(([fieldName, field]) =>
            editMode ? (
                <div className={`writeup-dynamicform-formfield writeup-dynamicform-formfield--${fieldName}`}>
                    <FormField
                        key={fieldName}
                        fieldName={fieldName}
                        field={field}
                        value={data[fieldName]}
                        onChange={onChange}
                        optionsLookupDictionary={optionsLookupDictionary || {}}
                        editor={editor}
                    />
                </div>
            ) : (
                <div className={`writeup-dynamicform-formfield writeup-dynamicform-formfield--${fieldName}`}>
                    <FormFieldView key={fieldName} field={field} value={data[fieldName]}
                        optionsLookupDictionary={optionsLookupDictionary || {}} />
                </div>
            )
        );

        return editMode ? (
            <form
                className={`writeup-dynamicform writeup-dynamicform-edit${className ? ` ${className}` : ""}`}
                onSubmit={e => {
                    e.preventDefault();
                    const result = validate();
                    if (result.valid) {
                        onSubmit?.(data);
                    }
                }}
            >
                {content}
            </form>
        ) : (
            <div className={`writeup-dynamicform writeup-dynamicform-view${className ? ` ${className}` : ""}`}>{content}</div>
        );
    }
);

export default DynamicForm;
