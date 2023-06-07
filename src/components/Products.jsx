import PropTypes from "prop-types";
import { useContext } from "react";
import ProductsContext from "../context/ProductsContexts";

export default function Products({ listProducts }) {
  const { addToCart } = useContext(ProductsContext);
  const mapToPageProduct = (product) => {
    const { title: name, thumbnail: image, price } = product;
    return (
      <>
        <div className="flex flex-col justify-between m-auto">
          <img src={image} alt={name} className="mb-4 w-40 h-40 m-auto" />
          <h3 className="sm:text-xm md:text-sm lg:text-lg font-semibold">
            {name}
          </h3>
          <p className="text-gray-600 mb-4">R${price}</p>
        </div>

        <button
          className="mt-auto px-4 py-2 bg-zinc-500 text-white rounded hover:bg-zinc-600"
          onClick={() => addToCart(name, image, price)}
        >
          Adicionar ao carrinho
        </button>
      </>
    );
  };

  return (
    <div className="container mx-auto p-8 w-4/5 ">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {listProducts.map((item, index) => (
          <div
            key={"item" + index}
            className=" flex flex-col justify-between bg-white shadow rounded-lg p-4 "
          >
            {mapToPageProduct(item)}
          </div>
        ))}
      </div>
    </div>
  );
}

Products.propTypes = {
  listProducts: PropTypes.array.isRequired,
};
