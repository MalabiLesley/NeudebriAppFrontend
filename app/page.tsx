"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [backendData, setBackendData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://neudebriappkenya.onrender.com";

    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching backend:", err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center max-w-xl p-8 bg-white rounded shadow">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Nuedebri Health App Kenya
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to the health monitoring system frontend.
        </p>

        {loading && <p className="text-gray-500">Connecting to backend...</p>}

        {!loading && backendData && (
          <div className="text-left bg-gray-50 p-4 rounded">
            <p><strong>Message:</strong> {backendData.message}</p>
            <p><strong>Version:</strong> {backendData.version}</p>
            <p><strong>Environment:</strong> {backendData.environment}</p>
          </div>
        )}

        {!loading && !backendData && (
          <p className="text-red-600">Failed to connect to backend.</p>
        )}
      </div>
    </main>
  );
}
