"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/seperator";
import { IconPlus } from "@tabler/icons-react";
import { ArrowUpIcon } from "lucide-react";

import { 
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  InputGroupTextarea,
  InputGroupButton
} from "@/components/ui/input-group";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AskAI() {
  const [response, setResponse] = useState("");
  const [question, setQuestion] = useState("");

  const askAI = async () => {
    if (!question.trim()) return;

    try {
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

      if (!res.ok) {
        setResponse("Request failed");
        return;
      }

      const data = await res.json();
      setResponse(data.choices?.[0]?.message?.content || "No response");
    } catch (err) {
      setResponse("Error occurred");
    }
  };

  return (
    <div className="p-5 flex flex-col gap-4 max-w-lg">
      <InputGroup className="max-w-lg">
        <InputGroupTextarea
          placeholder="Ask, Search or Chat..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <InputGroupAddon align="block-end">
          <InputGroupButton
            variant="outline"
            className="rounded-full"
            size="icon-xs"
          >
            <IconPlus />
          </InputGroupButton>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton variant="ghost">Auto</InputGroupButton>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              side="top"
              align="start"
              className="[--radius:0.95rem]"
            >
              <DropdownMenuItem>Auto</DropdownMenuItem>
              <DropdownMenuItem>Agent</DropdownMenuItem>
              <DropdownMenuItem>Manual</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <InputGroupText className="ml-auto">52% used</InputGroupText>

          <Separator orientation="vertical" className="h-4" />

          <InputGroupButton
            variant="default"
            className="rounded-full hover:bg-white hover:text-black"
            size="icon-xs"
            onClick={askAI}
          >
            <ArrowUpIcon />
            <span className="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <p>{response}</p>
    </div>
  );
}
