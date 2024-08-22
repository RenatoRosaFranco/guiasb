import React, { useState } from "react";
import authService from "../../services/authService";
import '../shared/SignUp.scss';

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        const result = await authService.signUp(email, password);
        if (result.success) {
            alert('Conta criada com sucesso!');
        } else {
            alert('Erro ao criar conta!');
        }
    };

    return(
        <section id="signup-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="bold">Criação de conta</h2>
                        <br />

                        <input
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value) }
                        />
                        <input
                            type='password'
                            placeholder='Senha'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button
                            className='btn btn-primary btn-lg'
                            onClick={handleSignup}>
                            Criar Conta
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUpPage;