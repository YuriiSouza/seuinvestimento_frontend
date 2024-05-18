"use client";

import { useState } from 'react';
import axios from 'axios';
import './login.css'

const LoginComponent = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', formData);
      console.log('Login bem-sucedido', response.data);
      
      history.push('/dashboard');
    } catch (error) {
      console.error('Erro ao logar', error);
      alert('Erro ao logar.');
    }
  };

  return (
    <>
      <header>
      <img src='/images/logo.png'/>
      </header>
      <main className="container">
        <h2>Acesse</h2>
        <div className="link">
          Ou
          <a href="/signup">
            crie sua conta
          </a>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <div className="container1">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                id="email"
                placeholder="E-mail"
              />
            </div>
          </div>
          <div className="input-field">
            <div className="container1">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                id="password"
                placeholder="Senha"
              />
            </div>
          </div>
          <div className="recuperacao">
            <a href="/forgotpassword">
              Esqueceu sua senha?
            </a>
          </div>
          <button id="login" type="submit">LOGIN</button>
        </form>
      </main>
    </>
  );
};

export default LoginComponent;
