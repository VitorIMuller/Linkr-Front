import "./Styles/reset.css"
import "./Styles/styles.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignIn from "./Pages/Sign-in"
import SignUp from "./Pages/Sign-up"
import { AuthProvider } from "./Contexts/authContext"
import Timeline from "./Pages/Timeline"
import Hashtag from "./Pages/Hashtag"
import UserPage from "./Pages/UserPage"
import HashtagPage from "./Pages/Hashtag"

function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/hashtag" element={<Hashtag />} />
                    <Route path="/user/:userId" element={<UserPage />} />
                    <Route path="/hashtag/:hashtag" element={<HashtagPage />} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default App