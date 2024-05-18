"use client";

import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cpf: '',
        password: '',
        repeatPassword: '',
        agreeTerms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.repeatPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post('/api/signup', formData);
            console.log('Cadastro bem-sucedido!', response);
        } catch (error) {
            alert("Erro ao cadastrar:");
            console.log(error);
        }
    };

    return (
        <div className="body">
            <img id="image" src="/images/logo.png" alt="logo" />

            <main className="container">
                <h2>Cadastre-se</h2>

                <div className="text_with_link">
                    <p>Já possui conta?</p>
                    <a href="/">
                        Faça login
                    </a>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <div className="container">
                            <input 
                                type="text" 
                                name="name" 
                                required 
                                value={formData.name}
                                onChange={handleChange} 
                                placeholder="Nome:" 
                            />
                        </div>
                    </div>

                    <div className="input-field">
                        <div className="container">
                            <input 
                                type="text" 
                                name="cpf" 
                                required 
                                value={formData.cpf}
                                onChange={handleChange} 
                                placeholder="CPF:" 
                            />
                        </div>
                    </div>

                    <div className="input-field">
                        <div className="container">
                            <input 
                                type="email" 
                                name="email" 
                                required 
                                value={formData.email}
                                onChange={handleChange} 
                                placeholder="E-mail:" 
                            />
                        </div>
                    </div>

                    <div className="input-field">
                        <div className="container">
                            <input 
                                type="password" 
                                name="password" 
                                required 
                                value={formData.password}
                                onChange={handleChange} 
                                placeholder="Senha:" 
                            />
                        </div>  
                    </div>

                    <div className="input-field">
                        <div className="container">
                            <input 
                                type="password" 
                                name="repeatPassword" 
                                required 
                                value={formData.repeatPassword}
                                onChange={handleChange} 
                                placeholder="Repita sua senha:" 
                            />
                        </div>
                    </div>

                    <div className="text_with_link">
                        <input 
                            type="checkbox" 
                            name="agreeTerms" 
                            required 
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                        />
                        <p>Concordo com os</p>
                        <a href="/terms">
                            termos de privacidade
                        </a>
                        <p>.</p>
                    </div>
                    
                    <div className="create_account">
                        <button id="button_create_account" type="submit">
                            Criar conta
                        </button>
                    </div>
                </form>
            </main>

            <button id='back' onClick={() => router.push('/')}>
                <img src="/svg/backbutton.svg"/>
                voltar
            </button>
        </div>
    );
};

export default Signup;
