import { Button, Select, Space } from "antd";
import type { DefaultOptionType } from 'antd/es/select';
import React, { FC, useState } from 'react';
import './Hello.pcss';

type Props = {};

interface OptionType {
    label: React.ReactNode;
    value: number;
    options?: OptionType[];
}

export const Hello: FC<Props> = ({ }) => {
    const [value1, setValue1] = useState<number[]>([]);
    const [value2, setValue2] = useState<number[]>([]);

    function generateOptions(count: number): OptionType[] {
        return new Array(count).fill(1).map((_, index) => {
            const groupLabel = (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button type="link" size="small">📁</Button>
                    <span>标题 {index}</span>
                </div>
            );

            const subItemLabel = (subIndex: number) => (
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center'
                }}>
                    <Space>
                        <Button size="small">👀</Button>
                        <Button type="primary" size="small">✏️</Button>
                    </Space>
                    <span style={{ marginLeft: 8 }}>
                        选项{subIndex}-{index}
                    </span>
                </div>
            );

            return {
                label: groupLabel,
                value: 100000 + index,
                options: [
                    { 
                        label: subItemLabel(1),
                        value: 1000000 + index 
                    },
                    { 
                        label: subItemLabel(2),
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
                    options={generateOptions(400)}
                    popupMatchSelectWidth
                />
            </div>

            <div>
                <h3>使用 popupMatchSelectWidth=false（性能差）：</h3>
                <Select<number[], OptionType>
                    style={{ width: 300 }}
                    options={generateOptions(400)}
                    popupMatchSelectWidth={false}
                />
            </div>
        </Space>
    </div>;
};
