"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState<any>(null);

  useEffect(() => {
    // Direct call to your deployed backend
    fetch("https://neudebriappkenya.onrender.com/api/status")
      .then((res) => res.json())
      .then((data) => setStatus(data))
      .catch(() => setStatus({ message: "Backend unreachable" }));
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <div className="max-w-3xl text-center space-y-6">

        {/* Title */}
        <h1 className="text-4xl font-bold text-blue-600">
          Nuedebri Health App Kenya
        </h1>

        <p className="text-gray-700 text-lg">
          A modern digital platform for patient monitoring, doctors, nurses, and administrators.
        </p>

        {/* Backend Connection Display */}
        <div className="mt-8 p-4 bg-white shadow rounded-lg border w-full">
          <h2 className="font-semibold text-xl">Backend Connection</h2>

          <p className="mt-2 text-gray-800">
            {status
              ? status.message || "Backend responded"
              : "Connecting to backend..."}
          </p>

          <p className="text-sm text-gray-500 mt-2">
            Env: {status?.environment || "Loading..."}
          </p>
        </div>
      </div>
    </main>
  );
}
