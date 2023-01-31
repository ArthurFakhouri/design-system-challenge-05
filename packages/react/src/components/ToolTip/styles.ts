import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const Content = styled(Tooltip.Content, {
    backgroundColor: '$gray900',
    padding: '12px 16px',
    borderRadius: '$sm',

    color: '$gray100',
    fontFamily: '$default',
    fontWeight: '$medium',
    fontSize: '$sm',
    textAlign: 'center',
})