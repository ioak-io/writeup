import React, { useState } from "react";

export interface ListItemProps {
    children?: React.ReactNode;
}

const ListItem = (props: ListItemProps) => {
    return (
        <>{props.children}</>
    );
};

ListItem.displayName = "ListItem";

export default ListItem;

