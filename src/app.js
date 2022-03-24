<<<<<<< HEAD
import { useState } from "react"
=======
>>>>>>> 8862ae0a5cfe467c26decd3c7b0d068dd25a815c
import "./Styles/reset.css"
import "./Styles/styles.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignIn from "./Pages/Sign-in"
<<<<<<< HEAD
import AuthProvider from "./Contexts/authContext"
import Timeline from "./Pages/Timeline"

function App() {
=======
import SignUp from "./Pages/Sign-up"
import { AuthProvider } from "./Contexts/authContext"
import Timeline from "./Pages/Timeline"

function App() {

>>>>>>> 8862ae0a5cfe467c26decd3c7b0d068dd25a815c
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<SignIn />} />
<<<<<<< HEAD
=======
                    <Route path="/sign-up" element={<SignUp />} />
>>>>>>> 8862ae0a5cfe467c26decd3c7b0d068dd25a815c
                    <Route path="/timeline" element={<Timeline />} />
                </Routes>
            </AuthProvider>
        </Router>
<<<<<<< HEAD
=======

>>>>>>> 8862ae0a5cfe467c26decd3c7b0d068dd25a815c
    )
}

export default App