import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Title, SubTitle, TopBar, Container, LowerBar, StyledInput, Form, StyledButton, StyledLink } from "./style"
import signIn from "../../Services/signIn"
import UserContext from "../../Contexts/userContext"

function SignIn() {
    const { setUser } = useContext(UserContext)
    const [formData, setFormData] = useState({
        email: "",
        senha: ""
    })
    const navigate = useNavigate

    function handleInputChange(e) {
        formData[e.target.name] = e.target.value;
        setFormData({ ...formData })
    }

    function handleSignIn(e) {
        e.preventDefault();
        if (formData.email.length === 0 || formData.senha.length === 0) {
            alert("Favor Preencher os campos")
            window.location.reload()
        }
        const promise = signIn(formData)
        promise.then((response) => {
            setUser({ ...formData })
            navigate("/timeline")
        })
        promise.catch((error) => {
            alert(error);
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
                        placeholder="Email"
                        type="email"
                    />
                    <StyledInput
                        onChange={handleInputChange}
                        value={formData.password}
                        name="password"
                        placeholder="Senha"
                        type="password"
                    />
                    <StyledButton>Log In</StyledButton>
                    <StyledLink to="/sign-up">First time? Create an account!</StyledLink>
                </Form>
            </LowerBar>
        </Container>
    )
}
export default SignIn



