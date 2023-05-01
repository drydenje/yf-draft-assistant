import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      {/* <div className={font.className}> */}
      <NavBar />
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
