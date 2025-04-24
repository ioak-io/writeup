// ExpandableSection.tsx
import React from 'react';
import { Accordion, Label, SvgIcon } from 'basicui';

type ExpandableSectionProps = {
    expanded: boolean;
    onToggleExpand: () => void;
    onRemove?: () => void;
    label: string;
    labelDesc?: string;
    children: React.ReactNode;
};

const ExpandableSection: React.FC<ExpandableSectionProps> = ({
    expanded,
    onToggleExpand,
    label,
    labelDesc,
    children,
    onRemove,
}) => {
    return (
        <div className="writeup-dynamicform-arrayfield">
            <div className="writeup-dynamicform-arrayfield__header">
                <div className="writeup-accordion-actionbutton-wrapper">
                    <button onClick={onToggleExpand} className="basicui-clean-button">
                        <SvgIcon height="12px" width="12px">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                        </SvgIcon>
                    </button>
                </div>
                <div className="writeup-dynamicform-arrayfield__header__label">
                    <Label labelDesc={labelDesc}>{label}</Label>
                </div>

                {onRemove && <div className='writeup-accordion-actionbutton-wrapper'>
                    <button onClick={onRemove} className="basicui-clean-button">
                        <SvgIcon height="12px" width="12px">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                        </SvgIcon>
                    </button>
                </div>}
            </div>
            <Accordion expanded={expanded}>
                <div className="writeup-dynamicform-arrayfield__main">
                    {children}
                </div>
            </Accordion>
        </div>
    );
};

export default ExpandableSection;
