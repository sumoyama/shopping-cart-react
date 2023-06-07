import PropTypes from "prop-types";

export default function Header({
  searchProduct,
  setSearchProduct,
  actionButtonClick,
}) {
  return (
    <div className="w-full h-28 flex bg-[#fff159] justify-evenly items-center p-1">
      <div className="flex items-center justify-center cursor-pointer ">
        <img src="/img/logo.svg" alt="carrinho" className="w-40 h-28 " />
        <span className="font-bold text-3xl text-center">
          {" "}
          Compre Bem - A melhor Loja Virtual{" "}
        </span>
      </div>

      <div className="flex border-2 rounded">
        <input
          type="text"
          className="px-4 py-2 w-80"
          placeholder="Digite um produto..."
          name="searchProduct"
          value={searchProduct}
          onChange={({ target }) => setSearchProduct(target.value)}
        />
        <button className="flex items-center justify-center px-4 border-l">
          <svg
            className="w-6 h-6 text-zinc-400"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={actionButtonClick}
          >
            <path
              d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 
              8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
            />
          </svg>
        </button>
      </div>

      <img
        src="/img/carrinho.svg"
        alt="carrinho"
        className="w-12 h-26 mr-8 cursor-pointer"
      />
    </div>
  );
}

Header.propTypes = {
  searchProduct: PropTypes.string.isRequired,
  setSearchProduct: PropTypes.func.isRequired,
  actionButtonClick: PropTypes.func.isRequired,
};
