import { useState, useEffect } from "react";
import { Container } from "../../components";
import { Button } from "../../components";
import LogoIcon from "../../../public/Burger_Flow.png";
import styles from "./Header.module.css";

const navLinks = [
  { label: "Funcionalidades", href: "#features" },
  { label: "Plataforma", href: "#platform" },
  { label: "Cómo funciona", href: "#how-it-works" },
  { label: "Beneficios", href: "#testimonials" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <Container size="xl">
        <nav className={styles.nav}>
          <a href="#" className={styles.logo}>
            <img className="logoimage" src={LogoIcon} alt="BurgerFlow Logo" />
            <span className={styles.logoText}>BurgerFlow</span>
          </a>

          <ul
            className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ""}`}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.navLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <Button
              variant="ghost"
              size="sm"
              href="https://wa.me/5491173643037"
            >
              Contacto
            </Button>
            <Button variant="primary" size="sm" href="#cta">
              Comenzar ahora
            </Button>
          </div>

          <button
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`${styles.menuBar} ${isMobileMenuOpen ? styles.open : ""}`}
            />
          </button>
        </nav>
      </Container>
    </header>
  );
}
