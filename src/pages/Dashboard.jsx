import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Home from "../components/Home";
import Analytics from "../components/Analytics";
import Tasks from "../components/Tasks";
import Fitness from "../components/Fitness";
import { useState } from "react";

function Dashboard() {
    const [section, setSection] = useState("home");
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("auth");
        navigate("/login");
    };

    const renderSection = () => {
        switch (section) {
            case "analytics":
                return <Analytics />;
            case "tasks":
                return <Tasks />;
            case "fitness":
                return <Fitness />;
            default:
                return <Home />;
        }
    };

    return (
        <div className="main-container">
            <Sidebar setSection={setSection} />

            <div className="content">
                <button onClick={logout} style={{ float: "right" }}>
                    Logout
                </button>

                <h1>📊 Productivity Dashboard</h1>

                {renderSection()}
            </div>
        </div>
    );
}

export default Dashboard;
