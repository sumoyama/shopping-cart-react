import { useContext } from "react";
import ProductsContext from "../context/ProductsContexts";

const ShoppingCart = () => {
  const {cartItems} = useContext(ProductsContext);
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover mr-4" />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;