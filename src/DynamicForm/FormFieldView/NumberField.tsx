import React from 'react';
import { Label, OptionsObjectType } from 'basicui';
import { NumberField } from '../../types/DynamicFormTypes';

const NumberFieldComponent = ({
  field,
  value,
  optionsLookupDictionary,
}: {
  field: NumberField;
  value: any;
  optionsLookupDictionary: { [key: string]: OptionsObjectType[] };
}) => {
  const display = field.displayOptions || {};

  const renderSelectDisplayValue = () => {
    const options = optionsLookupDictionary[display.optionsLookupKey || ''] || [];
    const matched = options.find((opt) => opt.name === value);
    return matched ? matched.value : value || <span>-</span>;
  };

  const renderContent = () => {
    switch (display.type) {
      case 'select':
      case 'autocomplete':
        return <p>{renderSelectDisplayValue()}</p>;
      case 'number':
        return <p>{value !== undefined && value !== null ? value : <span>-</span>}</p>;
    }
  };

  return (
    <div>
      <Label labelDesc={display.labelDesc}>{display.label}</Label>
      {renderContent()}
    </div>
  );
};

export default NumberFieldComponent;
