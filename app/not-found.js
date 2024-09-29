"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  // Redirect to home after 3 seconds
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/"); // Redirect to homepage
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  return (
    <div className="not-found min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4 animate-bounce">Oooops...</h1>
      <h2 className="text-3xl mb-6">That page cannot be found.</h2>
      <p className="text-lg">
        Redirecting to the{" "}
        <Link href="/" className="text-blue-400 underline hover:text-blue-500">
          Homepage
        </Link>{" "}
        in 3 seconds...
      </p>

      {/* Optional: Add a fun emoji or illustration */}
      <div className="mt-10">
        <span className="text-8xl">🤔</span>
      </div>
    </div>
  );
};

export default NotFound;
