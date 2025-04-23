import React, { useEffect, useState } from 'react';
import { Label } from 'basicui';

interface FormFieldViewProps {
    field: any;
    value: any;
}

const FormFieldView: React.FC<FormFieldViewProps> = ({ field, value }) => {
    

    return (
        <div className="writeup-formfieldview">
            View
        </div>
    );
};

export default FormFieldView;
