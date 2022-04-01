import "./Styles/reset.css"
import "./Styles/styles.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { SignIn, SignUp, Timeline, UserPage, HashtagPage } from "./Pages"
import { AuthProvider } from "./Contexts/authContext"

function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/user/:userId" element={<UserPage />} />
                    <Route path="/hashtag/:hashtag" element={<HashtagPage />} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default App