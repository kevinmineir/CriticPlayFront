import * as S from './styles.js'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'

export function LoginForm(){
    
    const navigate = useNavigate()

    const [erros,setErros] = useState({
            camposImcompletos: false,
            emailInvalido: false,
            senhaInvalida: false,
        })

    function validarSenha(senha) {
        const temMaiscula = /[A-Z]/.test(senha)
        const temMinuscula = /[a-z]/.test(senha)
        const temNumero = /[0-9]/.test(senha)

        return {
            temMaiscula,
            temMinuscula,
            temNumero
        }
    }

    function validarEmail(email) {
        const emailInvalido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        return emailInvalido.test(email)
    }

    async function handleLogin(e) {
        try{
            e.preventDefault()

            const formData = new FormData(e.target)

            const data = {
                email: formData.get('email'),
                senha: formData.get('senha')
            }

            if (!data.email || !data.senha) {
                setErros(prev => ({
                    ...prev,
                    camposImcompletos: true,
                    emailInvalido: false,
                    senhaInvalida: false
                 }))
                 
                return
            }

            const senhaInvalida = validarSenha(data.senha)
            const emailInvalido = validarEmail(data.email)

            if (!emailInvalido) {
                setErros(prev => ({...prev, emailInvalido: true}))
            }

            if (!senhaInvalida.temMaiscula || !senhaInvalida.temMinuscula || !senhaInvalida.temNumero) {
                setErros(prev => ({...prev, senhaInvalida: true}))
            }

            if (Object.values(erros).includes(false)) {
                return
            }

            const response = await fetch('http://localhost:3000/Login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            const result = await response.json()

            if(response.ok) {
                localStorage.setItem('token', result.token)

                setErros(prev => ({
                    ...prev,
                    camposImcompletos: false,
                    emailInvalido: false,
                    senhaInvalida: false,
                    senhaIgual: false,
                    possuiConta: false
                }))

                navigate("/Home")
                return
            }

            console.log(response)

        }catch(err){
            console.log(err)
        }
    }
    return(
        <>
        
        <S.Wrapper>
            <S.Container>
                <S.FormHeader>
                    <S.CustomSpan style={{padding: "0 0.5rem 0.2rem 0.5rem", backgroundColor: "#FF2D2D"}}>
                            Critic
                    </S.CustomSpan>
                    <S.CustomSpan style={{paddingLeft: "0.2rem" ,color: "#FF2D2D"}}>
                            Zone
                    </S.CustomSpan>
                </S.FormHeader>
                
                <S.LogIn>Login de usuário</S.LogIn>
                <div style={{fontSize: '0.8rem', marginTop: '0.5rem'}}>Faça login em sua conta CriticPlay</div>

                <S.FormContainer onSubmit={(e) => handleLogin(e)}>    
                    <S.FormItem name='email' type='text' placeholder='E-mail'></S.FormItem>
                    <S.FormItem name='senha' autoComplete='off' type='password' placeholder='Senha CriticZone'></S.FormItem>
                    <S.FormButton type='submit'>Login</S.FormButton>
                    
                    <S.avisosContainer>
                        {erros.camposImcompletos ? <S.aviso>Todos os campos precisam estar preenchidos</S.aviso> : null}
                        {erros.emailInvalido || erros.senhaInvalida ? <S.aviso>Credenciais Inválidas</S.aviso> : null}
                    </S.avisosContainer>
                </S.FormContainer>
                
                <S.UtilitiesContainer>
                    <S.SingUp>Não tem uma conta ? <S.SingUpLink onClick={() => navigate("/Cadastro")}> Cadastre-se</S.SingUpLink></S.SingUp>
                    <S.SingUp>Esqueceu a Senha ? <S.SingUpLink> Redefinir Senha</S.SingUpLink></S.SingUp>
                </S.UtilitiesContainer>
            </S.Container>
        </S.Wrapper>
        </>
    )
}