import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useEffect, useRef, useState } from "react";
import Context from "../../context/Context";
import axios from "axios";
import { Update } from "../../context/Actions";

function Settings() {
    const { user, dispatch } = useContext(Context);
    const [file, setFile] = useState();
    const [success, setSuccess] = useState(false);
    const PF = process.env.REACT_APP_PF;
    const username = useRef();
    const email = useRef();
    const password = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updateInfo = {
            username: username.current.value || user.username,
            email: email.current.value || user.email,
            userID: user._id,
        };

        if (password.current.value) {
            updateInfo.password = password.current.value;
        }

        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            try {
                const res = await axios.post("/upload", formData);
                updateInfo.profilePic = res.data;
            } catch (error) {
                console.log(error);
            }
        }

        try {
            const { password, ...others } = updateInfo;
            await axios.put("/users/" + user._id, updateInfo);
            setSuccess(true);
            dispatch(Update(others));
        } catch (error) {
            console.log(error);
        }
    };

    const handleChangeAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);

        e.target.value = null;
        setFile(file);
    };

    useEffect(() => {
        return () => {
            file && URL.revokeObjectURL(file.preview);
        };
    }, [file]);

    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>Profile Picutre</label>
                    <div className="settingsPP">
                        <img src={file ? file.preview : user.profilePic ? PF + user.profilePic : PF + "/gwen.jpg"} alt="" className="settingsImg" />
                        <label htmlFor="fileInput">
                            <i className="settingsIcon fa-regular fa-circle-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} onChange={handleChangeAvatar} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={user.username} ref={username} />
                    <label>Email</label>
                    <input type="text" placeholder={user.email} ref={email} />
                    <label>Password</label>
                    <input type="password" ref={password} />
                    <button className="settingsUpdateBtn" type="submit">
                        Update
                    </button>
                </form>
                {success && (
                    <span style={{ color: "green", textAlign: "center", display: "block", marginTop: "8px" }}>Update profile successfully!</span>
                )}
            </div>
            <Sidebar />
        </div>
    );
}

export default Settings;
