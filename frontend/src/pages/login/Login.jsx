import { useRef, useState, useContext } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Context from "../../context/Context";
import { LoginFail, LoginStart, LoginSuccess } from "../../context/Actions";

function Login() {
    const email = useRef();
    const password = useRef();
    const [error, setError] = useState(false);

    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        dispatch(LoginStart());
        try {
            const res = await axios.post("/auth/login", { email: email.current.value, password: password.current.value });
            console.log(res.data);
            dispatch(LoginSuccess(res.data));
        } catch (error) {
            setError(true);
            dispatch(LoginFail());
        }
    };

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" placeholder="Enter your email..." ref={email} />
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter your password..." ref={password} />
                <button className="loginButton" disabled={isFetching}>
                    Login
                </button>
            </form>
            <button className="loginRegisterButton" type="submit">
                <Link to="/register">Register</Link>
            </button>
            {error && <span style={{ color: "red", marginTop: "8px" }}>Something went wrong!</span>}
        </div>
    );
}

export default Login;
