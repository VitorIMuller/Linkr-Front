import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CenterLoader, Title, SubTitle, TopBar, LowerBar, StyledInput, Container, Form, StyledButton, StyledLink } from "../Sign-in/style"
import Loading from "../../Assets/Loading"
import api from "../../Services/api"

function SignUp() {
    const [button, setButton] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        image: ""
    })
    const navigate = useNavigate();

    function handleInputChange(e) {
        formData[e.target.name] = e.target.value;
        setFormData({ ...formData })
    }

    function handleSignUp(e) {
        e.preventDefault();
        const { email, password, name, image } = formData;
        if (email.length === 0 || password.length === 0 || name.length === 0 || image.length === 0) {
            alert("Favor preencher todos os campos");
            setButton(true);
        } else {
            const promise = api.signUp(formData);
            setButton(false)
            promise.then(() => {
                navigate("/");
            });
            promise.catch((error) => {
                if (error.message === "Request failed with status code 404") {
                    alert("Email/senha incorretos ou não existem")
                } else if (error.message === "Request failed with status code 409") {
                    alert("Já existe uma conta cadastrada nesse email!")
                }
                setButton(true)
            });
        }
    }
    return (
        <Container>
            <TopBar>
                <Title>linkr</Title>
                <SubTitle>save, share and discover<br />
                    the best links on the web</SubTitle>
            </TopBar>
            <LowerBar>
                <Form onSubmit={handleSignUp}>
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
                    <StyledInput
                        onChange={handleInputChange}
                        value={formData.name}
                        name="name"
                        placeholder="username"
                        type="text"
                    />
                    <StyledInput
                        onChange={handleInputChange}
                        value={formData.image}
                        name="image"
                        placeholder="picture url"
                        type="url"
                    />
                    {button ?
                        <StyledButton>Sign Up</StyledButton>
                        :
                        <StyledButton Loading={true}><CenterLoader><Loading height={35} width={43} /></CenterLoader></StyledButton>
                    }
                    <StyledLink to="/">Switch back to log in</StyledLink>
                </Form>
            </LowerBar>
        </Container>

    )
}
export default SignUp