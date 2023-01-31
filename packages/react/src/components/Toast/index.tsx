import { X } from 'phosphor-react'
import { ReactNode } from 'react'
import {
  Close,
  Description,
  Header,
  Title,
  ToastProvider,
  ToastRoot,
  Viewport,
} from './styles'

export interface ToastProps {
  title: string
  open: boolean;
  description?: string
  direction?: "topRight" | "topLeft" | "bottomRight" | "bottomLeft"
  children?: ReactNode
  duration: number
  openChange: (timeout: boolean) => void;
}

export function Toast({ title, open = false, openChange, description, direction = 'bottomRight', children }: ToastProps) {
  return (
    <ToastProvider>
      {children}
      <ToastRoot open={open} onOpenChange={() => openChange(true)}>
        <Header>
          <Title>{title}</Title>
          <Close aria-label='Close'>
            <X size={20} />
          </Close>
        </Header>
        {description ? <Description>{description}</Description> : null}
      </ToastRoot>
      <Viewport direction={direction} />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
