import { useContext } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import Context from "../../context/Context";
import { Logout } from "../../context/Actions";

function Topbar() {
    const { user, dispatch } = useContext(Context);
    const handleLogout = () => {
        localStorage.removeItem("user");
        dispatch(Logout());
    };

    const PF = process.env.REACT_APP_PF;
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
                    <Link to="/">
                        <li className="topListItem">HOME</li>
                    </Link>
                    <Link to="/settings">
                        <li className="topListItem">ABOUT</li>
                    </Link>
                    <Link to="/">
                        <li className="topListItem">CONTACT</li>
                    </Link>
                    <Link to="/write">
                        <li className="topListItem">WRITE</li>
                    </Link>
                    {user && (
                        <li className="topListItem" onClick={handleLogout}>
                            <Link to="/login">LOGOUT</Link>
                        </li>
                    )}
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link to="/settings">
                        <img src={!user.profilePic ? PF + "gwen.jpg" : PF + user.profilePic} alt="" className="profileAvatar" />
                    </Link>
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
