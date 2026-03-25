import {
  Section,
  Container,
  Stack,
  Typography,
  Button,
  WhatsAppIcon,
  CheckCircleIcon,
} from "../../components";
import { useInView } from "../../hooks";
import styles from "./CTA.module.css";

const benefits = [
  "14 días de prueba gratis",
  "Sin tarjeta de crédito",
  "Soporte incluido",
  "Configuración asistida",
];

export function CTA() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <Section theme="brand" spacing="xl" id="cta" className={styles.cta}>
      <div className={styles.bgPattern} />

      <Container size="md">
        <div ref={ref}>
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
              className={`${styles.title} ${isInView ? styles.titleVisible : ""}`}
            >
              ¿Listo para automatizar tu restaurante?
            </Typography>

            <Typography
              variant="body-lg"
              align="center"
              color="inverse"
              className={`${styles.subtitle} ${isInView ? styles.subtitleVisible : ""}`}
              maxWidth="560px"
            >
              Descubrí cómo BurgerFlow puede transformar tu negocio. Empezá tu
              prueba gratuita hoy y automatizá tu restaurante.
            </Typography>

            <Stack direction="horizontal" gap="md" className={`${styles.buttons} ${isInView ? styles.buttonsVisible : ""}`}>
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
              className={`${styles.benefits} ${isInView ? styles.benefitsVisible : ""}`}
            >
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className={styles.benefit}
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <CheckCircleIcon size={18} />
                  <span>{benefit}</span>
                </div>
              ))}
            </Stack>
          </Stack>
        </div>
      </Container>
    </Section>
  );
}
