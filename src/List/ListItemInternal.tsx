// ListingPage.tsx
import React, { useState } from "react";
import { ListItemType } from ".";
import { Checkbox, SvgIcon, ThemeType } from "basicui";
import { formatDate } from "../utils/DateUtils";

export interface ListItemInternalProps {
    selectedItems?: string[];
    onClick?: (id: string) => void;
    onSelect?: (event: any) => void;
    data: ListItemType;
    children?: React.ReactNode;
    showSelectOnRight?: boolean;
    showCollapse?: boolean;
}

const stripHtml = (html: string): string => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
};

const ListItemInternal = (props: ListItemInternalProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        if (props.onClick) {
            props.onClick(props.data.id);
        }
    }

    const toggleExpand = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent click bubbling to parent
        setIsExpanded(prev => !prev);
    };

    return (
        <div className="basicui-listitem">
            {props.showCollapse && (
                <div className="basicui-listitem__left">
                    <button className="basicui-clean-button basicui-listitem__expand" onClick={toggleExpand}>
                        <SvgIcon height="16px" width="16px">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                            </svg>
                        </SvgIcon>
                    </button>
                </div>
            )}
            {props.onSelect && !props.showSelectOnRight && <div className="basicui-listitem__left">
                <Checkbox name={props.data?.id} circle theme={ThemeType.primary} checked={props.selectedItems?.includes(props.data.id)} onChange={props.onSelect} />
            </div>}
            <div className="basicui-listitem__main"
                role={props.onClick ? "button" : undefined}
                tabIndex={props.onClick ? 0 : undefined}
                onClick={handleClick}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        handleClick
                    }
                }}>
                {props.children || props.data && (
                    <div className="basicui-listitem__main__content">
                        {props.data.title && <p className="no-margin basicui-listitem__main__content__title">
                            {props.data.title}
                        </p>}
                        {(!props.showCollapse || isExpanded) && <>
                            {props.data.summary && <p className="basicui-listitem__main__content__summary no-margin small">
                                {stripHtml(props.data.summary)}
                            </p>}
                            <div className="basicui-listitem__main__content__date-and-labels small">
                                {props.data.createdAt && <div className="basicui-listitem__main__content__date">
                                    <SvgIcon height="9px" width="9px">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" /></svg>
                                    </SvgIcon>
                                    {formatDate(props.data.createdAt)}
                                </div>
                                }
                                {props.data.labels && props.data.labels.length > 0 && <div className="basicui-listitem__main__content__labels">
                                    {props.data.labels.map(item =>
                                        <div className="basicui-listitem__main__content__labels__item">
                                            <SvgIcon height="9px" width="9px">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>
                                            </SvgIcon>
                                            {item.value}
                                        </div>
                                    )}
                                </div>}
                            </div>
                        </>}
                    </div>
                )}
            </div>
            {props.onSelect && props.showSelectOnRight && <div className="basicui-listitem__right">
                <Checkbox name={props.data?.id} circle theme={ThemeType.primary} checked={props.selectedItems?.includes(props.data.id)} onChange={props.onSelect} />
            </div>}
        </div>
    );
};

export default ListItemInternal;

