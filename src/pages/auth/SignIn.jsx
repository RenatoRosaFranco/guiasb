import React, { useState } from 'react';
import authService from '../../services/authService';
import '../shared/SignIn.scss';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
       const result = await authService.signIn(email, password);
       if (result.success) {
         alert('Login realizado com sucesso!');
       } else {
         alert('Erro ao fazer login!');
       }
    }

    return(
        <>
            <h2>Login</h2>
            <input
                type='email'
                placeholder='E-mail'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type='password'
                placeholder='Senha'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <button
                onClick={handleLogin}
                className='btn btn-primary btn-lg'
                type='submit'>
                Entrar
            </button>
        </>
    )
}

export default SignIn;