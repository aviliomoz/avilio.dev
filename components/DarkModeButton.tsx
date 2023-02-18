"use client";

import { useState } from "react";

// Icons
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <button
      className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-md"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
    </button>
  );
};
