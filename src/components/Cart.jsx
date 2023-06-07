import { useContext } from "react";
import ProductsContext from "../context/ProductsContexts";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = useContext(ProductsContext);

  const sumTotalPrice = () => {
    return cartItems.reduce((acc, curr) => {
      return (acc += curr.quantity * curr.price);
    }, 0);
  };
  return (
    <div className="container mx-auto py-8 w-1/5">
      <h2 className="text-4xl font-bold mb-4">Carrinho de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Carrinho de Compras está vazio.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div
              key={"cartItem" + index}
              className="flex flex-col justify-between border-b py-4 gap-4"
            >
              <div className="flex flex-row ">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-20 h-20 object-cover "
                />
                <div className="px-4">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600 text-lg">R${item.price}</p>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center">
                <div className="flex items-center">
                  <button
                    onClick={() => decreaseItemQuantity(item)}
                    className="w-10 bg-blue-500 text-white px-2 py-1 rounded-l"
                  >
                    -
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => increaseItemQuantity(item)}
                    className="w-10 bg-blue-500 text-white px-2 py-1 rounded-r"
                  >
                    +
                  </button>
                </div>
                <button
                  className="flex justify-center w-20  m-8 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => removeFromCart(item)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-trash-2 w-4 h-4"
                  >
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M5.878 6.061L5 19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2l-.879-12.94A2 2 0 0 0 15.155 3H8.846a2 2 0 0 0-1.977 1.061z" />
                    <path d="M10 11v6" />
                    <path d="M14 11v6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <h4 className="text-2xl font-medium text-center">
              Total: {sumTotalPrice().toFixed(2)}
            </h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
