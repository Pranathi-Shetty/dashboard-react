import { useState, useEffect } from "react";

function Tasks() {
    const defaultTasks = [
        { id: 1, text: "2 Hours Coding", completed: false },
        { id: 2, text: "Workout", completed: false },
        { id: 3, text: "Read 10 Pages", completed: false }
    ];

    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : defaultTasks;
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const toggleTask = (id) => {
        const updated = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updated);
    };

    const completedCount = tasks.filter(task => task.completed).length;
    const percent = Math.round((completedCount / tasks.length) * 100);

    return (
        <div className="card">
            <h2>Daily Tasks</h2>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                        />{" "}
                        {task.text}
                    </li>
                ))}
            </ul>

            <p>Completion: {percent}%</p>

            <div className="progress">
                <div
                    className="progress-bar"
                    style={{ width: `${percent}%` }}
                ></div>
            </div>
        </div>
    );
}

export default Tasks;
