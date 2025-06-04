import React, { useState } from 'react';
import FormField from '.';
import { OptionsObjectType } from 'basicui';
import { ObjectField } from '../../types/DynamicFormTypes';
import ExpandableSection from './ExpandableSection'; // Adjust path as needed

const ObjectFieldComponent = ({
  fieldName,
  field,
  value,
  onChange,
  optionsLookupDictionary,
  onRemove
}: {
  fieldName: string;
  field: ObjectField;
  value: any;
  onChange: (name: string, value: any) => void;
  optionsLookupDictionary: { [key: string]: OptionsObjectType[] };
  onRemove?: () => void;
}) => {
  const [expanded, setExpanded] = useState(true);
  const label = field.displayOptions?.label || fieldName;

  const handleChange = (childKey: string, val: any) => {
    onChange(fieldName, {
      ...value,
      [childKey]: val,
    });
  };

  return (
    <ExpandableSection
      expanded={expanded}
      onToggleExpand={() => setExpanded((prev) => !prev)}
      label={label}
      onRemove={onRemove}
    >
      <div className="powerui-dynamicform-object">
        {Object.entries(field.fields).map(([childKey, childField]) => (
          <FormField
            key={childKey}
            fieldName={`${fieldName}.${childKey}`}
            field={childField}
            value={value?.[childKey]}
            onChange={(_, val) => handleChange(childKey, val)}
            optionsLookupDictionary={optionsLookupDictionary}
          />
        ))}
      </div>
    </ExpandableSection>
  );
};

export default ObjectFieldComponent;
