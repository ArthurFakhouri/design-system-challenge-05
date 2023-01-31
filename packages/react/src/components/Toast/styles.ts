import { styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

export const ToastProvider = styled(Toast.Provider, {})

export const ToastRoot = styled(Toast.Root, {
  listStyle: 'none',

  display: 'flex',
  flexDirection: 'column',

  minWidth: 200,
  padding: '12px 20px',
  backgroundColor: '$gray800',
  border: 'solid 1px $gray600',
  borderRadius: '$sm',
  gap: 4,
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between'
})

export const Title = styled(Toast.Title, {
  gridArea: 'title',
  fontWeight: '$bold',
  color: '$white',
  fontSize: '$xl',
})

export const Description = styled(Toast.Description, {
  gridArea: 'description',
  fontWeight: '$regular',
  fontSize: '$sm',
  color: '$gray200'
})

export const Close = styled(Toast.Close, {
  background: 'transparent',
  lineHeight: 0,
  border: 0,
  color: '$gray200',
  padding: 0,
  cursor: 'pointer',
})

export const Viewport = styled(Toast.Viewport, {
  variants: {
    direction: {
      topLeft: {
        top: 0,
        left: 0,
      },
      topRight: {
        top: 0,
        right: 0,
      },
      bottomLeft: {
        bottom: 0,
        left: 0,
      },
      bottomRight: {
        bottom: 0,
        right: 0,
      },
    },
  },

  position: 'fixed',
  '--viewport-padding': '25px',
  padding: 'var(--viewport-padding)',

  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
})
