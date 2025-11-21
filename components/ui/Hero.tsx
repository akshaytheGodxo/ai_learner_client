"use client";
import { Cover } from "./cover"

import AskAI from "@/app/test/page";
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
                    <AskAI />
                </div>
            </div>

        </main>
    )
}