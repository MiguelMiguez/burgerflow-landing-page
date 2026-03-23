import { useEffect, useRef, useState } from "react";
import styles from "./WhatsAppConversation.module.css";
import LogoImg from "../../../public/Burger_Flow.png";

interface Message {
  id: number;
  type: "bot" | "user" | "system";
  content: string;
  time: string;
}

const conversationData: Message[] = [
  // Welcome
  {
    id: 1,
    type: "bot",
    content:
      "¡Hola Juan! 👋\n\nBienvenido a *BurgerFlow* 🍔\n\nPara hacer tu pedido, seleccioná las hamburguesas que quieras desde nuestro *catálogo* 📋\n\n👉 Tocá el ícono del catálogo en este chat para ver todas nuestras opciones.",
    time: "18:30",
  },
  // User selects from catalog
  {
    id: 2,
    type: "system",
    content: "📦 Juan agregó productos del catálogo",
    time: "18:31",
  },
  {
    id: 3,
    type: "user",
    content: "2x Burger Clásica\n1x Burger Doble Queso",
    time: "18:31",
  },
  // Bot confirms cart and asks customization
  {
    id: 4,
    type: "bot",
    content:
      "¡Perfecto! Tu carrito:\n\n🍔 2x Burger Clásica - $4.500\n🍔 1x Burger Doble Queso - $5.200\n\n💰 Subtotal: $14.200",
    time: "18:31",
  },
  {
    id: 5,
    type: "bot",
    content:
      "¿Querés personalizar alguna hamburguesa?\n_(Agregar o quitar ingredientes)_",
    time: "18:31",
  },
  // User wants to customize
  {
    id: 6,
    type: "user",
    content: "Si",
    time: "18:32",
  },
  // Bot shows burger selection
  {
    id: 7,
    type: "bot",
    content:
      "¿Cuál hamburguesa querés personalizar?\n\n*1.* 2x Burger Clásica\n*2.* 1x Burger Doble Queso\n\nEscribí el *número* de la hamburguesa.",
    time: "18:32",
  },
  {
    id: 8,
    type: "user",
    content: "2",
    time: "18:32",
  },
  // Bot shows customization options
  {
    id: 9,
    type: "bot",
    content: "Personalizando: *Burger Doble Queso*\n¿Qué querés hacer?",
    time: "18:32",
  },
  {
    id: 10,
    type: "user",
    content: "Quitar cebolla",
    time: "18:33",
  },
  {
    id: 11,
    type: "bot",
    content: "❌ Quitaste *Cebolla*",
    time: "18:33",
  },
  {
    id: 12,
    type: "user",
    content: "Agregar bacon",
    time: "18:33",
  },
  {
    id: 13,
    type: "bot",
    content: "✅ Agregaste *Bacon* (+$800)",
    time: "18:33",
  },
  {
    id: 14,
    type: "user",
    content: "Listo",
    time: "18:33",
  },
  // Ask for delivery type
  {
    id: 15,
    type: "bot",
    content: "¿Cómo querés recibir tu pedido?",
    time: "18:33",
  },
  {
    id: 16,
    type: "user",
    content: "🚗 Delivery",
    time: "18:34",
  },
  // Delivery zone selection
  {
    id: 17,
    type: "bot",
    content:
      "🚗 *Seleccioná tu zona de delivery:*\n\n*1.* Centro (+$500)\n*2.* Zona Norte (+$700)\n*3.* Zona Sur (+$700)\n\nEscribí el *número* de tu zona.",
    time: "18:34",
  },
  {
    id: 18,
    type: "user",
    content: "1",
    time: "18:34",
  },
  // Ask address
  {
    id: 19,
    type: "bot",
    content:
      "Zona: *Centro*\n\nPor favor, escribí tu *dirección completa*.\n_(Calle, número, piso/depto)_",
    time: "18:34",
  },
  {
    id: 20,
    type: "user",
    content: "Av. Corrientes 1234, 3°B",
    time: "18:35",
  },
  // Ask delivery reference
  {
    id: 21,
    type: "bot",
    content:
      "📍 Dirección: *Av. Corrientes 1234, 3°B*\n\nEscribí una *referencia* para encontrarte más fácil.\n_Ej: Casa con portón negro, al lado de la farmacia, etc._",
    time: "18:35",
  },
  {
    id: 22,
    type: "user",
    content: "Edificio azul, timbre 3B",
    time: "18:35",
  },
  // Payment method
  {
    id: 23,
    type: "bot",
    content: "¿Cómo querés pagar?",
    time: "18:35",
  },
  {
    id: 24,
    type: "user",
    content: "💵 Efectivo",
    time: "18:36",
  },
  // Order summary
  {
    id: 25,
    type: "bot",
    content:
      "📋 *Resumen de tu pedido*\n\n🍔 2x Burger Clásica - $4.500\n🍔 1x Burger Doble Queso - $5.200\n   + Bacon (+$800)\n   - Sin Cebolla\n\n🚗 Envío Centro: $500\n\n💰 *Total: $15.500*\n\n🚗 Delivery a: Av. Corrientes 1234, 3°B\n📍 Zona: Centro\n📝 Referencia: Edificio azul, timbre 3B\nPago: 💵 Efectivo",
    time: "18:36",
  },
  {
    id: 26,
    type: "bot",
    content: "¿Confirmamos el pedido?",
    time: "18:36",
  },
  {
    id: 27,
    type: "user",
    content: "✅ Confirmar",
    time: "18:36",
  },
  // Order confirmed
  {
    id: 28,
    type: "bot",
    content:
      "📋 *¡Pedido recibido!*\n\nNúmero de pedido: *#A1B2C3*\n\n⏳ *Esperando confirmación del restaurante...*\n\nTe notificaremos cuando tu pedido sea confirmado y comience a prepararse.\n\nTiempo estimado después de la confirmación: 40-50 minutos\n\n¡Gracias por elegir *La Burger House*! 🍔",
    time: "18:36",
  },
  // Status update
  {
    id: 29,
    type: "bot",
    content:
      "🎉 *¡Tu pedido #A1B2C3 fue confirmado!*\n\n👨‍🍳 Ya estamos preparándolo.\n\nTe avisaremos cuando esté en camino.",
    time: "18:42",
  },
  {
    id: 30,
    type: "bot",
    content:
      "🏍️ *¡Tu pedido #A1B2C3 está en camino!*\n\nNuestro repartidor ya salió con tu pedido.\n\n📍 Dirección: Av. Corrientes 1234, 3°B\n\n¡Preparate para disfrutar! 🍔",
    time: "18:55",
  },
];

export function WhatsAppConversation() {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to detect when component is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleMessages, isTyping]);

  // Animate messages appearing one by one - only when in view
  useEffect(() => {
    if (!isInView || isPaused) return;
    if (currentIndex >= conversationData.length) {
      setIsPaused(true);
      return;
    }

    const nextMessage = conversationData[currentIndex];
    const isBot = nextMessage.type === "bot";

    // Slower delays: 2.5s for bot, 1.5s for user
    const baseDelay = isBot ? 2500 : 1500;
    const typingDuration = isBot ? 1500 + Math.random() * 800 : 0;

    // Show typing indicator for bot messages
    if (isBot) {
      setIsTyping(true);
      const typingTimer = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages((prev) => [...prev, nextMessage]);
        setCurrentIndex((prev) => prev + 1);
      }, typingDuration);
      return () => clearTimeout(typingTimer);
    } else {
      const messageTimer = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, nextMessage]);
        setCurrentIndex((prev) => prev + 1);
      }, baseDelay);
      return () => clearTimeout(messageTimer);
    }
  }, [currentIndex, isInView, isPaused]);

  const formatContent = (content: string) => {
    // Convert *text* to bold
    return content.split("\n").map((line, i) => {
      const parts = line.split(/(\*[^*]+\*)/g);
      return (
        <span key={i}>
          {parts.map((part, j) => {
            if (part.startsWith("*") && part.endsWith("*")) {
              return <strong key={j}>{part.slice(1, -1)}</strong>;
            }
            // Handle italic _text_
            if (part.startsWith("_") && part.endsWith("_")) {
              return <em key={j}>{part.slice(1, -1)}</em>;
            }
            return part;
          })}
          {i < content.split("\n").length - 1 && <br />}
        </span>
      );
    });
  };

  return (
    <div className={styles.container} ref={containerRef}>
      {/* WhatsApp Header */}
      <div className={styles.header}>
        <div className={styles.headerAvatar}>
          <img className="" src={LogoImg} alt="BurgerFlow Logo" />
        </div>
        <div className={styles.headerInfo}>
          <span className={styles.headerName}>BurgerFlow</span>
          <span className={styles.headerStatus}>en línea</span>
        </div>
        <div className={styles.headerActions}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </div>
      </div>

      {/* Chat area */}
      <div className={styles.chatArea} ref={scrollRef}>
        <div className={styles.dateChip}>Hoy</div>

        {visibleMessages.map((message) => (
          <div
            key={message.id}
            className={`${styles.message} ${styles[message.type]}`}
          >
            {message.type === "system" ? (
              <div className={styles.systemMessage}>{message.content}</div>
            ) : (
              <>
                <div className={styles.messageContent}>
                  {formatContent(message.content)}
                </div>
                <span className={styles.messageTime}>
                  {message.time}
                  {message.type === "user" && (
                    <svg
                      className={styles.readReceipt}
                      width="16"
                      height="11"
                      viewBox="0 0 16 11"
                    >
                      <path
                        d="M11.071 0L7.5 3.571 5.429 1.5 4 2.929l3.5 3.5 5-5L11.071 0z"
                        fill="#53bdeb"
                      />
                      <path
                        d="M15.071 0L11.5 3.571 9.847 1.918 8.418 3.347l3.082 3.082 5-5L15.071 0z"
                        fill="#53bdeb"
                      />
                    </svg>
                  )}
                </span>
              </>
            )}
          </div>
        ))}

        {isTyping && (
          <div className={`${styles.message} ${styles.bot}`}>
            <div className={styles.typingIndicator}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>

      {/* Input area */}
      <div className={styles.inputArea}>
        <div className={styles.inputEmoji}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#8696a0">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.83 0 1.5-.67 1.5-1.5S7.83 8 7 8s-1.5.67-1.5 1.5S6.17 11 7 11zm10 0c.83 0 1.5-.67 1.5-1.5S17.83 8 17 8s-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-5 5.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
          </svg>
        </div>
        <div className={styles.inputField}>
          <span>Mensaje</span>
        </div>
        <div className={styles.inputMic}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#8696a0">
            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
