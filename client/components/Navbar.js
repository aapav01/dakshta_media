import React from "react";
import Login from "./dialog/Login";
import Register from "./dialog/Register";

export default function NavBar() {
  return (
    <nav className="navbar container">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Dakshta Media</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal gap-2 px-1">
          <li>
            <Login />
          </li>
          <li>
            <Register />
          </li>
        </ul>
      </div>
    </nav>
  );
}
