// import styles from "./Button.module.css";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // This is to avoid a hydration error ====
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  // =======================================

  return (
    <>
      <p>Current theme: {resolvedTheme}</p>
      <button
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      >
        <span>Toggle Theme</span>
      </button>
    </>
  );
};

export default DarkModeToggle;
