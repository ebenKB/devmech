import React,{ useState} from 'react';
import ThemeContext from './themeContext';

const ThemeState = (props) => {
  const [theme, setTheme] = useState({
    app_theme : 'light_theme',
  });

  return (
    <ThemeContext.Provider
      value = {[theme, setTheme]}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeState;
