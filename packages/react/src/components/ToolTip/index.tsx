import * as Tooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react';
import { Content } from './styles';

export interface ToolTipProps {
    open: boolean;
    content: string;
    children: ReactNode;
    openChange: (open: boolean) => void;
}

export function ToolTip({ open, content, children, openChange }: ToolTipProps) {

    return (
        <Tooltip.Provider>
            <Tooltip.Root open={open} onOpenChange={(open) => openChange(open)}>
                <Tooltip.Trigger asChild>
                    {children}
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Content>
                        {content}
                        <Tooltip.Arrow className="TooltipArrow" />
                    </Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    )
}

ToolTip.displayName = 'ToolTip'