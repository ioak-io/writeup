import React, { useState } from 'react';
import FormField from '.';
import { Accordion, SvgIcon } from 'basicui';
import { ObjectField } from '../../types/DynamicFormTypes';

const ObjectFieldComponent = ({
  fieldName,
  field,
  value,
  onChange,
}: {
  fieldName: string;
  field: ObjectField;
  value: any;
  onChange: (name: string, value: any) => void;
}) => {
  const [expanded, setExpanded] = useState(true);

  const label = field.displayOptions?.label || fieldName;

  const content = (
    <div className="writeup-dynamicform-object">
      {Object.entries(field.fields).map(([childKey, childField]) => (
        <FormField
          key={childKey}
          fieldName={`${fieldName}.${childKey}`}
          field={childField}
          value={value?.[childKey]}
          onChange={(name, val) => {
            onChange(fieldName, {
              ...value,
              [childKey]: val,
            });
          }}
        />
      ))}
    </div>
  );

  const renderAccordionHeader = () => {
    return (
      <div className="writeup-objectfield-accordionheader">
        <div>
          {label}
        </div>
        <div className="writeup-objectfield-accordionheader__actions">
          <button className='basicui-clean-button'>
            <SvgIcon height="12px" width="12px">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
            </SvgIcon>
          </button>
        <button className="basicui-clean-button"
          onClick={() => setExpanded((prev) => !prev)}>
          <SvgIcon height="12px" width="12px">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
          </SvgIcon>
        </button>
        </div>
      </div>
    )
  }

  return (
    <div className="writeup-objectfield">
      {/* <div className='writeup-objectfield__arrow'>
        <button className="basicui-clean-button"
          onClick={() => setExpanded((prev) => !prev)}>
          <SvgIcon height="12px" width="12px">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
          </SvgIcon>
        </button>
      </div> */}
      <Accordion
        className='writeup-objectfield__accordion'
        header={renderAccordionHeader()}
        expanded={expanded}
      >
        {content}
      </Accordion>
    </div>
  );

};

export default ObjectFieldComponent;
