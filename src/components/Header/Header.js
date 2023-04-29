import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  const imagePath = "/assets/test/swan.webp";
  const altText = "Test";

  return (
    <header>
      <h1 className={styles.title}>Header</h1>
      <Image
        className={styles.image}
        src={imagePath}
        alt={altText}
        width={100}
        height={100}
        priority
      />
    </header>
  );
};

export default Header;
