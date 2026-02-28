import * as S from './styles.js'
import {useNavigate} from "react-router-dom"

export function CadastroForm(){

    const navigate = useNavigate()

    return(
        <>
        
        <S.Wrapper>
            <S.Container>
                <S.FormHeader>
                    <S.CustomSpan style={{color: "white"}}>
                        Critic
                    </S.CustomSpan>
                    <S.CustomSpan style={{marginLeft:"0.2rem", padding: "0 0.5rem 0 0.5rem", backgroundColor: "orange", color: "rgb(20, 18, 18)"}}>
                        Play
                    </S.CustomSpan>
                    
                </S.FormHeader>
                
                <S.LogIn>Cadastro de usuário</S.LogIn>
                <div style={{fontSize: '0.8rem', marginTop: '0.5rem'}}>Crie uma conta CriticPlay</div>

                <S.FormContainer>
                    <S.FormItem type='text' placeholder='Nome de Usuário'></S.FormItem>
                    <S.FormItem  type='text' placeholder='E-mail'></S.FormItem>    
                    <S.FormItem type='password' placeholder='Senha'></S.FormItem>
                    <S.FormItem  type='password' placeholder='Confirmar Senha'></S.FormItem>
                    <S.FormButton>Cadastrar</S.FormButton>
                </S.FormContainer>
                
                <S.UtilitiesContainer>
                    <S.SingUp>Já possui uma conta ? <S.SingUpLink onClick={() => navigate("/Login")}> Faça Login</S.SingUpLink></S.SingUp>
                </S.UtilitiesContainer>
            </S.Container>
        </S.Wrapper>
        </>
    )
}