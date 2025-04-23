import React from 'react';
import { ArrayField, SpecField } from '../../types/DynamicFormTypes';
import FormField from '.';

type ArrayFieldComponentProps = {
  fieldName: string;
  field: ArrayField;
  value: any[];
  onChange: (name: string, value: any[]) => void;
};

const ArrayFieldComponent: React.FC<ArrayFieldComponentProps> = ({
  fieldName,
  field,
  value = [],
  onChange,
}) => {
  const values = Array.isArray(value) ? value : [];
  const { displayOptions = {}, itemType, fields } = field;
  const { label = fieldName } = displayOptions;

  const handleUpdateItem = (index: number, updatedValue: any) => {
    const updated = [...values];
    updated[index] = updatedValue;
    onChange(fieldName, updated);
  };

  const handleAddItem = () => {
    const newItem = itemType === 'object' ? {} : '';
    onChange(fieldName, [...values, newItem]);
  };

  const handleRemoveItem = (index: number) => {
    const updated = values.filter((_, i) => i !== index);
    onChange(fieldName, updated);
  };

  const renderItem = (item: any, index: number) => {
    const itemField: SpecField =
      itemType === 'object'
        ? {
          type: 'object',
          fields: fields || {},
          displayOptions: {
            ...displayOptions,
            layout: undefined, // Prevent nesting layout
          },
        }
        : {
          type: itemType,
          displayOptions,
        };

    return (
      <div key={index} className="array-item">
        <FormField
          fieldName={`${fieldName}[${index}]`}
          field={itemField}
          value={item}
          onChange={(_, val) => handleUpdateItem(index, val)}
        />
        <button onClick={() => handleRemoveItem(index)} className="basicui-button">
          Remove
        </button>
      </div>
    );
  };

  return (
    <div>
      {values.map(renderItem)}
      <button onClick={handleAddItem} className="writeup-dynamicform-addbutton basicui-button">
        Add
      </button>
    </div>
  );
};

export default ArrayFieldComponent;
