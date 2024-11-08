import { Button, Select, Space } from "antd";
import type { DefaultOptionType } from 'antd/es/select';
import React, { FC, useState } from 'react';
import './Hello.pcss';

type Props = {};

interface OptionType {
    label: string;
    value: number;
    options?: OptionType[];
}

export const Hello: FC<Props> = ({ }) => {
    const [value1, setValue1] = useState<number[]>([]);
    const [value2, setValue2] = useState<number[]>([]);

    function generateOptions(count: number): OptionType[] {
        return new Array(count).fill(1).map((_, index) => {
            return {
                label: `标题 ${index}`,
                value: 100000 + index,
                options: [
                    { 
                        label: `选项1-${index}`,
                        value: 1000000 + index 
                    },
                    { 
                        label: `选项2-${index}`,
                        value: 10000000 + index 
                    },
                ]
            }
        })
    }

    return <div className={'Hello'}>
        <Space>
            <div>
                <h3>使用popupMatchSelectWidth=true（性能好）：</h3>
                <Select<number[], OptionType>
                    style={{ width: 300 }}
                    options={generateOptions(10000)}
                    popupMatchSelectWidth
                />
            </div>

            <div>
                <h3>使用 popupMatchSelectWidth=false（性能差）：</h3>
                <Select<number[], OptionType>
                    style={{ width: 300 }}
                    options={generateOptions(10000)}
                    popupMatchSelectWidth={false}
                />
            </div>
        </Space>
    </div>;
};
