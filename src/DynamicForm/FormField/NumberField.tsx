import React from 'react';
import { Input } from 'basicui';
import { NumberField } from '../../types/DynamicFormTypes';

const NumberFieldComponent = ({
  fieldName,
  field,
  value,
  onChange,
}: {
  fieldName: string;
  field: NumberField;
  value: any;
  onChange: (name: string, value: any) => void;
}) => {
  const display = field.displayOptions || {};
  const handleChange = (event: any) => {
    onChange(fieldName, event.currentTarget.value);
  };

  return (
    <Input
      type="number"
      name={fieldName}
      label={display.label}
      labelDesc={display.labelDesc}
      placeholder={display.placeholder}
      value={value}
      onInput={handleChange}
    />
  );
};

export default NumberFieldComponent;
