import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import { useLocation } from "react-router";
import "./home.css";

function Home() {
    const [posts, setPosts] = useState([]);
    const location = useLocation();
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + location.search);
            setPosts(res.data);
        };
        fetchPosts();
    }, [location]);

    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    );
}

export default Home;
