import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <NavBar />
      <Header />
      <div className="bg-white dark:bg-slate-800">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
