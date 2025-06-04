import React from 'react';
import { Input, OptionsObjectType, Select } from 'basicui';
import { NumberField } from '../../types/DynamicFormTypes';

const NumberFieldComponent = ({
  fieldName,
  field,
  value,
  onChange,
  optionsLookupDictionary
}: {
  fieldName: string;
  field: NumberField;
  value: any;
  onChange: (name: string, value: any) => void;
  optionsLookupDictionary: { [key: string]: OptionsObjectType[] };
}) => {
  const display = field.displayOptions || {};
  const handleChange = (event: any) => {
    let value = event.currentTarget.valueAsNumber;
    if (display.type === "autocomplete" || display.type === "select") {
      value = event.currentTarget.value ? parseInt(event.currentTarget.value) : 0;
    }
    onChange(fieldName, value);
  };

  switch (display.type) {
    case 'select':
    case 'autocomplete':
      return <Select
        name={fieldName} label={display.label} labelDesc={display.labelDesc} placeholder={display.placeholder}
        value={value ? [value.toString()] : []} autocomplete={display.type === "autocomplete"} onChange={handleChange} options={optionsLookupDictionary[field.displayOptions?.optionsLookupKey || ""] || []} />
    case 'number':
      return <Input
        type="number"
        name={fieldName}
        label={display.label}
        labelDesc={display.labelDesc}
        placeholder={display.placeholder}
        value={value}
        onInput={handleChange}
      />
  }
};

export default NumberFieldComponent;
