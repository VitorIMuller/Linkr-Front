import { useState } from "react"
import "./Styles/reset.css"
import "./Styles/styles.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignIn from "./Pages/Sign-in"
import UserContext from "./Contexts/userContext"
import AuthProvider from "./Contexts/authContext"

function App() {

    const [user, setUser] = useState()
    return (
        <UserContext.Provider value={{ user, setUser }}>
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<SignIn />} />
                    </Routes>
                </AuthProvider>
            </Router>
        </UserContext.Provider>
    )
}

export default App