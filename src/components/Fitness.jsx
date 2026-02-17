import { useState, useEffect } from "react";

function Fitness() {
    const [water, setWater] = useState(
        Number(localStorage.getItem("water")) || 0
    );

    useEffect(() => {
        localStorage.setItem("water", water);
    }, [water]);

    const addWater = () => {
        setWater(water + 1);
    };

    const resetWater = () => {
        setWater(0);
    };

    return (
        <div className="card">
            <h2>Fitness Tracker</h2>

            <p>Water Intake: {water} glasses</p>

            <button onClick={addWater}>+1 Glass</button>
            <button
                onClick={resetWater}
                style={{ marginLeft: "10px" }}
            >
                Reset
            </button>
        </div>
    );
}

export default Fitness;
