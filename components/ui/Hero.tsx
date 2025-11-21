"use client";
import { Cover } from "./cover"
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
} from "@/components/ui/dropdown-menu"
import { Separator } from "@radix-ui/react-dropdown-menu";
import { IconPlus } from "@tabler/icons-react";
import { ArrowUpIcon, Search } from "lucide-react"
import { useRouter } from "next/navigation";
export default function Hero() {

    const handleQuestionSubmit = () => {

    }

    return (
        <main className="px-5 py-20 flex flex-col items-center justify-center">
            <div className="max-w-7xl flex flex-col gap-8 ">
                <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-linear-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                    Solve your doubts <br /> at <Cover>light speed</Cover>
                </h1>
                <div className="">
                    <InputGroup >
                        <InputGroupTextarea placeholder="Ask, Search or Chat..." />
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
                                className="rounded-full"
                                size="icon-xs"
                                onClick={handleQuestionSubmit}
                            >
                                <ArrowUpIcon />
                                <span className="sr-only">Send</span>
                            </InputGroupButton>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
            </div>

        </main>
    )
}