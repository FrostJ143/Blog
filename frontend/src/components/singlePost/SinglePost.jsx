import './singlePost.css'

function SinglePost() {

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="/img/milesXgwen.jpg" alt="" className='singlePostImg'/>
                <h1 className="singlePostTitle">Lorem ipsum dolor sit
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-regular fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Sang</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quos, aut enim officiis rerum, ad obcaecati tenetur at doloribus labore cum cupiditate suscipit corrupti error possimus ea, dignissimos voluptatum sed!Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quos, aut enim officiis rerum, ad obcaecati tenetur at doloribus labore cum cupiditate suscipit corrupti error possimus ea, dignissimos voluptatum sed!Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quos, aut enim officiis rerum, ad obcaecati tenetur at doloribus labore cum cupiditate suscipit corrupti error possimus ea, dignissimos voluptatum sed!Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quos, aut enim officiis rerum, ad obcaecati tenetur at doloribus labore cum cupiditate suscipit corrupti error possimus ea, dignissimos voluptatum sed!</p>
            </div>
        </div>
    )
}

export default SinglePost;