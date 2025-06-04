import React from 'react';
import { Checkbox, ThemeType } from 'basicui';
import { BooleanField } from '../../types/DynamicFormTypes';

const BooleanFieldComponent = ({
  fieldName,
  field,
  value,
  onChange,
}: {
  fieldName: string;
  field: BooleanField;
  value: any;
  onChange: (name: string, value: any) => void;
}) => {
  const display = field.displayOptions || {};

  return (
    <Checkbox
      theme={ThemeType.primary}
      name={fieldName}
      checked={!!value}
      onChange={(e: any) => onChange(fieldName, e.currentTarget.checked)}
      label={display.label}
    />
  );
};

export default BooleanFieldComponent;
