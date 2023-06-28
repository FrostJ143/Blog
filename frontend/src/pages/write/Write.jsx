import { useEffect, useState } from "react";
import "./write.css"

function Write() {
    const [img, setImg] = useState(null);

    useEffect(() => {

        return () => {
            img && URL.revokeObjectURL(img);
        }
    }, [img])

    const handleChangeFile = (e) => {
       setImg(URL.createObjectURL(e.target.files[0]));
       e.target.value = null;
    }


    return (
        <div className="write">
                        {img && (<img className="writeImg" src={img}></img>)}
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="inputFile">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="inputFile" style={{display: "none"}} onChange={handleChangeFile}/>
                    <input type="text" autoFocus={true} className="writeInput" placeholder="Title"/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmitBtn">Pulish</button>
            </form>
        </div>
    )
}

export default Write;