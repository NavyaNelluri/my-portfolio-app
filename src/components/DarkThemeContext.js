// DarkThemeContext.js
import React, { createContext, useContext, useState } from "react";

const DarkThemeContext = createContext();

// DarkThemeContext.js
export const DarkThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
  
    const toggleDarkTheme = () => {
      setIsDarkTheme((prevTheme) => !prevTheme);
    };
  
    return (
      <DarkThemeContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
        {children}
      </DarkThemeContext.Provider>
    );
  };
  
  export const useDarkTheme = () => {
    const context = useContext(DarkThemeContext);
    if (!context) {
      throw new Error("useDarkTheme must be used within a DarkThemeProvider");
    }
    return context;
  };
  