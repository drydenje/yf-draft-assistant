import Header from "@/components/Header";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header text="Draft Assistant" /> */}
      <div className={styles.container}>
        {/* <div className={font.className}> */}
        {/* <div className={styles.innerWrapper}> */}
        <main>{children}</main>
        {/* </div> */}
      </div>
    </>
  );
};

export default Layout;
