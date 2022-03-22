import { useState } from "react"
import "./Styles/reset.css"
import "./Styles/styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./Pages/Sign-in"
import UserContext from "./Contexts/userContext"

function App() {

    const [user, setUser] = useState()
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/timeline" element={<Timeline />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App