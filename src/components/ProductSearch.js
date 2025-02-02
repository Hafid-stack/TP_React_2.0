import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../App';
import { useDebounce } from '../hooks/useDebounce';
import { LanguageContext } from '../App';

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { isDarkTheme } = useContext(ThemeContext);
  const debounceSearch=useDebounce(searchTerm);
  const { language } = useContext(LanguageContext);
  // TODO: Exercice 2.1 - Utiliser le LanguageContext
  
  // TODO: Exercice 1.2 - Utiliser le hook useDebounce
  useEffect(() => {
    // Simulate fetching products based on the debounced search term
    console.log('Fetching products for search term:', debounceSearch);
  }, [debounceSearch]);//dependcie
  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={`Search products in ${language}`}
        className={`form-control ${isDarkTheme ? 'bg-dark text-light' : ''}`}
      />
    </div>
  );
};

export default ProductSearch;