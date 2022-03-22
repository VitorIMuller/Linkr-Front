import { useState } from "react"
import "./Styles/reset.css"
import "./Styles/styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./Pages/Sign-in"
import UserContext from "./Contexts/userContext"

function App() {

    const [user, setUser] = useState()
    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App