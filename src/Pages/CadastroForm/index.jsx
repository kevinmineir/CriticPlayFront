import * as S from './styles.js'
import {useNavigate} from "react-router-dom"
import { useState } from 'react'

export function CadastroForm(){

    const navigate = useNavigate()

    const [erros,setErros] = useState({
        camposImcompletos: false,
        emailInvalido: false,
        senhaInvalida: false,
        senhaIgual: false,
        possuiConta: false
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
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        return emailValido.test(email)
    }

    async function handleCadastro(e) {
        try{
            e.preventDefault()

        const formData = new FormData(e.target)

        const data = {
            name: formData.get('username'),
            email: formData.get('email'),
            senha: formData.get('senha'),
            confirmSenha: formData.get('confirmSenha')
        }

        if (!data.name || !data.email || !data.senha || !data.confirmSenha) {
            setErros(prev => ({
                ...prev,
                camposImcompletos: true,
                emailValido: false,
                senhaInvalida: false,
                senhaIgual: false,
                possuiConta: false
            }))
            return
        }
        setErros(prev => ({...prev, camposImcompletos: false}))

        const senhaInvalida = validarSenha(data.senha)
        const emailValido = validarEmail(data.email)

        if (!emailValido) {
             setErros(prev => ({...prev, emailInvalido: true}))
        }

        if (!senhaInvalida.temMaiscula || !senhaInvalida.temMinuscula || !senhaInvalida.temNumero) {
            setErros(prev => ({...prev, senhaInvalida: true}))
        }

        if (data.senha !== data.confirmSenha) {
            setErros(prev => ({...prev, senhaIgual: true}))
        }

        if (Object.values(erros).includes(false)) {
            return
        }

        const response = await fetch("http://localhost:3000/Cadastro" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        if (response.status !== 200) {
            if (response.status === 401) {
                setErros(prev => ({...prev,possuiConta: true}))
                return
            }
            console.log(response.Error)
            return
        }
        const result = await response.json()
      
        if(response.ok) {
            localStorage.setItem('token', result.token)

            setErros(prev => ({
                ...prev,
                camposImcompletos: false,
                emailValido: false,
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
                
                <S.LogIn>Cadastro de usuário</S.LogIn>
                <div style={{fontSize: '0.8rem', marginTop: '0.5rem'}}>Crie uma conta CriticPlay</div>

                <S.FormContainer onSubmit={(e) => handleCadastro(e)} >
                    <S.FormItem type='text' placeholder='Nome de Usuário' name='username'></S.FormItem>
                    {}
                    <S.FormItem  type='text' placeholder='E-mail' name='email'></S.FormItem>
                    <S.FormItem type='password' placeholder='Senha' autoComplete='off' name='senha'></S.FormItem>
                    <S.FormItem  type='password'  placeholder='Confirmar Senha' autoComplete='off' name='confirmSenha'></S.FormItem>

                    <S.avisosContainer>
                        {erros.camposImcompletos ? <S.aviso>Todos os campos precisam estar preenchidos</S.aviso> : null}
                        {erros.emailInvalido ? <S.aviso>Formato de email inválido</S.aviso> : null}
                        {erros.senhaInvalida ? <S.aviso>A senha necessita ter, pelo menos,  1 letra maiúscula, 1 minúscula e 1 número</S.aviso> : null}
                        {erros.senhaIgual ? <S.aviso>As senhas precisam ser iguais</S.aviso> : null}
                        {erros.possuiConta ? <S.aviso>Email já possui conta CriticPlay</S.aviso> : null}
                    </S.avisosContainer>
                    <S.FormButton type='submit' >Cadastrar</S.FormButton>
                </S.FormContainer>
                
                <S.UtilitiesContainer>
                    <S.SingUp>Já possui uma conta ? <S.SingUpLink onClick={() => navigate("/Login")}> Faça Login</S.SingUpLink></S.SingUp>
                </S.UtilitiesContainer>
            </S.Container>
        </S.Wrapper>
        </>
    )
}