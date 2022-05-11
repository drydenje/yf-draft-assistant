import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Header />
      <div className={styles.container}>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
