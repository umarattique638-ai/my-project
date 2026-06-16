import React, { useEffect, useState } from "react";
import { getData } from "./Postapi";
import PostCard from "./PostCard";

function Curd() {
  const [data, setData] = useState([]);
  const getPostData = async () => {
    try {
      const res = await getData();
      setData(res.data);
      return res;
    } catch (error) {}
  };
  useEffect(() => {
    getPostData();
  }, []);

  console.log(data);
  return (
    <>
      <div className="flex justify-center py-10">
        <form className="bg-white shadow-md rounded-xl p-6 w-full max-w-md flex flex-col gap-4 border border-gray-200">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">
              Enter Title
            </label>
            <input
              type="text"
              placeholder="Enter Title"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">
              Enter Body
            </label>
            <input
              type="text"
              placeholder="Enter Body"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-all duration-200"
          >
            Add
          </button>
        </form>
      </div>
      <div className="py-10 px-10">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((post) => (
            <li key={post.id}>
              <PostCard data={post} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Curd;
