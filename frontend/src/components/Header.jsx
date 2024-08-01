import React from "react";
import { Link } from "react-router-dom";
import authService from "../services/authService";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    authService.logout();
    window.location.reload();
  };

  return (
    <header className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">
          <Link to="/" className="hover:underline">
            Event Management
          </Link>
        </h1>
        <nav className="space-x-4">
          {user ? (
            <>
              <Link to="/dashboard" className="hover:underline">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
              <Link to="/register" className="hover:underline">
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
