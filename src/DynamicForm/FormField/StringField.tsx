import React from 'react';
import { Input, Textarea } from 'basicui';
import { StringField } from '../../types/DynamicFormTypes';

const StringFieldComponent = ({
  fieldName,
  field,
  value,
  onChange,
}: {
  fieldName: string;
  field: StringField;
  value: any;
  onChange: (name: string, value: any) => void;
}) => {
  const display = field.displayOptions || {};

  const handleChange = (event: any) => {
    onChange(fieldName, event.currentTarget.value);
  };

  switch (display.type) {
    case 'textarea':
      return <Textarea name={fieldName} label={display.label} placeholder={display.placeholder} value={value} onInput={handleChange} />;
    case 'richtext':
      return <div>{/* TODO: richtext integration */}</div>;
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return <Input className={`writeup-formelement-heading ${display.type}`} name={fieldName} label={display.label} placeholder={display.placeholder} value={value} onInput={handleChange} />;
    default:
      return <Input name={fieldName} label={display.label} labelDesc={display.labelDesc} placeholder={display.placeholder} value={value} onInput={handleChange} />;
  }
};

export default StringFieldComponent;
