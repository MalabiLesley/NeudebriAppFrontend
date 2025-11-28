"use client";

import { useEffect, useState } from "react";
import { apiGet } from "../lib/api";

export default function Home() {
  const [status, setStatus] = useState<any>(null);

  useEffect(() => {
    apiGet("/api/status").then(setStatus);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center p-8 bg-gray-50">
      <section className="max-w-3xl text-center space-y-6">
        <h1 className="text-5xl font-bold text-blue-700">Nuedebri Health App Kenya</h1>

        <p className="text-gray-700 text-lg">
          Modern healthcare system for patients, doctors and administrators.
        </p>

        {/* Backend Status */}
        <div className="p-6 bg-white shadow-lg rounded-xl border">
          <h2 className="text-xl font-semibold text-gray-800">Backend Status</h2>

          <p className="mt-2 text-gray-600">
            {status ? status.message : "Connecting..."}
          </p>

          <p className="text-sm mt-1 text-gray-500">
            Environment: {status?.environment || "Loading..."}
          </p>
        </div>
      </section>
    </main>
  );
}
