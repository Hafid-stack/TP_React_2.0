import React, { createContext, useState } from 'react';
import ProductList from './components/ProductList';
import ProductSearch from './components/ProductSearch';
import ThemeToggle from './components/ThemeToggle';
import LanguageSelector from './components/LanguageSelector'; 

// Create the ThemeContext
export const ThemeContext = createContext(); 
// Create the LanguageContext
export const LanguageContext = createContext();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [language, setLanguage] = useState('en'); 

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage }}> 
        <div className={`container ${isDarkTheme ? 'bg-dark text-light' : 'bg-light'}`}>
          <header className="my-4">
            <h1 className="text-center">Catalogue de Produits</h1>
            <div className="d-flex justify-content-end gap-2">
              <ThemeToggle />
              <LanguageSelector /> 
            </div>
          </header>
          <main>
            <ProductSearch />
            <ProductList />
          </main>
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;