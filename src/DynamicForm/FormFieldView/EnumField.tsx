import React from 'react';
import { Label } from 'basicui';
import { EnumField } from '../../types/DynamicFormTypes';

const EnumFieldComponent = ({
  field,
  value,
}: {
  field: EnumField;
  value: any;
}) => {
  const display = field.displayOptions || {};
  const type = display.type || 'select';

  const getDisplayLabel = () => {
    const match = field.options.find((opt) => opt.value === value);
    return match ? match.label : <span>—</span>;
  };

  const renderContent = () => {
    switch (type) {
      case 'radio-group':
      case 'select':
      case 'autocomplete':
        return <p>{getDisplayLabel()}</p>;
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

export default EnumFieldComponent;
