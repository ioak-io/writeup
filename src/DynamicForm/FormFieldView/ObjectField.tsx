import React, { useState } from 'react';
import { OptionsObjectType } from 'basicui';
import { ObjectField } from '../../types/DynamicFormTypes';
import ExpandableSection from './ExpandableSection';
import FormFieldView from '.';

const ObjectFieldComponent = ({
  field,
  value,
  optionsLookupDictionary,
}: {
  field: ObjectField;
  value: any;
  optionsLookupDictionary: { [key: string]: OptionsObjectType[] };
}) => {
  const [expanded, setExpanded] = useState(true);
  const label = field.displayOptions?.label || "-";

  return (
    <ExpandableSection
      expanded={expanded}
      onToggleExpand={() => setExpanded((prev) => !prev)}
      label={label}
      // isReadOnly
    >
      <div className="writeup-dynamicform-object">
        {Object.entries(field.fields).map(([childKey, childField]) => (
          <FormFieldView
            key={childKey}
            field={childField}
            value={value?.[childKey]}
            optionsLookupDictionary={optionsLookupDictionary}
          />
        ))}
      </div>
    </ExpandableSection>
  );
};

export default ObjectFieldComponent;
