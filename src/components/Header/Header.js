import styles from "./Header.module.css";
import { TOR } from "react-mlb-logos";

const Header = () => {
  return (
    <header>
      <TOR />
      <h1 className={styles.title}>Header</h1>
    </header>
  );
};

export default Header;
