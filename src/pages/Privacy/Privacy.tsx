import { Container, Typography, Section } from "../../components";
import { Footer } from "../../sections";
import styles from "./Privacy.module.css";

export function Privacy() {
  return (
    <>
      <Section theme="light" spacing="xl" className={styles.privacy}>
        <Container size="md">
          <a href="/" className={styles.backLink}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Volver al inicio
          </a>

          <Typography variant="h1" className={styles.title}>
            Política de Privacidad de BurgerFlow
          </Typography>

          <Typography variant="body" color="muted" className={styles.updated}>
            Última actualización: 4 de Febrero de 2026
          </Typography>

          <div className={styles.content}>
            <Typography variant="body">
              En BurgerFlow ("nosotros", "nuestro"), accesible desde la
              aplicación de WhatsApp gestionada por nosotros, la privacidad de
              nuestros visitantes es una de nuestras principales prioridades.
              Este documento de Política de Privacidad contiene tipos de
              información que son recopilados y registrados por BurgerFlow y
              cómo los usamos.
            </Typography>

            <section className={styles.section}>
              <Typography variant="h3">
                1. Información que recopilamos
              </Typography>
              <Typography variant="body">
                Cuando utilizas nuestro bot de WhatsApp para gestionar reservas
                o pedidos, recopilamos la siguiente información necesaria para
                el funcionamiento del servicio:
              </Typography>
              <ul className={styles.list}>
                <li>
                  <strong>
                    Identificador de WhatsApp (Número de teléfono):
                  </strong>{" "}
                  Necesario para enviarte confirmaciones y gestionar tu sesión.
                </li>
                <li>
                  <strong>Nombre de perfil público:</strong> Tal como aparece en
                  WhatsApp.
                </li>
                <li>
                  <strong>Datos de la reserva/pedido:</strong> Fecha, hora,
                  servicios seleccionados y detalles del pedido.
                </li>
                <li>
                  <strong>Historial de conversaciones:</strong> Únicamente los
                  mensajes intercambiados con el bot para procesar tus
                  solicitudes.
                </li>
              </ul>
            </section>

            <section className={styles.section}>
              <Typography variant="h3">
                2. Cómo usamos tu información
              </Typography>
              <Typography variant="body">
                Utilizamos la información recopilada para:
              </Typography>
              <ul className={styles.list}>
                <li>
                  Procesar y gestionar tus reservas y pedidos en las
                  hamburgueserías asociadas.
                </li>
                <li>
                  Enviar confirmaciones automáticas de turnos o estado de
                  pedidos.
                </li>
                <li>
                  Mejorar la experiencia del usuario y la calidad de nuestro
                  bot.
                </li>
                <li>
                  Prevenir fraudes y asegurar el uso correcto de la plataforma.
                </li>
              </ul>
            </section>

            <section className={styles.section}>
              <Typography variant="h3">
                3. Compartir información con terceros
              </Typography>
              <Typography variant="body">
                BurgerFlow actúa como un proveedor de tecnología. Los datos de
                tus reservas son compartidos exclusivamente con:
              </Typography>
              <ul className={styles.list}>
                <li>
                  <strong>El Restaurante/Comercio:</strong> La hamburguesería
                  específica con la que estás interactuando recibe tu nombre,
                  teléfono y detalles del pedido para poder brindarte el
                  servicio.
                </li>
                <li>
                  <strong>Meta Platforms, Inc. (WhatsApp):</strong> Como
                  proveedor de la infraestructura de mensajería.
                </li>
              </ul>
              <Typography variant="body">
                No vendemos, comerciamos ni alquilamos tu información personal a
                terceros con fines de marketing.
              </Typography>
            </section>

            <section className={styles.section}>
              <Typography variant="h3">4. Retención de Datos</Typography>
              <Typography variant="body">
                Conservaremos tu información personal solo durante el tiempo que
                sea necesario para los fines establecidos en esta política, o
                hasta que solicites su eliminación.
              </Typography>
            </section>

            <section className={styles.section}>
              <Typography variant="h3">
                5. Derechos del Usuario (Eliminación de Datos)
              </Typography>
              <Typography variant="body">
                Tienes derecho a solicitar el acceso, corrección o eliminación
                de tus datos personales almacenados en nuestros sistemas. Para
                solicitar la eliminación de tus datos, contáctanos por correo
                electrónico.
              </Typography>
            </section>

            <section className={styles.section}>
              <Typography variant="h3">6. Contacto</Typography>
              <Typography variant="body">
                Si tienes preguntas sobre nuestra Política de Privacidad,
                contáctanos por correo electrónico a:{" "}
                <a
                  href="mailto:miguelmiguezangel@gmail.com"
                  className={styles.emailLink}
                >
                  miguelmiguezangel@gmail.com
                </a>
              </Typography>
            </section>
          </div>
        </Container>
      </Section>
      <Footer />
    </>
  );
}
