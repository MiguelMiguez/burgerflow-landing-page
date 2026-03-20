import {
  Section,
  Container,
  Stack,
  Typography,
  Button,
  WhatsAppIcon,
  ArrowRightIcon,
} from "../../components";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <Section theme="light" spacing="xl" className={styles.hero}>
      <div className={styles.bgPattern} />
      <div className={styles.bgGlow} />

      <Container size="lg">
        <Stack
          direction="vertical"
          gap="xl"
          align="center"
          className={styles.content}
        >
          <Typography variant="h1" align="center" className={styles.title}>
            Tu restaurante,
            <br />
            <span className={styles.highlight}>en piloto automático</span>
          </Typography>

          <Typography
            variant="body-lg"
            align="center"
            color="secondary"
            className={styles.subtitle}
            maxWidth="640px"
          >
            BurgerFlow es la plataforma integral que automatiza pedidos por
            WhatsApp, gestiona tu menú digital y potencia las ventas de tu
            restaurante con tecnología inteligente.
          </Typography>

          <Stack direction="horizontal" gap="md" className={styles.cta}>
            <Button
              variant="whatsapp"
              size="lg"
              icon={<WhatsAppIcon size={20} />}
              href="https://wa.me/5491173643037"
            >
              Probar gratis
            </Button>
            <Button
              variant="outline"
              size="lg"
              icon={<ArrowRightIcon size={20} />}
              iconPosition="right"
              href="#features"
            >
              Ver funcionalidades
            </Button>
          </Stack>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>100%</span>
              <span className={styles.statLabel}>Personalizado</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statValue}>24/7</span>
              <span className={styles.statLabel}>Asistencia técnica</span>
            </div>
          </div>

          <div className={styles.heroImage}>
            <div className={styles.mockupContainer}>
              <div className={styles.phoneMockup}>
                <div className={styles.phoneScreen}>
                  <div className={styles.chatBubble}>
                    <span className={styles.chatIcon}>🤖</span>
                    <p>¡Hola! Soy BurgerBot. ¿Qué te gustaría ordenar hoy?</p>
                  </div>
                  <div className={`${styles.chatBubble} ${styles.user}`}>
                    <p>Quiero una hamburguesa doble con papas</p>
                  </div>
                  <div className={styles.chatBubble}>
                    <span className={styles.chatIcon}>🍔</span>
                    <p>
                      ¡Excelente elección! Tu pedido está listo. Total: $850
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.dashboardMockup}>
                <div className={styles.dashboardHeader}>
                  <div className={styles.dashboardDots}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className={styles.dashboardTitle}>
                    Panel de control
                  </span>
                </div>
                <div className={styles.dashboardContent}>
                  <div className={styles.miniStat}>
                    <span className={styles.miniStatValue}>24</span>
                    <span className={styles.miniStatLabel}>Pedidos hoy</span>
                  </div>
                  <div className={styles.miniChart} />
                </div>
              </div>
            </div>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
