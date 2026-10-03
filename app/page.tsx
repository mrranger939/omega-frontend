"use client";

import { useEffect, useState } from "react";
import { checkHealth } from "@/lib/api";

type EngineStatus = "checking" | "online" | "offline";

export default function Home() {
    const [status, setStatus] = useState<EngineStatus>("checking");

    useEffect(() => {
        checkHealth()
            .then(() => setStatus("online"))
            .catch(() => setStatus("offline"));
    }, []);

    return (
        <main className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold">OMEGA</h1>

            <p className="mt-4 text-gray-500">
                Optimized ML Experimentation & Guided AI Analysis
            </p>

            <div className="mt-8 flex items-center gap-2">
        <span
            className={`h-4 w-3 rounded-full ${
                status === "online"
                    ? "bg-green-500"
                    : status === "offline"
                        ? "bg-red-500"
                        : "bg-yellow-500"
            }`}
        />

                <span>
          {status === "checking" && "Connecting to engine..."}
                    {status === "online" && "Engine connected"}
                    {status === "offline" && "Engine unavailable"}
        </span>
            </div>
        </main>
    );
}