import { useContext, useEffect, useRef, useState } from "react";
import "./write.css";
import axios from "axios";
import Context from "../../context/Context";
import { useNavigate } from "react-router";

function Write() {
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);
    const title = useRef();
    const desc = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            file && URL.revokeObjectURL(file);
        };
    }, [file]);

    const handleChangeFile = (e) => {
        setFile(e.target.files[0]);
        e.target.value = null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const post = {
            title: title.current.value,
            desc: desc.current.value,
            username: user.username,
        };

        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            try {
                const res = await axios.post("/upload", formData);
                post.photo = res.data;
            } catch (error) {
                console.log(error);
            }
        }

        try {
            await axios.post("/posts", post);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="write">
            {file && <img className="writeImg" src={URL.createObjectURL(file)}></img>}
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="inputFile">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="inputFile" style={{ display: "none" }} onChange={handleChangeFile} />
                    <input type="text" autoFocus={true} className="writeInput" placeholder="Title" ref={title} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." className="writeInput writeText" ref={desc}></textarea>
                </div>
                <button className="writeSubmitBtn" type="submit">
                    Pulish
                </button>
            </form>
        </div>
    );
}

export default Write;
