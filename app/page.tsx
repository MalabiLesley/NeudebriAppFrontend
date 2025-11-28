"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [backendData, setBackendData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_URL =
      process.env.NEXT_PUBLIC_API_URL ||
      "https://neudebriappkenya.onrender.com";

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
      <div className="text-center max-w-2xl p-8 bg-white rounded shadow">
        {/* Logo / Real Picture */}
        <div className="mb-6 flex justify-center">
          <Image
            src="/logo.png" // <-- replace with your real logo or picture in /public folder
            alt="Neudebri Logo"
            width={120}
            height={120}
            className="rounded-full shadow"
          />
        </div>

        {/* App Title */}
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Nuedebri Health App Kenya
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to the health monitoring system frontend.
        </p>

        {/* Backend Connection */}
        {loading && <p className="text-gray-500">Connecting to backend...</p>}

        {!loading && backendData && (
          <div className="text-left bg-gray-50 p-4 rounded mb-6">
            <p><strong>Message:</strong> {backendData.message}</p>
            <p><strong>Version:</strong> {backendData.version}</p>
            <p><strong>Environment:</strong> {backendData.environment}</p>
          </div>
        )}

        {!loading && !backendData && (
          <p className="text-red-600">Failed to connect to backend.</p>
        )}

        {/* Profiles Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Example Profile Card */}
            <div className="p-4 border rounded shadow-sm bg-gray-50">
              <Image
                src="/profile1.jpg" // <-- add real profile picture in /public
                alt="Profile 1"
                width={80}
                height={80}
                className="rounded-full mb-3"
              />
              <h3 className="text-lg font-bold">Lesley Malabi</h3>
              <p className="text-sm text-gray-600">Architect & Full‑Stack Developer</p>
              <a
                href="https://neuderi.com/profiles/lesley" // <-- replace with real profile link
                className="text-blue-600 text-sm mt-2 inline-block"
              >
                View Profile →
              </a>
            </div>

            <div className="p-4 border rounded shadow-sm bg-gray-50">
              <Image
                src="/profile2.jpg" // <-- add another real profile picture
                alt="Profile 2"
                width={80}
                height={80}
                className="rounded-full mb-3"
              />
              <h3 className="text-lg font-bold">Doctor Jane Doe</h3>
              <p className="text-sm text-gray-600">Medical Advisor</p>
              <a
                href="https://neuderi.com/profiles/jane" // <-- replace with real profile link
                className="text-blue-600 text-sm mt-2 inline-block"
              >
                View Profile →
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
