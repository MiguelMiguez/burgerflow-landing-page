import { useState, useEffect } from "react";
import { Container } from "../Container";
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

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

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

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Overlay - completely separate from header */}
      {isMobileMenuOpen && (
        <div className={styles.mobileOverlay}>
          <nav className={styles.mobileNav}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.mobileLink}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
            <div className={styles.mobileActions}>
              <a
                href="https://wa.me/5491173643037"
                className={styles.mobileContactLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
              >
                Contacto
              </a>
              <a
                href="#cta"
                className={styles.mobileCtaButton}
                onClick={handleLinkClick}
              >
                Comenzar ahora
              </a>
            </div>
          </nav>
        </div>
      )}

      {/* Header */}
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${isMobileMenuOpen ? styles.menuOpen : ""}`}
      >
        <Container size="xl">
          <div className={styles.headerContent}>
            <a href="#" className={styles.logo}>
              <img
                className={styles.logoImage}
                src={LogoIcon}
                alt="BurgerFlow Logo"
              />
              <span className={styles.logoText}>BurgerFlow</span>
            </a>

            {/* Desktop Navigation */}
            <nav className={styles.desktopNav}>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className={styles.desktopActions}>
              <a
                href="https://wa.me/5491173643037"
                className={styles.contactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contacto
              </a>
              <a href="#cta" className={styles.ctaButton}>
                Comenzar ahora
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={styles.menuButton}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className={styles.menuIcon}>
                <span
                  className={`${styles.menuLine} ${isMobileMenuOpen ? styles.menuLineOpen : ""}`}
                />
              </span>
            </button>
          </div>
        </Container>
      </header>
    </>
  );
}
