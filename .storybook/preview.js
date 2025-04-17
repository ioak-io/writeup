import { themes } from '@storybook/theming';
import { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import './style.css'; // or '../src/styles/index.css' if needed

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
    dark: {
      ...themes.dark,
      appBg: '#0c0c0c',
    },
    light: {
      ...themes.normal,
      appBg: '#fcfcfc',
    },
    stylePreview: true,
    classTarget: 'html',
  },
};

// Custom decorator to toggle multiple classes for dark/light mode
export const decorators = [
  (Story) => {
    const isDark = useDarkMode();

    useEffect(() => {
      const classTarget = document.querySelector('html');
      if (!classTarget) return;

      // Clear all previously set mode classes
      classTarget.classList.remove(
        'writeup-dark',
        'basicui-dark',
        'writeup-light',
        'basicui-light'
      );

      // Apply appropriate class set based on current mode
      if (isDark) {
        classTarget.classList.add('writeup-dark', 'basicui-dark');
      } else {
        classTarget.classList.add('writeup-light', 'basicui-light');
      }
    }, [isDark]);

    return <Story />;
  },
];
