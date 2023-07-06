import React from "react";

export default function NavBar() {
  return (
    <nav className="navbar container">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Dakshta Media</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Login</a>
          </li>
          <li>
            <a>Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
