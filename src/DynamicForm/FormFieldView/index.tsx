import React from 'react';
import { SpecField } from '../../types/DynamicFormTypes';
import StringFieldComponent from './StringField';
import NumberFieldComponent from './NumberField';
import BooleanFieldComponent from './BooleanField';
import EnumFieldComponent from './EnumField';
import ObjectFieldComponent from './ObjectField';
import ArrayFieldComponent from './ArrayField';
import { OptionsObjectType } from 'basicui';

const FormFieldView = ({
  field,
  value,
  optionsLookupDictionary,
}: {
  field: SpecField;
  value: any;
  optionsLookupDictionary: { [key: string]: OptionsObjectType[] };
}) => {
  switch (field.type) {
    case 'string':
      return <StringFieldComponent field={field} value={value} optionsLookupDictionary={optionsLookupDictionary} />;
    case 'number':
      return <NumberFieldComponent field={field} value={value} optionsLookupDictionary={optionsLookupDictionary} />;
    case 'boolean':
      return <BooleanFieldComponent field={field} value={value} />;
    case 'enum':
      return <EnumFieldComponent field={field} value={value} />;
    case 'object':
      return <ObjectFieldComponent field={field} value={value} optionsLookupDictionary={optionsLookupDictionary}
      />;
    case 'array':
      return <ArrayFieldComponent field={field} value={value} optionsLookupDictionary={optionsLookupDictionary} />;
    default:
      return null;
  }
};

export default FormFieldView;
