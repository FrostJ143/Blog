import "./post.css"

function Post() {
    return (
        <div className="post">
            <img className="postImg" src="/img/milesXgwen.jpg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Life</span>
                    <span className="postCat">Music</span>
                    <span className="postCat">Tech</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet consectetur</span>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta illum recusandae quia, inventore pariatur quam magni provident corrupti tenetur eum fuga est? Consequuntur, nulla accusamus. Ea aspernatur dolore maiores molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure distinctio alias, ut placeat veniam architecto, rem ipsum labore doloribus earum recusandae blanditiis officia, minus quidem similique! Quas ea quis ut. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga recusandae possimus laborum, iure quam unde vitae maiores dolore? A voluptatibus inventore voluptas sapiente quasi saepe, esse temporibus voluptate? Voluptas, iure?</p>
        </div>
    )
}

export default Post;