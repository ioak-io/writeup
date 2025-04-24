import React from 'react';
import { SpecField } from '../../types/DynamicFormTypes';
import StringFieldComponent from './StringField';
import NumberFieldComponent from './NumberField';
import BooleanFieldComponent from './BooleanField';
import EnumFieldComponent from './EnumField';
import ObjectFieldComponent from './ObjectField';
import ArrayFieldComponent from './ArrayField';
import { OptionsObjectType } from 'basicui';

const FormField = ({
  fieldName,
  field,
  value,
  onChange,
  optionsLookupDictionary,
  onRemove
}: {
  fieldName: string;
  field: SpecField;
  value: any;
  onChange: (name: string, value: any) => void;
  optionsLookupDictionary: { [key: string]: OptionsObjectType[] };
  onRemove?: () => void;
}) => {
  switch (field.type) {
    case 'string':
      return <StringFieldComponent fieldName={fieldName} field={field} value={value} onChange={onChange} optionsLookupDictionary={optionsLookupDictionary} />;
    case 'number':
      return <NumberFieldComponent fieldName={fieldName} field={field} value={value} onChange={onChange} optionsLookupDictionary={optionsLookupDictionary} />;
    case 'boolean':
      return <BooleanFieldComponent fieldName={fieldName} field={field} value={value} onChange={onChange} />;
    case 'enum':
      return <EnumFieldComponent fieldName={fieldName} field={field} value={value} onChange={onChange} />;
    case 'object':
      return <ObjectFieldComponent fieldName={fieldName} field={field} value={value} onChange={onChange} optionsLookupDictionary={optionsLookupDictionary}
        onRemove={onRemove}
      />;
    case 'array':
      return <ArrayFieldComponent fieldName={fieldName} field={field} value={value} onChange={onChange} optionsLookupDictionary={optionsLookupDictionary} />;
    default:
      return null;
  }
};

export default FormField;
