import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function Analytics() {
    const progress = Number(localStorage.getItem("progress")) || 0;
    const water = Number(localStorage.getItem("water")) || 0;

    const data = {
        labels: ["DSA Progress (%)", "Water Intake"],
        datasets: [
            {
                label: "Productivity Stats",
                data: [progress, water],
                backgroundColor: ["#4CAF50", "#2196F3"],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
        },
    };

    return (
        <div className="card">
            <h2>Analytics Overview</h2>
            <Bar data={data} options={options} />
        </div>
    );
}

export default Analytics;
