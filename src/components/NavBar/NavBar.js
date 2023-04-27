import Link from "next/link";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        {[
          ["Home", "/"],
          ["Franchise", "/franchise"],
          ["Leagues", "/league"],
          ["Players", "/player"],
          ["About", "/about"],
        ].map(([title, url]) => (
          <li>
            <Link href={url}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
