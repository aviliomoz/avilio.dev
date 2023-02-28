"use client";

import { useEffect, useState } from "react";

// Icons
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(
    "dark" in document.documentElement.classList
  );

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    toggleDarkMode();
  }, [darkMode]);

  return (
    <button
      className="group bg-gray-50 w-8 h-8 flex items-center justify-center rounded-md border hover:bg-gray-100 dark:bg-gray-900"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <MdOutlineLightMode className="group-hover:fill-gray-800 dark:fill-white dark:group-hover:fill-white" />
      ) : (
        <MdOutlineDarkMode className="group-hover:fill-gray-800 dark:fill-white dark:group-hover:fill-white" />
      )}
    </button>
  );
};
