import "./post.css";
import { Link } from "react-router-dom";

function Post({ post }) {
    const PF = process.env.REACT_APP_PF;
    return (
        <div className="post">
            <Link to={`posts/${post._id}`}>
                {<img className="postImg" src={post.photo ? PF + post.photo : PF + "milesXgwen.jpg"} alt="" />}
                <div className="postInfo">
                    <div className="postCats">
                        {post.categories.map((c) => (
                            <span className="postCat">{c.name}</span>
                        ))}
                    </div>
                    <span className="postTitle">{post.title}</span>
                    <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="postDesc">{post.desc}</p>
            </Link>
        </div>
    );
}

export default Post;
