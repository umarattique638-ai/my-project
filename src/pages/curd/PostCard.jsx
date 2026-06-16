import React from "react";

function PostCard({ data }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5 border border-gray-200 flex flex-col gap-3">
      <h2 className="text-sm text-gray-500">ID: {data.id}</h2>

      <h2 className="text-xl font-bold text-gray-800 capitalize">
        {data.title}
      </h2>

      <p className="text-gray-600 leading-relaxed">{data.body}</p>

      <div className="flex gap-3 mt-4">
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition-all duration-200 shadow-sm">
          Delete
        </button>

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-all duration-200 shadow-sm">
          Update
        </button>
      </div>
    </div>
  );
}

export default PostCard;
