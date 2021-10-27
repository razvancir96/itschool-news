import React from "react";
// Importam headerul si footer-ul.
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={styles.layout}>
      <Header />
      {/* Intre header si footer afisam copiii primiti de componenta Layout. */}
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
