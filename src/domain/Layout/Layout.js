import styles from "./Layout.module.css";
import { Providers } from "@/context/providers";
import { oswald, montserrat } from "@/styles/fonts";
import "@/styles/normalize.css";
import "@/styles/globals.css";
import "@/styles/colours.css";

const Layout = ({ children }) => {
  return (
    <>
      <Providers>
        <div className={montserrat.variable + " " + oswald.variable}>
          <div className={styles.container}>
            <main>{children}</main>
          </div>
        </div>
      </Providers>
    </>
  );
};

export default Layout;
