import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar";

function Settings() {

    return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picutre</label>
                <div className="settingsPP">
                    <img src="/img/gwen.jpg" alt="" className="settingsImg"/>
                    <label htmlFor="fileInput">
                        <i className="settingsIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Sang"/>
                <label>Email</label>
                <input type="text" placeholder="Sang@gmail.com"/>
                <label>Password</label>
                <input type="password" />
                <button className="settingsUpdateBtn">Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
    )
}

export default Settings;