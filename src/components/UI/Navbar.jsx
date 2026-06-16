import React from "react";
import { NavLink } from "react-router-dom";
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
    {
      label: "Crud",
      path: "/crud",
    },
  ];

  return (
    <div className="flex justify-between px-10 bg-gray-100 py-2">
      <div>
        <img src={icon} alt="logo" />
      </div>

      <div>
        <ul className="flex gap-6">
          {arr.map((data) => (
            <li key={data.path}>
              <NavLink
                to={data.path}
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-black"
                }
              >
                {data.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div></div>
    </div>
  );
}

export default Navbar;
