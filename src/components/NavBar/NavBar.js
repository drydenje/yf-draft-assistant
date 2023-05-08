import Link from "next/link";
import DarkModeToggle from "@/components/DarkModeToggle";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        {[
          ["Home", "/"],
          ["Franchise", "/franchise"],
          // ["Leagues", "/league"],
          // ["Players", "/player"],
          ["About", "/about"],
        ].map(([title, url]) => (
          <li key={title.toLowerCase()}>
            <Link href={url}>{title}</Link>
          </li>
        ))}
      </ul>
      <DarkModeToggle />
    </nav>
  );
};

export default NavBar;
