import { useState } from "react";
import styles from "./Header.module.css";
import Container from "react-bootstrap/Container";

function Header() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  function handleMenuClick() {
    setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
  }

  let dropdownMenuClasses = styles.dropdownMenu;
  if (isDisplayed) {
    dropdownMenuClasses += ` ${styles.displayMobileMenu}`;
  }

  return (
    <header>
      <nav className={`${styles.nav} bg-primary w-100`}>
        <Container className="d-flex justify-content-between align-items-center">
          <a href="index.html" className="p-3">
            <img
              src="https://www.itschool.ro/img/logo-white.png"
              alt="itschool logo"
            />
          </a>
          <div className={styles.menuIconContainer}>
            <span
              onClick={handleMenuClick}
              className={`material-icons ${styles.menuIcon} text-light`}
            >
              {" "}
              menu{" "}
            </span>
            <ul className={dropdownMenuClasses}>
              <li className={isDisplayed ? "container" : null}>
                <a
                  href="pages/courses.html"
                  className="p-3 text-uppercase text-light"
                >
                  Tech
                </a>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <a
                  href="pages/about.html"
                  className="p-3 text-uppercase text-light"
                >
                  Fotbal
                </a>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <a
                  href="pages/contact.html"
                  className="p-3 text-uppercase text-light"
                >
                  Favorite
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
}

export default Header;
