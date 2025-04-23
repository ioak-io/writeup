interface BaseValidation {
  custom?: (value: any) => boolean;
}
interface StringValidation {
  minLength?: number;
  maxLength?: number;
  regex?: string;
}

interface NumberValidation {
  min?: number;
  max?: number;
}

interface ArrayValidation {
  minItems?: number;
  maxItems?: number;
}

interface BaseField<TValidation = {}> {
  required?: boolean;
  validate?: TValidation & BaseValidation;
  displayOptions?: {
    label?: string; labelDesc?: string;
    placeholder?: string;
    tooltip?: string;
    [key: string]: any;
  };
}

export type StringField = BaseField<StringValidation> & {
  type: 'string';
  parent?: { domain: string, field: string };
  displayOptions?: {
    label?: string; labelDesc?: string;
    placeholder?: string;
    tooltip?: string;
    type?: "text" | "textarea" | "richtext" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  };
};

export type NumberField = BaseField<NumberValidation> & {
  type: 'number';
  parent?: { domain: string, field: string };
  displayOptions?: {
    label?: string; labelDesc?: string;
    placeholder?: string;
    tooltip?: string;
    type?: "number";
  };
};

export type BooleanField = BaseField & {
  type: 'boolean';
  displayOptions?: {
    label?: string; labelDesc?: string;
    type?: "checkbox";
  };
};

export type EnumField = BaseField & {
  type: 'enum';
  options: { label: string; value: string }[];
  displayOptions?: {
    label?: string; labelDesc?: string;
    placeholder?: string;
    tooltip?: string;
    type?: "radio-group" | "select" | "autocomplete";
  };
};

export type ObjectField = BaseField & {
  type: 'object';
  fields: {
    [field: string]: SpecField;
  };
  displayOptions?: {
    label?: string; labelDesc?: string;
    type?: "group";
  };
};

type BaseArrayField = BaseField<ArrayValidation> & {
  type: 'array';
  parent?: { domain: string; field: string };
  fields?: { [field: string]: SpecField };
};

type ObjectArrayField = BaseArrayField & {
  itemType: 'object';
  displayOptions?: {
    label?: string; labelDesc?: string;
    type?: 'array';
  };
};

type PrimitiveArrayField = BaseArrayField & {
  itemType: 'string' | 'number' | 'boolean';
  displayOptions?: {
    label?: string; labelDesc?: string;
    placeholder?: string;
    tooltip?: string;
    type?: "select" | "autocomplete" | "array";
  };
};

export type ArrayField = ObjectArrayField | PrimitiveArrayField;


export type SpecField =
  | StringField
  | NumberField
  | BooleanField
  | EnumField
  | ObjectField
  | ArrayField;

export type SpecDefinition = {
  fields: {
    [field: string]: SpecField;
  };
};

export interface DynamicFormProps {
  data: any;
  metadata: SpecDefinition;
  onChange: (name: string, value: any) => void;
  onSubmit?: (formData: FormData) => void;
  editMode?: boolean;
}


export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

export interface DynamicFormHandle {
  submit: () => void;
  reset: () => void;
  validate: () => ValidationResult;
}