// import styles from "./Layout.styles.css";

const Layout = ({ children }) => {
  return (
    // <div className={styles.container}>
    <div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
