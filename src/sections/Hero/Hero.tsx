import {
  Section,
  Container,
  Stack,
  Typography,
  Button,
  WhatsAppIcon,
  ArrowRightIcon,
} from "../../components";
import { WhatsAppConversation } from "../../components/WhatsAppConversation";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <Section theme="light" spacing="xl" className={styles.hero}>
      <div className={styles.bgPattern} />
      <div className={styles.bgGlow} />

      <Container size="lg">
        <Stack
          direction="vertical"
          gap="2xl"
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
                  <WhatsAppConversation />
                </div>
              </div>

              <div className={styles.dashboardMockup}>
                <div className={styles.pdHeader}>
                  <span className={styles.pdIcon}>📋</span>
                  <span className={styles.pdTitle}>¿Cómo funciona?</span>
                </div>
                <div className={styles.pdContent}>
                  <div className={styles.pdStep}>
                    <span className={styles.pdStepNumber}>1</span>
                    <div className={styles.pdStepText}>
                      <strong>El cliente escribe</strong>
                      <p>Tu cliente envía un mensaje a WhatsApp</p>
                    </div>
                  </div>
                  <div className={styles.pdStep}>
                    <span className={styles.pdStepNumber}>2</span>
                    <div className={styles.pdStepText}>
                      <strong>Elige del catálogo</strong>
                      <p>Selecciona productos y personaliza</p>
                    </div>
                  </div>
                  <div className={styles.pdStep}>
                    <span className={styles.pdStepNumber}>3</span>
                    <div className={styles.pdStepText}>
                      <strong>Confirma el pedido</strong>
                      <p>Dirección, pago y confirmación</p>
                    </div>
                  </div>
                  <div className={styles.pdStep}>
                    <span className={styles.pdStepNumber}>4</span>
                    <div className={styles.pdStepText}>
                      <strong>¡Listo!</strong>
                      <p>Recibís el pedido en tu panel</p>
                    </div>
                  </div>
                </div>
                <div className={styles.pdFooter}>
                  <span>👈 Mirá la conversación en acción</span>
                </div>
              </div>
            </div>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
