import { Button, ToolTip, ToolTipProps } from '@ignite-ui-arthur-fakhouri/react'
import type { Meta, ComponentStory } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

export default {
    title: 'Overlay/Tooltip',
    component: ToolTip,

    args: {
        open: false,
        content: 'This is a tooltip example! 🚀',
    },
    argTypes: {
        open: {
            control: 'boolean'
        },
        content: {
            control: 'text',
        },
        children: {
            control: {
                type: null
            }
        }
    }
} as Meta<ToolTipProps>

export const Primary: ComponentStory<typeof ToolTip> = (args) => {

    const [, updateArgs] = useArgs();

    function handleOpenChange(open: boolean) {
        updateArgs({ open });
    }

    return (
        <ToolTip {...args} openChange={handleOpenChange}>
            <Button variant={'tertiary'}>Info</Button>
        </ToolTip>
    )
}