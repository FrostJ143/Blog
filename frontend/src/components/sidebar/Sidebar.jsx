import { useContext, useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Context from "../../context/Context";

function Sidebar() {
    const [cats, setCats] = useState([]);
    const { user } = useContext(Context);

    useEffect(() => {
        const fetchCats = async () => {
            const res = await axios.get("/cats");
            setCats(res.data);
        };
        fetchCats();
    }, []);

    const PF = process.env.REACT_APP_PF;

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImg" src={user.profilePic ? PF + user.profilePic : PF + "gwen.jpg"} alt="" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                    commodo nulla facilisi nullam vehicula ipsum a. Semper eget duis at tellus at urna condimentum. Nam at lectus urna duis convallis
                    convallis tellus id interdum. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link key={c._id} to={`/?cat=${c.name}`}>
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
