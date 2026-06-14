import React from "react";
import { Link } from "react-router-dom";
import icon from "./../../assets/react.svg";
function Navbar() {
  const arr = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Pokemon",
      path: "/pokemon",
    },
    {
      label: "Counter",
      path: "/counter",
    },
  ];

  return (
    <>
      <div className="flex justify-between px-10  bg-gray-100 py-2">
        <div>
          <img src={icon} alt="" />
        </div>
        <div>
          <ul className="flex gap-6">
            {arr.map((data) => {
              return (
                <li key={data.path}>
                  <Link to={data.path}>{data.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Navbar;
