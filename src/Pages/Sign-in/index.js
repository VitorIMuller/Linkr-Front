<<<<<<< HEAD
import { useContext, useState } from "react"
=======
import { useState } from "react"
>>>>>>> 8862ae0a5cfe467c26decd3c7b0d068dd25a815c
import { useNavigate } from "react-router-dom"
import { CenterLoader, Title, SubTitle, TopBar, Container, LowerBar, StyledInput, Form, StyledButton, StyledLink } from "./style"
import signIn from "../../Services/signIn"
import Loading from "../../Assets/Loading"
import useAuth from "../../Hooks/useAuth"

function SignIn() {
    const { setUser } = useAuth();
    const [button, setButton] = useState(true);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();

    function handleInputChange(e) {
        formData[e.target.name] = e.target.value;
        setFormData({ ...formData })
    }

    function handleSignIn(e) {
        e.preventDefault();
        if (formData.email.length === 0 || formData.password.length === 0) {
            alert("Favor Preencher os campos")
            window.location.reload()
        }
<<<<<<< HEAD
=======
        setButton(false)
>>>>>>> 8862ae0a5cfe467c26decd3c7b0d068dd25a815c
        const promise = signIn(formData)
        promise.then((response) => {
            setUser(response.data)
            navigate("/timeline")
        })
        promise.catch((error) => {
<<<<<<< HEAD
            alert(`${error} Email ou Senha Incorretos`);
=======
            if (error.message === "Request failed with status code 404") {
                alert("Email/senha incorretos ou não existem")
            }
            window.location.reload()
>>>>>>> 8862ae0a5cfe467c26decd3c7b0d068dd25a815c
        });
    }
    return (
        <Container>
            <TopBar>
                <Title>linkr</Title>
                <SubTitle>save, share and discover<br />
                    the best links on the web</SubTitle>
            </TopBar>
            <LowerBar>
                <Form onSubmit={handleSignIn}>
                    <StyledInput
                        onChange={handleInputChange}
                        value={formData.email}
                        name="email"
<<<<<<< HEAD
                        placeholder="Email"
=======
                        placeholder="e-mail"
>>>>>>> 8862ae0a5cfe467c26decd3c7b0d068dd25a815c
                        type="email"
                    />
                    <StyledInput
                        onChange={handleInputChange}
                        value={formData.password}
                        name="password"
<<<<<<< HEAD
                        placeholder="Senha"
                        type="password"
                    />
                    {button ?
                        <StyledButton onClick={() => setButton(false)}>Log In</StyledButton>
=======
                        placeholder="password"
                        type="password"
                    />
                    {button ?
                        <StyledButton>Log In</StyledButton>
>>>>>>> 8862ae0a5cfe467c26decd3c7b0d068dd25a815c
                        :
                        <StyledButton Loading={true}><CenterLoader><Loading height={35} width={43} /></CenterLoader></StyledButton>
                    }
                    <StyledLink to="/sign-up">First time? Create an account!</StyledLink>
                </Form>
            </LowerBar>
        </Container>
    )
}
export default SignIn



