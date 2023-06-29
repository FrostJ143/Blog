import "./register.css"
import {Link} from "react-router-dom"

function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Email</label>
                <input type="email" placeholder="Enter your email..."/>
                <label htmlFor="">Username</label>
                <input type="email" placeholder="Enter your username..."/>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter your password..."/>
                <button className="registerButton">Registerr</button>
            </form>
            <button className="registerLoginButton">
                <Link to="/login">Login</Link>
            </button>
        </div>
    )
}

export default Register;