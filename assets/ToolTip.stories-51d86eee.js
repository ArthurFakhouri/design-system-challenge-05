var i=Object.defineProperty;var t=(o,n)=>i(o,"name",{value:n,configurable:!0});import{e as r,a as l}from"./index-c39801f8.js";import{j as e}from"./jsx-runtime-1becbe17.js";import{l as s}from"./iframe-ccf31bad.js";import"./index-43ec82a8.js";import"./es.object.get-own-property-descriptor-037fa860.js";import"./index-648f2948.js";import"./web.url.constructor-5545ffb7.js";import"./es.number.is-integer-e6805771.js";const x={parameters:{storySource:{source:`import { Button, ToolTip, ToolTipProps } from '@ignite-ui-arthur-fakhouri/react'
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
}`,locationsMap:{primary:{startLoc:{col:55,line:28},endLoc:{col:1,line:41},startBody:{col:55,line:28},endBody:{col:1,line:41}}}}},title:"Overlay/Tooltip",component:r,args:{open:!1,content:"This is a tooltip example! 🚀"},argTypes:{open:{control:"boolean"},content:{control:"text"},children:{control:{type:null}}}},C=t(o=>{const[,n]=s();function a(p){n({open:p})}return t(a,"handleOpenChange"),e(r,{...o,openChange:a,children:e(l,{variant:"tertiary",children:"Info"})})},"Primary"),A=["Primary"];export{C as Primary,A as __namedExportsOrder,x as default};
//# sourceMappingURL=ToolTip.stories-51d86eee.js.map
