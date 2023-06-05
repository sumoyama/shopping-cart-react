import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigateTo = useNavigate();

  const validateEmail = () => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  const validatePassword = () => {
    return password.length >= 6;
  }

  const validateForm =() =>{
    return !(validateEmail() && validatePassword());
  }
  
  const handleClick = () => {
   navigateTo('/home')
  }
  return (
    <main className="main-login">
      <form className="form" >
          <input
          className="input-text-style" 
          id="email"
          type="text"
          data-testid="email"
          onChange={({target: {value}})=> setEmail(value) }
          value={ email }
          placeholder="email@email.com"
          required
        />
        <input 
          id='password'
          className="input-text-style" 
          type='password'
          onChange={({target: {value}})=> setPassword(value) }
          value={ password }
          placeholder="password"
          required
        />
        <button
          type='button'
          className="button"
          disabled= {validateForm()}
          onClick={handleClick}
        >
          Entrar
        </button>
      </form>
    </main>
  )
}
