import { themes } from '@storybook/theming';
import './style.css';
import '../src/styles/index.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: 'light',
    // Override the default dark theme
    dark: {
      ...themes.dark, appBg: '#0c0c0c'
      // , brandImage: "https://oakui.ioak.io/68a913fc49c62842c6b8b78ff12730df.svg" 
    },
    // Override the default light theme
    light: {
      ...themes.normal, appBg: '#fcfcfc'
      // , brandImage: "https://oakui.ioak.io/95e2684ee1b1f201fe4fc534e3859336.svg" 
    },
    darkClass: 'basicui-dark',
    lightClass: 'basicui-light',
    stylePreview: true,
    classTarget: 'html'
  }
}