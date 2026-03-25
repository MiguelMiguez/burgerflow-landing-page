import { useState, useEffect } from "react";
import { Container } from "../Container";
import { Button } from "../Button";
import { WhatsAppIcon } from "../Icons";
import LogoIcon from "../../../public/Burger_Flow.png";
import styles from "./NavBar.module.css";

const navLinks = [
  { label: "Funcionalidades", href: "#features" },
  { label: "Plataforma", href: "#platform" },
  { label: "Cómo funciona", href: "#how-it-works" },
  { label: "Beneficios", href: "#testimonials" },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <Container size="xl">
          <nav className={styles.nav}>
            <a href="#" className={styles.logo}>
              <div className={styles.logoIcon}>
                <img
                  className={styles.logoimage}
                  src={LogoIcon}
                  alt="BurgerFlow Logo"
                />
              </div>
              <span className={styles.logoText}>BurgerFlow</span>
            </a>

            <ul className={styles.navLinks}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.navLink}>
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
              className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.open : ""}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={styles.menuBar} />
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.overlay} ${isMobileMenuOpen ? styles.overlayOpen : ""}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Slide Panel */}
      <div
        className={`${styles.mobilePanel} ${isMobileMenuOpen ? styles.panelOpen : ""}`}
      >
        <button
          className={styles.closeBtn}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Cerrar menú"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <nav className={styles.mobileNav}>
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.mobileActions}>
          <Button
            variant="whatsapp"
            size="md"
            fullWidth
            icon={<WhatsAppIcon size={18} />}
            href="https://wa.me/5491173643037"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contactar
          </Button>
          <Button
            variant="primary"
            size="md"
            fullWidth
            href="#cta"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Comenzar ahora
          </Button>
        </div>
      </div>
    </>
  );
}
