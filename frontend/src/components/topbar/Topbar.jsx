import "./topbar.css";
import {Link} from "react-router-dom"

function Topbar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-pinterest"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/settings">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/write">WRITE</Link>
                    </li>
                    {user && (
                        <li className="topListItem">
                            <Link to="/login">LOGOUT</Link>
                        </li>
                    )}
                </ul>
            </div>
            <div className="topRight">
                {user   
                ? (
                    <img src="/img/gwen.jpg" alt="" className="profileAvatar" />
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link to="/login">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                            <Link to="/register">REGISTER</Link>
                        </li>
                    </ul>
                )}
                <i class="fa-solid fa-magnifying-glass topSearchIcon"></i>
            </div>
        </div>
    );
}

export default Topbar;
