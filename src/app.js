import "./Styles/reset.css"
import "./Styles/styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./Pages/Sign-in"

function app() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/timeline" element={<Timeline />} />
            </Routes>
        </BrowserRouter>
    )
}

export default app