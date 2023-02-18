var p=Object.defineProperty;var t=(n,o)=>p(n,"name",{value:o,configurable:!0});import{d as i,a as s}from"./index-c39801f8.js";import{j as r}from"./jsx-runtime-1becbe17.js";import{l as c}from"./iframe-ccf31bad.js";import"./es.object.get-own-property-descriptor-037fa860.js";import"./index-43ec82a8.js";import"./index-648f2948.js";import"./web.url.constructor-5545ffb7.js";import"./es.number.is-integer-e6805771.js";const b={parameters:{storySource:{source:`import { Button, Toast, ToastProps } from '@ignite-ui-arthur-fakhouri/react'
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
}`,locationsMap:{primary:{startLoc:{col:53,line:40},endLoc:{col:1,line:58},startBody:{col:53,line:40},endBody:{col:1,line:58}}}}},title:"Overlay/Toast",component:i,args:{open:!1,title:"Success!",description:"The user has been created!",direction:"bottomRight",duration:5e3},argTypes:{open:{control:"boolean"},title:{control:"text"},description:{control:"text"},direction:{options:["topLeft","topRight","bottomLeft","bottomRight"],control:{type:"inline-radio"}},duration:{control:{type:"number"}}}},C=t(n=>{const[,o]=c();function e(a=!1){n.open||o({open:!n.open}),a&&o({open:!n.open})}return t(e,"handleOpenChange"),r(i,{...n,open:n.open,openChange:e,children:r(s,{onClick:()=>e(),children:"Send"})})},"Primary"),x=["Primary"];export{C as Primary,x as __namedExportsOrder,b as default};
//# sourceMappingURL=Toast.stories-0e2726af.js.map
