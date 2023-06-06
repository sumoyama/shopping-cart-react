export default function Header() {
  return (
    <div className="w-full h-28 flex bg-[#fff159] justify-evenly items-center p-1">
      <div className="flex items-center justify-center cursor-pointer ">
        <img 
          src="/img/logo.svg" 
          alt="carrinho" className="w-40 h-28 " 
          />
          <span 
            className="font-bold text-3xl text-center"
          > Compre Bem - A melhor Loja Virtual </span>
          </div>
          
        <input 
          type="text"
          name='inputProduct'
          value=''
          className="w-1/4 h-12 rounded-lg p-4"
          placeholder="Digite um produto"
        />
        <img 
        src="/img/carrinho.svg" 
        alt="carrinho" 
        className="w-12 h-26 mr-8 cursor-pointer" 
        />

    </div>
  )
}
