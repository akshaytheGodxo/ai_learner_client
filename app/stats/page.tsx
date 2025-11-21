"use client";

import { useEffect, useState } from "react";

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

export default function UserStats() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/getuser");
        const data = await res.json();

        if (data.loggedIn) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.log("Fetch error:", err);
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>No user logged in.</p>;

  const graphData = {
    labels: ["Correct", "Incorrect", "Attempted"],
    datasets: [
      {
        label: `${user.name}'s Performance`,
        data: [user.correct, user.incorrect, user.attempted],
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
        User Stats — {user.name}
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
      <p style={{ marginTop: "0.5rem" }}>
      </p>
    </main>
  );
}
