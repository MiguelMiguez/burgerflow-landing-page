import {
  Section,
  SectionHeader,
  Stack,
  ScreenshotShowcase,
} from "../../components";
import { useInView } from "../../hooks";
import styles from "./Platform.module.css";

const showcases = [
  {
    badge: "Panel de control",
    title: "Dashboard intuitivo y poderoso",
    description:
      "Visualizá todas tus métricas importantes de un vistazo. Ventas del día, pedidos pendientes, productos más vendidos y mucho más en una interfaz clara y moderna.",
    imagePosition: "left" as const,
    image:
      "https://res.cloudinary.com/dbxodhhni/image/upload/v1774034387/dashboard_zbm5yp.webp",
  },
  {
    badge: "Gestión de pedidos",
    title: "Control total de cada orden",
    description:
      "Seguí el estado de cada pedido en tiempo real, desde que se recibe hasta que se entrega. Notificaciones automáticas para vos y tus clientes.",
    imagePosition: "right" as const,
    image:
      "https://res.cloudinary.com/dbxodhhni/image/upload/v1774034577/pedidos_opbd2p.webp",
  },
  {
    badge: "Menú digital",
    title: "Tu carta, siempre actualizada",
    description:
      "Agregá productos, modificá precios y configurá extras y variantes con facilidad. Los cambios se reflejan instantáneamente en WhatsApp.",
    imagePosition: "left" as const,
    image:
      "https://res.cloudinary.com/dbxodhhni/image/upload/v1774034665/menu_hz0tem.webp",
  },
  {
    badge: "Reportes",
    title: "Datos que impulsan decisiones",
    description:
      "Accedé a reportes detallados de ventas, análisis de productos y comportamiento de clientes para optimizar tu negocio día a día.",
    imagePosition: "right" as const,
    image:
      "https://res.cloudinary.com/dbxodhhni/image/upload/v1774034728/metricas_kaq3fc.webp",
  },
];

function ShowcaseItem({
  showcase,
  index,
}: {
  showcase: (typeof showcases)[0];
  index: number;
}) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const animationClass =
    showcase.imagePosition === "left"
      ? styles.slideFromLeft
      : styles.slideFromRight;

  return (
    <div ref={ref}>
      <ScreenshotShowcase
        badge={showcase.badge}
        title={showcase.title}
        description={showcase.description}
        imagePosition={showcase.imagePosition}
        image={showcase.image}
        className={`${styles.showcase} ${isInView ? animationClass : ""}`}
        style={{ animationDelay: `${index * 0.1}s` }}
      />
    </div>
  );
}

export function Platform() {
  return (
    <Section theme="light" spacing="xl" id="platform">
      <SectionHeader
        overline="La plataforma"
        title="Conocé el poder de BurgerFlow"
        description="Una suite completa de herramientas diseñadas para simplificar tu operación y maximizar tus ventas."
      />

      <Stack direction="vertical" gap="2xl" className={styles.showcases}>
        {showcases.map((showcase, index) => (
          <ShowcaseItem key={index} showcase={showcase} index={index} />
        ))}
      </Stack>
    </Section>
  );
}
