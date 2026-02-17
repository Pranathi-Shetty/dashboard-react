function Sidebar({ setSection }) {
    return (
        <div className="sidebar">
            <h2>Dashboard</h2>
            <ul>
                <li onClick={() => setSection("home")}>🏠 Home</li>
                <li onClick={() => setSection("analytics")}>📊 Analytics</li>
                <li onClick={() => setSection("tasks")}>✅ Tasks</li>
                <li onClick={() => setSection("fitness")}>💧 Fitness</li>
            </ul>
        </div>
    );
}

export default Sidebar;
