import { ITheme } from 'types';

export const toggleTheme = (theme: ITheme) => {
  const root = document.body;
  root.style.setProperty('--theme', `var(--theme-${theme})`);
};
