import React, {FC} from 'react';
import './Hello.pcss';
import {TreeSelect} from "antd";

type Props = {};

function generateTreeData(count: number) {
    return new Array(count).fill(1).map((_, index) => {
        return {
            title: `title-${index}`, value: 100000 + index, children: [
                {title: 'sub1', value: 1000000 + index},
                {title: 'sub2', value: 10000000 + index},
            ]
        }
    })
}

export const Hello: FC<Props> = ({}) => {
    return <div className={'Hello'}>
        <TreeSelect
            dropdownMatchSelectWidth={false}
            treeData={generateTreeData(10000)}/>
    </div>;
}
