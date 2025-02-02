import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import useProductSearch from '../hooks/useProductSearch';
import React, { useState, useEffect } from 'react';
const ProductList = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  // TODO: Exercice 2.1 - Utiliser le LanguageContext pour les traductions
  const [shouldRefetch, setShouldRefetch] = useState(false);

  useEffect(() => {
    if (shouldRefetch) {
      // Simulate API call to refetch products
      fetch('https://api.daaif.net/products?delay=1000')
        .then(response => response.json())
        .then(data => setProducts(data.products))
        .catch(err => setError(err.message))
        .finally(() => setShouldRefetch(false));
    }
  }, [shouldRefetch]);
  const handleReload = () => {
    setShouldRefetch(true);
  };




  const {
    products,
    loading,
    error,
    // TODO: Exercice 4.1 - Récupérer la fonction de rechargement
    // TODO: Exercice 4.2 - Récupérer les fonctions et états de pagination
  } = useProductSearch();

  if (loading) return (
    <div className="text-center my-4">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Chargement...</span>
      </div>
    </div>
  );

  if (error) return (
    <div className="alert alert-danger" role="alert">
      Erreur: {error}
    </div>
  );

  return (

    <div>
      <div>
        <button className="btn btn-primary mb-4" onClick={handleReload}>
          Reload Products
        </button>

      </div>

      {/* TODO: Exercice 4.1 - Ajouter le bouton de rechargement */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products.map(product => (
          <div key={product.id} className="col">
            <div className={`card h-100 ${isDarkTheme ? 'bg-dark text-light' : ''}`}>
              {product.thumbnail && (
                <img
                  src={product.thumbnail}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <strong>Prix: </strong>
                  {product.price}€
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* TODO: Exercice 4.2 - Ajouter les contrôles de pagination */}
      {/* Exemple de structure pour la pagination :
      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button className="page-link" onClick={previousPage}>
              Précédent
            </button>
          </li>
          <li className="page-item">
            <span className="page-link">
              Page {currentPage} sur {totalPages}
            </span>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={nextPage}>
              Suivant
            </button>
          </li>
        </ul>
      </nav>
      */}
    </div>
  );
};

export default ProductList;