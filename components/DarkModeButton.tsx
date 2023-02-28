"use client";

import { useState } from "react";

// Icons
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <button
      className="group bg-gray-50 w-8 h-8 flex items-center justify-center rounded-md border hover:bg-gray-100"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <MdOutlineLightMode className="group-hover:fill-gray-800" />
      ) : (
        <MdOutlineDarkMode className="group-hover:fill-gray-800" />
      )}
    </button>
  );
};
