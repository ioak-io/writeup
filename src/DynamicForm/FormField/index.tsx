import React from 'react';
import { SpecField } from '../../types/DynamicFormTypes';
import StringFieldComponent from './StringField';
import NumberFieldComponent from './NumberField';
import BooleanFieldComponent from './BooleanField';
import EnumFieldComponent from './EnumField';
import ObjectFieldComponent from './ObjectField';
import ArrayFieldComponent from './ArrayField';

const FormField = ({
  fieldName,
  field,
  value,
  onChange,
}: {
  fieldName: string;
  field: SpecField;
  value: any;
  onChange: (name: string, value: any) => void;
}) => {
  switch (field.type) {
    case 'string':
      return <StringFieldComponent fieldName={fieldName} field={field} value={value} onChange={onChange} />;
    case 'number':
      return <NumberFieldComponent fieldName={fieldName} field={field} value={value} onChange={onChange} />;
    case 'boolean':
      return <BooleanFieldComponent fieldName={fieldName} field={field} value={value} onChange={onChange} />;
    case 'enum':
      return <EnumFieldComponent fieldName={fieldName} field={field} value={value} onChange={onChange} />;
    case 'object':
      return <ObjectFieldComponent fieldName={fieldName} field={field} value={value} onChange={onChange} />;
    case 'array':
      return <ArrayFieldComponent fieldName={fieldName} field={field} value={value} onChange={onChange} />;
    default:
      return null;
  }
};

export default FormField;
