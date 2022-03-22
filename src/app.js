import { useState } from "react"
import "./Styles/reset.css"
import "./Styles/styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./Pages/Sign-in"
import UserContext from "./Contexts/userContext"

function App() {

    const [user, setUser] = useState()
    return (
<<<<<<< HEAD
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/timeline" element={<Timeline />} />
            </Routes>
        </BrowserRouter>
=======
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
>>>>>>> 25c81256256621cf5f3255645e6d03a5c55db906
    )
}

export default App