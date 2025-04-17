import React, { useState, useEffect } from 'react'
import { Input } from 'basicui'

export type DetailViewProps = {
}

const DetailView = (props: DetailViewProps) => {
    return (
        <div className="writeup-detailview">
            Detail view
            <Input />
        </div>
    )
}

export default DetailView;
