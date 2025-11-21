"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function AskAI() {
  const [response, setResponse] = useState("");
  const [question, setQuestion] = useState("");

  const askAI = async () => {
    if (!question.trim()) return;

    const res = await fetch("https://router.huggingface.co/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_HF_TOKEN}`,
      },
      body: JSON.stringify({
        model: "moonshotai/Kimi-K2-Thinking",
        messages: [
          {
            role: "user",
            content: question,
          },
        ],
      }),
    });

    const data = await res.json();
    setResponse(data.choices?.[0]?.message?.content || "No response");
  };

  return (
    <div className="p-5 flex flex-col gap-4">
      <Input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask something..."
      />

      <button
        onClick={askAI}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Ask
      </button>

      <p>{response}</p>
    </div>
  );
}
