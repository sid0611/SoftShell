import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 rounded shadow"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
