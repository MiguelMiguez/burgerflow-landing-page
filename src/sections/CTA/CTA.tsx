import {
  Section,
  Container,
  Stack,
  Typography,
  Button,
  WhatsAppIcon,
  CheckCircleIcon,
} from "../../components";
import styles from "./CTA.module.css";

const benefits = [
  "14 días de prueba gratis",
  "Sin tarjeta de crédito",
  "Soporte incluido",
  "Configuración asistida",
];

export function CTA() {
  return (
    <Section theme="brand" spacing="xl" id="cta" className={styles.cta}>
      <div className={styles.bgPattern} />

      <Container size="md">
        <Stack
          direction="vertical"
          gap="xl"
          align="center"
          className={styles.content}
        >
          <Typography
            variant="h2"
            align="center"
            color="inverse"
            className={styles.title}
          >
            ¿Listo para automatizar tu restaurante?
          </Typography>

          <Typography
            variant="body-lg"
            align="center"
            color="inverse"
            className={styles.subtitle}
            maxWidth="560px"
          >
            Descubrí cómo BurgerFlow puede transformar tu negocio. Empezá tu
            prueba gratuita hoy y automatizá tu restaurante.
          </Typography>

          <Stack direction="horizontal" gap="md" className={styles.buttons}>
            <Button
              variant="secondary"
              size="xl"
              icon={<WhatsAppIcon size={22} />}
              href="https://wa.me/5491173643037"
            >
              Comenzar prueba gratis
            </Button>
          </Stack>

          <Stack
            direction="horizontal"
            gap="lg"
            wrap
            className={styles.benefits}
          >
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefit}>
                <CheckCircleIcon size={18} />
                <span>{benefit}</span>
              </div>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Section>
  );
}
