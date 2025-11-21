"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const fakeUserData = {
  name: "Akshay",
  correct: 40,
  incorrect: 60,
  attempted: 100,
  github_url: ""
};

// extra fake data
const extraData = [
  { title: "Week 1", correct: 30, incorrect: 20 },
  { title: "Week 2", correct: 50, incorrect: 40 },
  { title: "Week 3", correct: 45, incorrect: 35 }
];

export default function UserStats() {
  const graphData = {
    labels: ["Correct", "Incorrect", "Attempted"],
    datasets: [
      {
        label: "Akshay's Performance",
        data: [fakeUserData.correct, fakeUserData.incorrect, fakeUserData.attempted],
        backgroundColor: ["#22c55e", "#ef4444", "#3b82f6"]
      }
    ]
  };

  return (
    <main
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "sans-serif"
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        User Stats — {fakeUserData.name}
      </h1>

      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
        }}
      >
        <Bar data={graphData} height={120} />
      </div>

      <h2 style={{ marginTop: "2rem", fontSize: "1.5rem" }}>Weekly Breakdown</h2>

      <ul style={{ marginTop: "1rem", paddingLeft: "1rem" }}>
        {extraData.map((w, i) => (
          <li key={i} style={{ marginBottom: "0.5rem" }}>
            <strong>{w.title}</strong> — Correct: {w.correct}, Incorrect: {w.incorrect}
          </li>
        ))}
      </ul>
    </main>
  );
}
