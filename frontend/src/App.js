import { useContext } from "react";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Context from "./context/Context";

function App() {
    const { user } = useContext(Context);
    return (
        <div className="App">
            <BrowserRouter>
                <Topbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={user ? <Navigate replace to="/" /> : <Login />} />
                    <Route exact path="/register" element={user ? <Navigate replace to="/" /> : <Register />} />
                    <Route exact path="/write" element={!user ? <Navigate replace to="/login" /> : <Write />} />
                    <Route exact path="/settings" element={!user ? <Navigate replace to="/login" /> : <Settings />} />
                    <Route exact path="/posts/:postID" element={<Single />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
