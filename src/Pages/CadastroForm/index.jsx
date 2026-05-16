import * as S from './styles.js'
import {useNavigate} from "react-router-dom"
import { useState } from 'react'

export function CadastroForm(){

    const navigate = useNavigate()

    const [possuiConta,setPossuiConta] = useState(false)
    const [senhaDiferente,setSenhaDiferente] = useState(true)
    const [camposPreenchidos, setCamposPreenchidos] = useState(true)
    const [requisitosSenha, setRequisitosSenha] = useState(true)

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
        
        const senhaValida = validarSenha(data.senha)

        if (!data.name || !data.email || !data.senha || !data.confirmSenha) {
            setCamposPreenchidos(false)
            return
        }

        if (!senhaValida.temMaiscula || !senhaValida.temMinuscula || !senhaValida.temNumero) {
            setRequisitosSenha(false)
            return
        }

        if (data.senha !== data.confirmSenha) {
            setSenhaDiferente(false)
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
                setPossuiConta(prevPossuiConta => !prevPossuiConta)
                return
            }
            console.log(response.Error)
            return
        }
        const result = await response.json()
      
        if(response.ok) {
            localStorage.setItem('token', result.token)
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
                    {possuiConta === true ? <S.aviso>Email já possui conta CriticPlay</S.aviso> : null}
                    {senhaDiferente === false ? <S.aviso>As senhas precisam ser iguais</S.aviso> : null}
                    {camposPreenchidos === false ? <S.aviso>Todos os campos precisam estar preenchidos</S.aviso> : null}
                    {requisitosSenha === false ? <S.aviso>A senha Necessita ter 1 letra maiúscula, 1 minúscula e 1 número</S.aviso> : null}
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