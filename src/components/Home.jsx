import { useState, useEffect } from "react";

function Home() {
    const [progress, setProgress] = useState(
        Number(localStorage.getItem("progress")) || 20
    );

    useEffect(() => {
        localStorage.setItem("progress", progress);
    }, [progress]);

    const increaseProgress = () => {
        if (progress < 100) {
            setProgress(progress + 10);
        }
    };

    return (
        <div className="card">
            <h2>Study Progress</h2>
            <p>DSA</p>

            <div className="progress">
                <div
                    className="progress-bar"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            <p>{progress}%</p>

            <button onClick={increaseProgress}>
                Increase Progress
            </button>
        </div>
    );
}

export default Home;
