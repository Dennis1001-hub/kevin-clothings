'use client';

import { useEffect, useState } from "react";
import Head from "next/head";


const Learn = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
 const headName = 'Learn | Kevin Clothings'; // Default title

  // Fetch courses from db.json
  const fetchCourses = async () => {
    try {
      const response = await fetch('/db.json'); // Ensure db.json is in the public directory
      if (!response.ok) {
        throw new Error('Failed to fetch courses');
      }
      const data = await response.json();

      if (Array.isArray(data.Courses)) {
        setCourses(data.Courses);
      } else {
        throw new Error('Invalid course data format');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  

  return (
    <>
      <Head>
        <title>{headName}</title>
        <meta name="description" content={headName} />
      </Head>

      <div className="min-h-screen bg-gray-900 flex items-center justify-center py-10 text-white">
        {loading ? (
          <div className="text-center">Loading courses...</div>
        ) : error ? (
          <div className="text-center text-red-500">Error: {error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-3">{course.title}</h2>
                <a href={course.vidLink} target="_blank" className="text-blue-500 mb-2 block">
                  Watch Video
                </a>
                <p className="text-gray-700">{course.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Learn;
