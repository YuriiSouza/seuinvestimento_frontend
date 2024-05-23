"use client";

import { useState } from 'react';
import axios from 'axios';
import '@/app/auth/login/login.css';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const LoginComponent = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [alert, setAlert] = useState({ open: false, message: '', severity: 'error' });

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
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Erro ao logar', error);
      setAlert({ open: true, message: 'Erro ao logar. Por favor, tente novamente.', severity: 'error' });
    }
  };

  const handleClose = () => {
    setAlert({ ...alert, open: false });
  };

  return (
    <>
      <header>
        <img src='/images/logo.png' alt='Logo'/>
      </header>
      <main className="container">
        <h2>Acesse</h2>
        <div className="link">
          Ou
          <a href="/signup"> crie sua conta </a>
        </div>
        <Snackbar
          open={alert.open}
          autoHideDuration={5000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={alert.severity} sx={{ width: '100%' }}>
            {alert.message}
          </Alert>
        </Snackbar>
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
            <a href="/forgotpassword"> Esqueceu sua senha? </a>
          </div>
          <button id="login" type="submit">LOGIN</button>
        </form>
      </main>
    </>
  );
};

export default LoginComponent;
