import Image from "next/image";
import styles from "./DarkModeToggle.module.css";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const imagePath = "/assets/icons/SunMoon.svg";
  const altText = "Toggle dark mode on";

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
      {/* <p>Current theme: {resolvedTheme.capital}</p> */}
      <button
        className={styles.button}
        onClick={(e) => {
          // if the shift key is down, set the theme according to system preferences
          if (e.shiftKey) {
            setTheme("system");
          } else {
            // toggle the theme to the opposite option
            setTheme(resolvedTheme === "light" ? "dark" : "light");
          }
        }}
      >
        {/* <span>Toggle Theme</span> */}
        <Image
          className={styles.image}
          src={imagePath}
          alt={altText}
          width={10}
          height={10}
          priority
        />
      </button>
    </>
  );
};

export default DarkModeToggle;
