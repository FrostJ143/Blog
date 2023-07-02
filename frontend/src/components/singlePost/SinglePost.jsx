import { useContext, useEffect, useRef, useState } from "react";
import "./singlePost.css";
import { useLocation } from "react-router";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Context from "../../context/Context";

function SinglePost() {
    const [post, setPost] = useState({});
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);
    const { user } = useContext(Context);
    const location = useLocation();
    const postID = location.pathname.split("/")[2];
    const PF = process.env.REACT_APP_PF;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`/posts/${postID}`);
            setTitle(res.data.title);
            setDesc(res.data.desc);
            setPost(res.data);
        };
        fetchPost();
    }, [postID]);

    const handleDelete = async () => {
        try {
            await axios.delete("/posts/" + post._id, { data: { username: user.username } });
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdate = async () => {
        try {
            await axios.put("/posts/" + post._id, { title, desc, username: user.username });
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    console.log(title);

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post?.photo && <img src={PF + post.photo} alt="" className="singlePostImg" />}
                {updateMode ? (
                    <input className="singlePostTitleInput" onChange={(e) => setTitle(e.target.value)} value={title} autoFocus={true} />
                ) : (
                    <h1 className="singlePostTitle">
                        {post?.title}
                        {user.username === post.username && (
                            <div className="singlePostEdit">
                                <i className="singlePostIcon fa-regular fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>
                                <i className="singlePostIcon fa-regular fa-trash-can" onClick={handleDelete}></i>
                            </div>
                        )}
                    </h1>
                )}
                <div className="singlePostInfo">
                    <Link to={`/?user=${post.username}`}>
                        <span className="singlePostAuthor">
                            Author: <b>{post?.username}</b>
                        </span>
                    </Link>
                    <span className="singlePostDate">{new Date(post?.createdAt).toDateString()}</span>
                </div>
                {updateMode ? (
                    <textarea className="singlePostDescInput" onChange={(e) => setDesc(e.target.value)} value={desc} />
                ) : (
                    <p className="singlePostDesc">{post?.desc}</p>
                )}
            </div>
            {updateMode && (
                <button className="updateButton" onClick={handleUpdate}>
                    Update
                </button>
            )}
        </div>
    );
}

export default SinglePost;
