import React from 'react';
import { Label, OptionsObjectType } from 'basicui';
import { StringField } from '../../types/DynamicFormTypes';

const StringFieldComponent = ({
  field,
  value,
  optionsLookupDictionary,
}: {
  field: StringField;
  value: any;
  optionsLookupDictionary: { [key: string]: OptionsObjectType[] };
}) => {
  const display = field.displayOptions || {};

  const renderSelectDisplayValue = () => {
    const options = optionsLookupDictionary[display.optionsLookupKey || ''] || [];
    const matched = options.find((opt) => opt.name === value);
    return matched ? matched.value : (value || <span>-</span>);
  };

  const renderContent = () => {
    switch (display.type) {
      case 'richtext':
        return (
          <div dangerouslySetInnerHTML={{ __html: value || '-' }} />
        );
      case 'text':
      case 'textarea':
        return <p>{value || <span>-</span>}</p>;
      case 'h1':
        return <h1>{value || <span>-</span>}</h1>;
      case 'h2':
        return <h2>{value || <span>-</span>}</h2>;
      case 'h3':
        return <h3>{value || <span>-</span>}</h3>;
      case 'h4':
        return <h4>{value || <span>-</span>}</h4>;
      case 'h5':
        return <h5>{value || <span>-</span>}</h5>;
      case 'h6':
        return <h6>{value || <span>-</span>}</h6>;
      case 'select':
      case 'autocomplete':
        return <p>{renderSelectDisplayValue()}</p>;
      default:
        return <p>{value || <span>—</span>}</p>;
    }
  };

  return (
    <div>
      <Label labelDesc={display.labelDesc}>{display.label}</Label>
      {renderContent()}
    </div>
  );
};

export default StringFieldComponent;
