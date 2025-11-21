"use client";

import { useEffect } from "react";

export default function GetUser() {
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/getuser", { method: "GET" });

        if (!res.ok) {
          console.log("API error:", res.status);
          return;
        }

        const data = await res.json();
        console.log("USER:", data);
      } catch (err) {
        console.log("Fetch error:", err);
      }
    };

    fetchUser();
  }, []);

  return <></>;
}
