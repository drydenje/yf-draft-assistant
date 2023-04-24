import Link from "next/link";
import Button from "@/components/Button";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/franchise">Franchises</Link>
          </li>
          <li>
            <Link href="/league">Leagues</Link>
          </li>
          <li>
            <Link href="/player">Players</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Button />
    </>
  );
};

export default NavBar;
