import { useMemo } from "react";
import useProducts from "../hooks/useProducts";
import ProductsContext from "./ProductsContexts";
import PropTypes from 'prop-types';

function ProductsProvider({ children }) {
  const products = useProducts();
  const values = useMemo(() => ({
    ...products,
  }), [products]);
  return (
    <ProductsContext.Provider value={ values }>
      {children}
    </ProductsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
}

export default ProductsProvider;
