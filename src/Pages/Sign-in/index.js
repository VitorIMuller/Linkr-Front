import { useState } from "react"
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
        setButton(false)
        const promise = signIn(formData)
        promise.then((response) => {
            setUser(response.data)
            navigate("/timeline")
        })
        promise.catch((error) => {
            if (error.message === "Request failed with status code 404") {
                alert("Email/senha incorretos ou não existem")
            }
            window.location.reload()
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
                        placeholder="e-mail"
                        type="email"
                    />
                    <StyledInput
                        onChange={handleInputChange}
                        value={formData.password}
                        name="password"
                        placeholder="password"
                        type="password"
                    />
                    {button ?
                        <StyledButton>Log In</StyledButton>
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



