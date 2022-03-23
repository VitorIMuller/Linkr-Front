import { useState } from "react"
import "./Styles/reset.css"
import "./Styles/styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./Pages/Sign-in"
import UserContext from "./Contexts/userContext"
import Timeline from "./Pages/Timeline"

function App() {

    const [token, setToken] = useState('');
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser, token, setToken }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/timeline" element={<Timeline />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App