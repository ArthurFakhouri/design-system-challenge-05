import { themes } from '@storybook/theming';

const customViewportStyle = {
  styles: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red'
  }
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark
  },
  layout: 'centered',
}