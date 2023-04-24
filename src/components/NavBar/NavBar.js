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
      <h2
        className={`text-4xl sm:text-6xl md:text-9xl text-center text-gray-800`}
        // className={`${roboto.className} text-4xl sm:text-6xl md:text-9xl text-center text-gray-800`}
      >
        LIGHT MODE
      </h2>
      <h2
        className={`text-4xl sm:text-6xl md:text-9xl text-center text-white `}
        // className={`${roboto.className} text-4xl sm:text-6xl md:text-9xl text-center text-white `}
      >
        DARK MODE
      </h2>
    </>
  );
};

export default NavBar;
