import Proptypes from 'prop-types';

export default function Header({productName, setProductName}) {
  return (
    <header>
      <img src="" alt="" />
      <input
          className="input-text-style" 
          id="email"
          type="text"
          data-testid="email"
          onChange={({target: {value}})=> setProductName(value) }
          value={ productName }
          placeholder="Digite um produto"
          required
        />

    </header>
      
  )
}

Header.propTypes = {
  productName: Proptypes.string.isRequired,
  setProductName: Proptypes.func.isRequired,
}