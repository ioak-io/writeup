type FilterValueType = {
    id: string | number;
    label: string;
};

export type SearchBarFilterType = {
    fieldName: string;
    fieldLabel: string;
    fieldValues: FilterValueType[];
};
