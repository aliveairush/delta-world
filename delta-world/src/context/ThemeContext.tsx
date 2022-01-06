import React, { createContext, ReactNode, useState } from 'react';

export interface IThemeContext {
  isDarkThemeOn: boolean,
  toggleTheme: any,
}

export const ThemeContext = createContext({} as IThemeContext);

interface Props {
  children: ReactNode
}

const ThemeContextProvider = ({ children }: Props) => {
  const prevState = localStorage.getItem('isDarkThemeOn') === 'true';

  const [isDarkThemeOn, setIsDarkThemeOn] = useState(prevState);

  const toggleTheme = () => {
    localStorage.setItem('isDarkThemeOn', isDarkThemeOn ? 'false' : 'true');
    setIsDarkThemeOn(!isDarkThemeOn);
  };

  return (
    <ThemeContext.Provider value={{ isDarkThemeOn, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
