import {
  Section,
  SectionHeader,
  Grid,
  Card,
  WhatsAppIcon,
  ChartIcon,
  ShoppingCartIcon,
  BoxIcon,
  CreditCardIcon,
  TruckIcon,
} from "../../components";
import styles from "./Features.module.css";

const features = [
  {
    icon: <WhatsAppIcon size={28} />,
    title: "Bot de WhatsApp inteligente",
    description:
      "Automatiza la toma de pedidos 24/7 con nuestro bot conversacional que entiende lenguaje natural y gestiona pedidos sin intervención humana.",
  },
  {
    icon: <ShoppingCartIcon size={28} />,
    title: "Menú digital dinámico",
    description:
      "Actualiza precios, disponibilidad y promociones en tiempo real. Tus clientes siempre ven la información más actualizada.",
  },
  {
    icon: <ChartIcon size={28} />,
    title: "Panel de analytics",
    description:
      "Visualiza métricas de ventas, productos más vendidos, horarios pico y tendencias para tomar decisiones basadas en datos.",
  },
  {
    icon: <CreditCardIcon size={28} />,
    title: "Múltiples formas de pago",
    description:
      "Integración con Mercado Pago, transferencias y efectivo. Ofrece la comodidad que tus clientes necesitan.",
  },
  {
    icon: <TruckIcon size={28} />,
    title: "Gestión de delivery",
    description:
      "Control total sobre zonas de reparto, tiempos de entrega y seguimiento de pedidos en tiempo real.",
  },
  {
    icon: <BoxIcon size={28} />,
    title: "Control de stock",
    description:
      "Gestiona tu inventario en tiempo real. Recibí alertas de bajo stock y desactivá productos automáticamente cuando se agotan.",
  },
];

export function Features() {
  return (
    <Section theme="cream" spacing="xl" id="features">
      <SectionHeader
        overline="Funcionalidades"
        title="Todo lo que necesitás para crecer"
        description="Una plataforma completa diseñada específicamente para restaurantes que quieren automatizar y escalar su operación de delivery."
      />

      <Grid columns={3} gap="lg" className={styles.grid}>
        {features.map((feature, index) => (
          <Card
            key={index}
            variant="elevated"
            padding="xl"
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            hoverable
            className={styles.card}
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}
      </Grid>
    </Section>
  );
}
