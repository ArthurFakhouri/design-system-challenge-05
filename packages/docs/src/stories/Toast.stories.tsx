import { Button, Toast, ToastProps } from '@ignite-ui-arthur-fakhouri/react'
import type { Meta, ComponentStory } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

export default {
  title: 'Overlay/Toast',
  component: Toast,

  args: {
    open: false,
    title: 'Success!',
    description: 'The user has been created!',
    direction: 'bottomRight',
    duration: 5000,
  },
  argTypes: {
    open: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    direction: {
      options: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'],
      control: {
        type: 'inline-radio'
      }
    },
    duration: {
      control: {
        type: 'number'
      }
    }
  }
} as Meta<ToastProps>

export const Primary: ComponentStory<typeof Toast> = (args) => {

  const [, updateArgs] = useArgs();

  function handleOpenChange(timeout= false) {
    if (!args.open) {
      updateArgs({ open: !args.open })
    }
    if (timeout) {
      updateArgs({ open: !args.open })
    }
  }

  return (
    <Toast {...args} open={args.open} openChange={handleOpenChange}>
      <Button onClick={() => handleOpenChange()}>Send</Button>
    </Toast>
  )
}