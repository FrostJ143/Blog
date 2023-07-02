import { useRef, useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
    const email = useRef();
    const username = useRef();
    const password = useRef();
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/auth/register", {
                email: email.current.value,
                username: email.current.value,
                password: password.current.value,
            });
            res.data && navigate("/login");
        } catch (error) {
            setError(true);
        }
    };

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" placeholder="Enter your email..." ref={email} />
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Enter your username..." ref={username} />
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter your password..." ref={password} />
                <button className="registerButton">Registerr</button>
            </form>
            <button className="registerLoginButton" type="submit">
                <Link to="/login">Login</Link>
            </button>
            {error && <span style={{ color: "red", marginTop: "8px" }}>Something went wrong!</span>}
        </div>
    );
}

export default Register;
