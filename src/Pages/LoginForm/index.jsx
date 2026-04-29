import * as S from './styles.js'
import {useNavigate} from 'react-router-dom'

export function LoginForm(){
    
    const navigate = useNavigate()

    async function handleLogin(e) {
        e.preventDefault()

        const formData = new FormData(e.target)

        const data = {
            email: formData.get('email'),
            senha: formData.get('senha')
        }

        const response = await fetch('http://localhost:3000/Login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const result = await response.json()

        localStorage.setItem('token',result.token)

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

                <S.FormContainer onSubmit={() => handleLogin()}>    
                    <S.FormItem name='email' type='text' placeholder='E-mail'></S.FormItem>
                    <S.FormItem name='senha' type='password' placeholder='Senha CriticZone'></S.FormItem>
                    <S.FormButton type='submit'>Login</S.FormButton>
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