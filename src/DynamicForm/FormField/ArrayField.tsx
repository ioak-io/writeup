import React, { useState } from 'react';
import { ArrayField, SpecField } from '../../types/DynamicFormTypes';
import FormField from '.';
import { Accordion, Label, OptionsObjectType, Select, SvgIcon } from 'basicui';
import ExpandableSection from './ExpandableSection';

type ArrayFieldComponentProps = {
  fieldName: string;
  field: ArrayField;
  value: any[];
  onChange: (name: string, value: any[]) => void;
  optionsLookupDictionary: { [key: string]: OptionsObjectType[] };
};

const ArrayFieldComponent: React.FC<ArrayFieldComponentProps> = ({
  fieldName,
  field,
  value = [],
  onChange,
  optionsLookupDictionary
}) => {
  const values = Array.isArray(value) ? value : [];
  const { itemType, fields } = field;
  const display = field.displayOptions || {};
  const type = display.type;

  const [expanded, setExpanded] = useState(true);

  const handleAddItem = () => {
    const newItem = itemType === 'object' ? {} : '';
    onChange(fieldName, [...values, newItem]);
  };

  const handleRemoveItem = (index: number) => {
    const updated = values.filter((_, i) => i !== index);
    onChange(fieldName, updated);
  };

  const handleChange = (event: any) => {
    onChange(fieldName, event.currentTarget.values);
  }

  if (type === 'select' || type === 'autocomplete') {
    const options = optionsLookupDictionary[display.optionsLookupKey || ''] || [];

    return (
      <div>
        <Select
          name={fieldName}
          label={display.label}
          labelDesc={display.labelDesc}
          placeholder={display.placeholder}
          value={values}
          autocomplete={type === 'autocomplete'}
          onChange={handleChange}
          options={options}
          multiple
        />
      </div>
    );
  }

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
      console.log(display)
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
      <div key={index} className="powerui-dynamicform-arrayfield__main__item">
        <div className="powerui-dynamicform-arrayfield__main__item__field">
          <FormField
            fieldName={`${fieldName}[${index}]`}
            field={itemField}
            value={item}
            onChange={(_, val) => {
              const updated = [...values];
              updated[index] = val;
              onChange(fieldName, updated);
            }}
            onRemove={() => handleRemoveItem(index)}
            optionsLookupDictionary={optionsLookupDictionary}
          />
        </div>
        {itemType !== "object" && <div className='powerui-accordion-actionbutton-wrapper'>
          <button onClick={() => handleRemoveItem(index)} className="basicui-clean-button">
            <SvgIcon height="12px" width="12px">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
            </SvgIcon>
          </button>
        </div>}
      </div>
    );
  };

  return (
    <ExpandableSection
      expanded={expanded}
      onToggleExpand={() => setExpanded(!expanded)}
      label={display.label || ""}
      labelDesc={display.labelDesc}
    >
      {values.map(renderItem)}
      <button className='basicui-clean-button powerui-dynamicform-arrayfield-addaction' onClick={handleAddItem}>Add item</button>
    </ExpandableSection>
  );
};

export default ArrayFieldComponent;
