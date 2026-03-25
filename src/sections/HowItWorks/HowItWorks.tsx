import { Section, SectionHeader, Stack, Typography } from "../../components";
import { useInView } from "../../hooks";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    number: "01",
    title: "Configurá tu cuenta",
    description:
      "Creá tu perfil, subí tu logo y configurá la información básica de tu restaurante en minutos.",
    icon: "⚙️",
  },
  {
    number: "02",
    title: "Armá tu menú digital",
    description:
      "Agregá tus productos con fotos, precios y variantes. Organizá por categorías y destacá tus mejores sellers.",
    icon: "📋",
  },
  {
    number: "03",
    title: "Activamos tu bot",
    description:
      "Nosotros nos encargamos de conectar y configurar tu bot de WhatsApp. Vos solo esperá la confirmación.",
    icon: "📱",
  },
  {
    number: "04",
    title: "¡Empezá a vender!",
    description:
      "Tu bot está listo para recibir pedidos. Vos relajate mientras BurgerFlow gestiona todo.",
    icon: "🚀",
  },
];

export function HowItWorks() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <Section theme="dark" spacing="xl" id="how-it-works">
      <SectionHeader
        overline="Cómo funciona"
        title="Empezá en 4 simples pasos"
        description="Configurar BurgerFlow es más fácil de lo que pensás. En menos de 30 minutos podés tener tu restaurante funcionando en piloto automático."
        theme="dark"
      />

      <div className={styles.stepsContainer} ref={ref}>
        <Stack direction="horizontal" gap="lg" className={styles.steps}>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${styles.step} ${isInView ? styles.stepVisible : ""}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.stepIcon}>
                <span className={styles.iconEmoji}>{step.icon}</span>
                <span className={styles.stepNumber}>{step.number}</span>
              </div>
              <div className={styles.stepContent}>
                <Typography variant="h4" color="inverse" align="center">
                  {step.title}
                </Typography>
                <Typography
                  variant="body"
                  color="inverse"
                  align="center"
                  style={{ opacity: 0.8 }}
                >
                  {step.description}
                </Typography>
              </div>
            </div>
          ))}
        </Stack>
      </div>
    </Section>
  );
}
