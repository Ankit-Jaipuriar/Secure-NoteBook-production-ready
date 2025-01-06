import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewNote = () => {
  const { fileId } = useParams(); // Extract fileId from the URL
  const [fileData, setFileData] = useState(null); // Store file data
  const [loading, setLoading] = useState(true); // Track loading state

  // Fetch the file content using fileId
  useEffect(() => {
    const fetchFileData = async () => {
      try {
        const response = await fetch(`/api/files/${fileId}`); // Replace with your actual API endpoint
        const data = await response.json();
        setFileData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching file:", error);
        setLoading(false);
      }
    };

    fetchFileData();
  }, [fileId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="text-xl font-semibold text-gray-600">Loading...</div>
      </div>
    ); // Show a loading indicator while the file is being fetched
  }

  if (!fileData) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="text-xl font-semibold text-gray-600">
          File not found.
        </div>
      </div>
    ); // Handle case when file data is not found
  }

  return (
      <main className="w-full min-h-screen bg-zinc-100 font-['Helvetica'] flex flex-col">
          <nav className="flex px-10 justify-between py-5 bg-zinc-200 shadow-md">
            <h3 className="text-2xl tracking-tight">Secure-NoteBook</h3>
            <div className="navlinks flex gap-5">
              <Link className="tracking-tight" to="/Home">Home</Link>
              <Link className="tracking-tight" to="/create">Create</Link>
            </div>
            </nav>

      {/* Note Content */}
      <section className="max-w-4xl mx-auto mt-10 bg-white rounded-lg shadow-lg p-8">
        {/* File Name */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b pb-2">
          {fileData.fileName}
        </h2>
        {/* Date */}
        <h3 className="text-xl text-gray-500 mb-8">
          Created on{" "}
          <span className="font-medium text-gray-700">
            {fileData.createdAt.split("-").reverse().join("-")}
          </span>
        </h3>
        {/* File Content */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
          {fileData.content}
        </p>
        {/* Action Buttons */}
        <div className="flex justify-between items-center border-t pt-4">
          <Link
            to="/home"
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 transition"
          >
            Back
          </Link>
          <Link
            to={`/edit/${fileId}`}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Edit
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ViewNote;
