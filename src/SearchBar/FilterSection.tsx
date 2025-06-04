import { Accordion, Checkbox, ThemeType } from 'basicui';
import React, { useState, useRef, useEffect } from 'react';

type FilterSectionProps = {
    fieldLabel: string;
    fieldName: string;
    fieldValues: { id: string | number; label: string }[];
    selectedFilters: Record<string, (string | number)[]>;
    toggleFilter: (field: string, valueId: string | number) => void;
};

const FilterSection = ({ fieldLabel, fieldName, fieldValues, selectedFilters, toggleFilter }: FilterSectionProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState("0px");
    const contentRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const selectedCount = selectedFilters[fieldName]?.length || 0;

    useEffect(() => {
        if (contentRef.current) {
            if (isOpen) {
                setHeight(`${contentRef.current.scrollHeight}px`);
                setTimeout(() => {
                    setHeight("auto");
                }, 250);
            } else {
                setHeight(`${contentRef.current.scrollHeight}px`);
                setTimeout(() => {
                    setHeight("0px");
                }, 100)
            }
        }
    }, [isOpen]);

    return (
        <Accordion className="basicui-searchbar-filtersection" expanded={isOpen} onChange={() => setIsOpen(!isOpen)} heading={`${fieldLabel}${selectedCount > 0 ? ` (${selectedCount})` : ""}`}>
            <div
                className="basicui-searchbar-filtersection__content"
            >
                {fieldValues.map(val => (
                    <Checkbox
                        key={val.id}
                        theme={ThemeType.primary}
                        checked={selectedFilters[fieldName]?.includes(val.id) || false}
                        onChange={() => toggleFilter(fieldName, val.id)}
                        label={val.label}
                    />
                ))}
            </div>
        </Accordion>
    );
};

export default FilterSection;
