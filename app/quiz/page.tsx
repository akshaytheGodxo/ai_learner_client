
"use client";
import { Button } from "@/components/ui/button";
import { Brain, Cpu, Layers, Database, Coffee, Code } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    return (
        <main className="px-5 max-w-5xl mx-auto py-12">
            {/* Page Header */}
            <header className="text-center mb-10">
                <h1 className="text-5xl font-bold text-white">Take a Quiz</h1>
                <p className="text-gray-300 text-lg mt-2">
                    Choose a topic to get started
                </p>
            </header>

            {/* Quiz Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">

                {/* System Design */}
                <Button
                    className="
            h-32 flex flex-col items-center justify-center text-lg
            bg-gray-900 hover:bg-gray-800 
            rounded-xl shadow-md hover:shadow-xl transition-all
          "
                    onClick={() => router.push("takequiz/systemdesign")}
                >
                    <Brain className="mb-2" /> System Design
                </Button>

                {/* OOPS */}
                <Button
                    className="
            h-32 flex flex-col items-center justify-center text-lg
            bg-gray-900 hover:bg-gray-800 
            rounded-xl shadow-md hover:shadow-xl transition-all
          "
                    onClick={() => router.push("takequiz/oops")}

                >
                    <Layers className="mb-2" /> OOPS
                </Button>

                {/* OS */}
                <Button
                    className="
            h-32 flex flex-col items-center justify-center text-lg
            bg-gray-900 hover:bg-gray-800 
            rounded-xl shadow-md hover:shadow-xl transition-all
          "
                    onClick={() => router.push("takequiz/os")}

                >
                    <Cpu className="mb-2" /> Operating System
                </Button>

                {/* DBMS */}
                <Button
                    className="
            h-32 flex flex-col items-center justify-center text-lg
            bg-gray-900 hover:bg-gray-800 
            rounded-xl shadow-md hover:shadow-xl transition-all
          "
                    onClick={() => router.push("takequiz/dbms")}

                >
                    <Database className="mb-2" /> DBMS
                </Button>

                {/* Java */}
                <Button
                    className="
            h-32 flex flex-col items-center justify-center text-lg
            bg-gray-900 hover:bg-gray-800 
            rounded-xl shadow-md hover:shadow-xl transition-all
          "
                    onClick={() => router.push("takequiz/java")}

                >
                    <Coffee className="mb-2" /> Java
                </Button>

                {/* JS */}
                <Button
                    className="
            h-32 flex flex-col items-center justify-center text-lg
            bg-gray-900 hover:bg-gray-800 
            rounded-xl shadow-md hover:shadow-xl transition-all
          "
                    onClick={() => router.push("takequiz/javascript")}

                >
                    <Code className="mb-2" /> JavaScript
                </Button>

            </div>
        </main>
    );
}
