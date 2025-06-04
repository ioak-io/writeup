import React from 'react';
import { Select, Radio, Label, ThemeType } from 'basicui';
import { EnumField } from '../../types/DynamicFormTypes';

const EnumFieldComponent = ({
  fieldName,
  field,
  value,
  onChange,
}: {
  fieldName: string;
  field: EnumField;
  value: any;
  onChange: (name: string, value: any) => void;
}) => {
  const display = field.displayOptions || {};
  const type = display.type || 'select';

  if (type === 'radio-group') {
    return (
      <div>
        <Label labelDesc={display.labelDesc}>{display.label}</Label>
        <div className="writeup-formfield__radiogroup">
          {field.options.map((option) => (
            <Radio
              key={option.value}
              theme={ThemeType.primary}
              name={fieldName}
              label={option.label}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(fieldName, option.value)}
            />
          ))}
        </div>
      </div>
    );
  }

  if (type === "autocomplete" || type === "select") {
    return (
      <Select
        name={fieldName}
        label={display.label}
        labelDesc={display.labelDesc}
        placeholder={display.placeholder}
        options={field.options.map((opt) => ({ value: opt.label, name: opt.value }))}
        value={[value]}
        onInput={(e: any) => onChange(fieldName, e.currentTarget.value)}
        autocomplete={type === 'autocomplete'}
      />
    );
  }

  return <></>
};

export default EnumFieldComponent;
