import React from 'react';
import { Label } from 'basicui';
import { BooleanField } from '../../types/DynamicFormTypes';

const BooleanFieldComponent = ({
  field,
  value,
}: {
  field: BooleanField;
  value: any;
}) => {
  const display = field.displayOptions || {};
  const displayValue = value ? 'Yes' : 'No';

  return (
    <div>
      <Label labelDesc={display.labelDesc}>{display.label}</Label>
      <p>{displayValue}</p>
    </div>
  );
};

export default BooleanFieldComponent;
