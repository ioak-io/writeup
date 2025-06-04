import React from 'react';
import { ArrayField, SpecField } from '../../types/DynamicFormTypes';
import { Label, OptionsObjectType } from 'basicui';
import FormField from '.';
import ExpandableSection from './ExpandableSection';
import FormFieldView from '.';

type ArrayFieldComponentProps = {
  field: ArrayField;
  value: any[];
  optionsLookupDictionary: { [key: string]: OptionsObjectType[] };
};

const ArrayFieldComponent: React.FC<ArrayFieldComponentProps> = ({
  field,
  value = [],
  optionsLookupDictionary
}) => {
  const values = Array.isArray(value) ? value : [];
  const { itemType, fields } = field;
  const display = field.displayOptions || {};
  const type = display.type;

  const renderSelectValues = () => {
    const options = optionsLookupDictionary[display.optionsLookupKey || ''] || [];
    const valueLabels = values.map((val) => {
      const matched = options.find((opt) => opt.name === val);
      return matched ? matched.value : val;
    });

    return (
      <ul className="readonly-select-list">
        {valueLabels.map((label, index) => (
          <li key={index}>{label}</li>
        ))}
      </ul>
    );
  };

  const renderItem = (item: any, index: number) => {
    let itemField: SpecField = {
      type: 'object',
      fields: fields || {},
      displayOptions: {
        ...display,
        type: 'group',
      },
    };

    if (itemType === 'string') {
      itemField = {
        type: itemType,
        displayOptions: {
          type: 'text',
          placeholder: display.placeholder,
        },
      };
    } else if (itemType === 'number') {
      itemField = {
        type: itemType,
        displayOptions: {
          type: 'number',
          placeholder: display.placeholder,
        },
      };
    }

    return (
      <div key={index} className="readonly-array-item">
        <FormFieldView
          field={itemField}
          value={item}
          optionsLookupDictionary={optionsLookupDictionary}
        />
      </div>
    );
  };

  return (
    <div className="readonly-array-field">
      <Label labelDesc={display.labelDesc}>{display.label}</Label>
      {type === 'select' || type === 'autocomplete' ? (
        renderSelectValues()
      ) : (
        values.map(renderItem)
      )}
    </div>
  );
};

export default ArrayFieldComponent;
