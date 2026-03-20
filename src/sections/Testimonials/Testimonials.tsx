import {
  Section,
  SectionHeader,
  Grid,
  Card,
  ZapIcon,
  ClockIcon,
  CheckCircleIcon,
  SettingsIcon,
  UsersIcon,
  ChartIcon,
} from "../../components";
import styles from "./Testimonials.module.css";

const benefits = [
  {
    icon: <ZapIcon size={28} />,
    title: "Automatización total",
    description:
      "Tu bot trabaja 24/7 recibiendo pedidos sin intervención humana. Nunca más pierdas una venta por no poder atender el teléfono.",
  },
  {
    icon: <ClockIcon size={28} />,
    title: "Ahorro de tiempo",
    description:
      "Reducí hasta un 80% el tiempo dedicado a tomar pedidos manualmente. Enfocate en lo que mejor sabés hacer: cocinar.",
  },
  {
    icon: <CheckCircleIcon size={28} />,
    title: "Cero errores",
    description:
      "Eliminá los malentendidos y errores de pedidos. El cliente confirma todo antes de enviar su orden.",
  },
  {
    icon: <SettingsIcon size={28} />,
    title: "Fácil de usar",
    description:
      "Interfaz intuitiva que no requiere conocimientos técnicos. Si sabés usar WhatsApp, sabés usar BurgerFlow.",
  },
  {
    icon: <UsersIcon size={28} />,
    title: "Soporte personalizado",
    description:
      "Te acompañamos en todo el proceso. Desde la configuración inicial hasta el día a día de tu operación.",
  },
  {
    icon: <ChartIcon size={28} />,
    title: "Escalá tu negocio",
    description:
      "Prepará tu restaurante para crecer. Manejá más pedidos sin necesidad de contratar más personal.",
  },
];

export function Testimonials() {
  return (
    <Section theme="cream" spacing="xl" id="testimonials">
      <SectionHeader
        overline="Beneficios"
        title="¿Por qué elegir BurgerFlow?"
        description="Descubrí todas las ventajas de automatizar tu restaurante con nuestra plataforma."
      />

      <Grid columns={3} gap="lg" className={styles.grid}>
        {benefits.map((benefit, index) => (
          <Card
            key={index}
            variant="elevated"
            padding="xl"
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            hoverable
            className={styles.card}
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}
      </Grid>
    </Section>
  );
}
