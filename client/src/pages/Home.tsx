/*
 * Ground-truth reference match: landing page pública de Treinos de Boxe.
 * Direção: carvão, vermelho ringue, branco de lona, tipografia condensada,
 * módulos editoriais orientados à conversão e interações curtas e diretas.
 */
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  X,
  CalendarRange,
  ArrowRight,
  Check,
  ChartArea,
  CircleHelp,
  ChevronDown,
  Clock3,
  Dumbbell,
  FileText,
  Flame,
  Gift,
  Laptop,
  LockKeyhole,
  Monitor,
  MoveRight,
  Play,
  ShieldCheck,
  Smartphone,
  Tablet,
  Target,
  Trophy,
  Zap,
} from "lucide-react";

const hotmart10 = "https://pay.hotmart.com/K107042032C?off=z5oplczq&checkoutMode=10&utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term=&xcod=jLj6a8e04f7e795660cc963e18ehQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR&sck=jLj6a8e04f7e795660cc963e18ehQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR&bid=1787694831727";
const hotmart15 = "https://pay.hotmart.com/K107042032C?off=851lfjhn&checkoutMode=10&utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term=&xcod=jLj6a8e04f7e795660cc963e18ehQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR&sck=jLj6a8e04f7e795660cc963e18ehQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR&bid=1787694789147";
const hotmart20 = "https://pay.hotmart.com/K107042032C?off=y4g2csjb&checkoutMode=10&utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term=&xcod=jLj6a8e04f7e795660cc963e18ehQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR&sck=jLj6a8e04f7e795660cc963e18ehQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR&bid=1787694761663";
// O proprietário forneceu este checkout Hotmart para a oferta de $20; ele é usado como destino do plano Avanzado.
const hotmart27 = hotmart20;
const heroMockup = "/assets/hero-mockup-es-lite.webp";
const galleryImages = [
  "/assets/gallery-01-es-lite.webp",
  "/assets/gallery-02-es-final-lite.webp",
  "/assets/gallery-03-es-lite.webp",
  "/assets/gallery-04-es-lite.webp",
  "/assets/gallery-05-es-lite.webp",
  "/assets/gallery-06-es-lite.webp",
];
const bonusImages = [
  "/assets/bonus-week-es-lite.webp",
  "/assets/bonus-class-es-lite.webp",
  "/assets/bonus-variations-es-lite.webp",
];
const proofImages = [
"/assets/proof-01-es-lite.webp",
    "/assets/proof-02-es-lite.webp",
    "/assets/proof-03-es-lite.webp",
    "/assets/proof-04-es-lite.webp",
];
// Ordem visual da galeria: os arquivos exportados trazem as capas 01, 02, 03 e 03; a sequência foi normalizada para não saltar de número no mobile.
const galleryItems = [
  { id: "base", title: "01 / POSICIÓN Y BASE", eyebrow: "FUNDAMENTOS", image: galleryImages[0] },
  { id: "guarda", title: "02 / GUARDIA CORRECTA", eyebrow: "DEFENSA", image: galleryImages[3] },
  { id: "jab", title: "03 / JAB DOBLE", eyebrow: "ATAQUE", image: galleryImages[1] },
  { id: "deslocamento", title: "03 / DESPLAZAMIENTO", eyebrow: "MOVIMIENTO", image: galleryImages[2] },
  { id: "cruzado", title: "05 / CRUZADO", eyebrow: "COMBINACIONES", image: galleryImages[4] },
  { id: "uppercut", title: "06 / UPPERCUT", eyebrow: "FUNDAMENTOS", image: galleryImages[5] },
];

const audiences = [
  "Entrenar boxeo en casa con una secuencia clara y profesional.",
  "Empezar desde lo básico y progresar con ejercicios bien explicados.",
  "Desarrollar base, guardia, desplazamiento, golpes, esquivas, combinaciones y acondicionamiento.",
  "Variar tus rutinas sin repetir siempre los mismos ejercicios.",
  "Entrenar en casa o aplicar el material en gimnasios, proyectos sociales y clases particulares.",
];

const benefits = [
  { icon: Clock3, title: "Ahorra tiempo", text: "Ten rutinas listas para entrenar sin pasar horas pensando en el próximo ejercicio." },
  { icon: Target, title: "Aprende con claridad", text: "Cada rutina incluye una ilustración y una explicación práctica para entender cómo ejecutarla." },
  { icon: Zap, title: "Entrena con variedad", text: "Desarrolla técnica, coordinación, velocidad, defensa, ataque y acondicionamiento." },
  { icon: Trophy, title: "Progresa con organización", text: "Sigue una secuencia lógica para crear constancia y mejorar la calidad de tus entrenamientos." },
  { icon: Dumbbell, title: "Para cualquier nivel", text: "Adapta los ejercicios para principiantes, practicantes intermedios o atletas avanzados." },
  { icon: Smartphone, title: "Consulta donde estés", text: "Accede desde tu celular, tablet o notebook, o imprime el material para usarlo en casa o en el gimnasio." },
];

const faqs = [
  ["¿Cómo recibiré el material?", "Después de confirmar el pago, el acceso se envía inmediatamente al correo electrónico registrado."],
  ["¿Sirve para principiantes y atletas avanzados?", "Sí. Los ejercicios abarcan desde fundamentos básicos, como guardia y desplazamientos, hasta combinaciones ofensivas y acondicionamiento avanzado. Todo puede adaptarse según el nivel técnico y físico de cada alumno."],
  ["¿El pago es único?", "Sí, el pago es único. No hay suscripciones mensuales ni cargos adicionales ocultos: pagas una sola vez y garantizas acceso de por vida al contenido."],
  ["¿Puedo imprimir el material?", "Sí. El PDF está optimizado para pantallas digitales y también puede imprimirse por página o completo para consultarlo durante el entrenamiento."],
  ["¿Tengo garantía?", "Sí. Tienes 7 días de garantía incondicional y riesgo cero. Si el material no es adecuado para ti, solo tienes que solicitar el reembolso dentro del plazo de garantía."],
];

function SectionLabel({ children }: { children: string }) {
  return <span className="section-label">{children}</span>;
}

export default function Home() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showUpsell, setShowUpsell] = useState(false);

  useEffect(() => {
    if (!showUpsell) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowUpsell(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [showUpsell]);

  const moveGallery = (direction: number) => {
    galleryRef.current?.scrollBy({ left: galleryRef.current.clientWidth * 0.82 * direction, behavior: "smooth" });
  };

  const moveProof = (direction: number) => {
    proofRef.current?.scrollBy({ left: proofRef.current.clientWidth * direction, behavior: "smooth" });
  };

  return (
    <div className="site-shell">
      <div className="urgency-bar">
        <span>SOLO HOY PARA OBTENER LOS BONOS</span>
        <span className="urgency-punch">🥊</span>
        <span>🔥</span>
      </div>

      <main id="top">
        <section className="hero-section">
          <div className="hero-gridline" aria-hidden="true" />
          <div className="hero-copy reveal-up">
            <h1>
              100 RUTINAS DE ENTRENAMIENTO<br />
              PROFESIONALES PARA <strong>DOMINAR</strong><br />
              <strong>EL BOXEO EN CASA</strong>
            </h1>
            <p className="hero-lede">Rutinas con <b>ilustración de cada ejercicio</b> y <b>explicación práctica paso a paso</b> para entrenar en casa, progresar con seguridad o aplicar en tus clases.</p>
            <div className="hero-actions">
              <a href="#oferta" className="button button-green">ACCEDER AL MATERIAL <ArrowDown size={18} /></a>
            </div>
          </div>

          <div className="hero-visual reveal-up delay-1">
            <div className="mockup-frame"><img src={heroMockup} alt="Vista previa de las 100 rutinas de boxeo en celular, tablet y notebook" width="1920" height="1920" fetchPriority="high" decoding="async" /></div>
          </div>
          <div className="device-chips" aria-label="Formatos disponibles">
            <span><Smartphone size={14} /> CELULAR</span>
            <span><Laptop size={14} /> NOTEBOOK</span>
            <span><Tablet size={14} /> TABLET</span>
            <span><FileText size={14} /> PDF</span>
          </div>
        </section>

        <section className="audience-section section-dark" id="material">
          <div className="section-intro centered reveal-up">
            <SectionLabel>¿PARA QUIÉN ES ESTE MATERIAL?</SectionLabel>
            <h2>PARA QUIENES QUIEREN<br /><strong>ENTRENAR BOXEO</strong></h2>
          </div>
          <div className="audience-list">
            {audiences.map((item, index) => (
              <div className="audience-row reveal-up" style={{ animationDelay: `${index * 60}ms` }} key={item}>
                <span className="check-orb"><Check size={15} strokeWidth={3} /></span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="material-section" id="receber">
          <div className="wide-heading centered reveal-up">
            <SectionLabel>UNA GUÍA PARA ENTRENAR DONDE QUIERAS</SectionLabel>
            <h2>LO QUE VAS A <strong>RECIBIR</strong></h2>
          </div>
          <div className="gallery-shell" aria-label="Galería de páginas de demostración">
            <button className="gallery-arrow left" onClick={() => moveGallery(-1)} aria-label="Anterior"><ArrowLeft size={20} /></button>
            <div className="gallery-grid" ref={galleryRef}>
              {galleryItems.map((item) => (
                <article className="document-card" key={item.id}>
                  <img src={item.image} alt={`Página de demostración: ${item.title}`} loading="lazy" decoding="async" width="1632" height="2176" />
                </article>
              ))}
            </div>
            <button className="gallery-arrow right" onClick={() => moveGallery(1)} aria-label="Siguiente"><ArrowRight size={20} /></button>
          </div>
          <div className="delivery-list">
            <p><span>🥊</span> 100 rutinas de boxeo listas para usar</p>
            <p><span>📖</span> Páginas ilustradas con cada ejercicio</p>
            <p><span>📝</span> Explicación práctica debajo de cada rutina</p>
            <p><span>🏋️</span> Material creado para usar en gimnasios, proyectos sociales y clases particulares</p>
            <p><span>🏠</span> Entrena en casa, en el gimnasio o donde prefieras</p>
            <p className="delivery-accent"><span>🎁</span> Acceso a los bonos de la oferta <ArrowDown size={15} /></p>
          </div>
        </section>

        <section className="bonus-section section-dark" id="bonus">
          <div className="section-intro centered reveal-up">
            <SectionLabel>SOLO HOY: ACTUALIZADO</SectionLabel>
            <h2>3 BONOS <strong>EXCLUSIVOS</strong></h2>
          </div>
          <div className="bonus-grid">
            <article className="bonus-card reveal-up">
              <div className="bonus-art"><img src={bonusImages[0]} alt="Planificación Semanal de Rutinas" loading="lazy" decoding="async" width="2560" height="1440" /><i>BONO 01</i></div>
              <div className="bonus-copy"><div className="bonus-title"><CalendarRange size={20} /><h3>Planificación Semanal de Rutinas</h3></div><p>Organiza tus rutinas durante toda la semana, define qué fundamentos trabajarás en cada sesión y crea una progresión más constante.</p><strong>AHORRA $67</strong></div>
            </article>
            <article className="bonus-card reveal-up delay-1">
              <div className="bonus-art"><img src={bonusImages[1]} alt="Modelo de Clase Lista" loading="lazy" decoding="async" width="2560" height="1440" /><i>BONO 02</i></div>
              <div className="bonus-copy"><div className="bonus-title"><Flame size={20} /><h3>Modelo de Clase Lista</h3></div><p>Un guion sencillo para dirigir tu entrenamiento de principio a fin:<span className="bonus-bullets">• Calentamiento<br />• Técnica<br />• Ejercicios<br />• Combinaciones<br />• Acondicionamiento<br />• Cierre</span></p><strong>AHORRA $47</strong></div>
            </article>
            <article className="bonus-card reveal-up delay-2">
              <div className="bonus-art"><img src={bonusImages[2]} alt="Variaciones de Ejercicios" loading="lazy" decoding="async" width="2560" height="1440" /><i>BONO 03</i></div>
              <div className="bonus-copy"><div className="bonus-title"><ChartArea size={20} /><h3>Variaciones de Ejercicios</h3></div><p>Aprende diferentes formas de adaptar cada rutina según tu nivel, condición física, espacio disponible y objetivo.</p><strong>AHORRA $27</strong></div>
            </article>
          </div>
          <div className="bonus-value-art"><img src="/assets/bonus-value-elite-mobile-safe.webp" alt="Valor total de los bonos: $141. Gratis hoy, incluido automáticamente en el plan Élite" loading="lazy" decoding="async" width="1024" height="1280" /></div>
          <a href="#oferta" className="button button-green">GARANTIZAR AHORA MISMO</a>
        </section>

        <section className="benefits-section">
          <div className="section-intro centered reveal-up">
            <SectionLabel>PRÁCTICO, VISUAL Y DIRECTO AL GRANO</SectionLabel>
            <h2>POR QUÉ ESTE MATERIAL<br /><strong>FACILITA</strong> TUS ENTRENAMIENTOS</h2>
          </div>
          <div className="benefits-grid">
            {benefits.map(({ title, text }, index) => (
              <article className="benefit-item reveal-up" style={{ animationDelay: `${index * 55}ms` }} key={title}>
                <div><h3>{title}</h3></div><p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="proof-section section-dark" id="provas-sociais">
          <div className="proof-intro centered"><h2>QUIÉNES YA ESTÁN <strong>ENTRENANDO</strong></h2><p>Mira cómo el material puede formar parte de la rutina de quienes entrenan y enseñan boxeo.</p></div>
          <div className="proof-shell">
            <button className="proof-arrow left" onClick={() => moveProof(-1)} aria-label="Anterior"><ArrowLeft size={24} /></button>
            <div className="proof-track" ref={proofRef} aria-label="Testimonios de alumnos">
              <article className="proof-card"><img src={proofImages[0]} alt="Captura de pantalla de un testimonio de alumno 1" loading="lazy" decoding="async" width="1536" height="2304" /></article>
              <article className="proof-card"><img src={proofImages[1]} alt="Captura de pantalla de un testimonio de alumno 2" loading="lazy" decoding="async" width="1536" height="2304" /></article>
              <article className="proof-card"><img src={proofImages[2]} alt="Captura de pantalla de un testimonio de alumno 3" loading="lazy" decoding="async" width="1536" height="2304" /></article>
              <article className="proof-card"><img src={proofImages[3]} alt="Captura de pantalla de un testimonio de alumno 4" loading="lazy" decoding="async" width="1536" height="2304" /></article>
            </div>
            <button className="proof-arrow right" onClick={() => moveProof(1)} aria-label="Siguiente"><ArrowRight size={24} /></button>
          </div>
        </section>

        <section className="offer-section" id="oferta">
          <div className="section-intro centered reveal-up"><SectionLabel>ELIGE TU PLAN DE ENTRENAMIENTO</SectionLabel><h2>EMPIEZA A ENTRENAR <strong>CON DESCUENTO</strong></h2></div>
          <div className="offer-grid">
            <article className="offer-card basic">
              <div>
                <div className="offer-top"><span>BÁSICO</span><b>ESENCIAL</b></div>
                <div className="price-block"><div className="old-price">De $57</div><div className="price-row"><span>POR SOLO</span><strong>$10</strong></div><p className="discount">Descuento de $47</p></div>
                <hr />
                <ul><li><Check size={16} /> <span>100 Rutinas de Boxeo Listas para Usar</span></li><li><Check size={16} /> <span>Acceso de por vida</span></li></ul>
              </div>
              <a className="button button-green" href={hotmart10} onClick={(event) => { event.preventDefault(); setShowUpsell(true); }}>QUIERO EMPEZAR</a>
            </article>
            <article className="offer-card featured">
              <div className="popular-tag">OFERTA MÁS ELEGIDA ★</div>
              <div>
                <div className="offer-top"><span>AVANZADO</span><b className="complete-badge">COMPLETO</b></div>
                <div className="price-block"><div className="old-price">De $87</div><div className="price-row"><span>POR SOLO</span><strong>$20</strong></div><p className="discount">Descuento de $67</p></div>
                <hr />
                <div className="offer-deliverables"><div className="deliverable-row"><Check size={16} /><span>100 Rutinas de Boxeo Listas para Usar</span></div><div className="deliverable-row"><Check size={16} /><span>Acceso de por vida</span></div><div className="deliverable-row"><Check size={16} /><span>Acceso inmediato</span></div><div className="deliverable-row"><Check size={16} /><span>Garantía de 7 días</span></div><div className="deliverables-divider" /><strong>SISTEMA AVANZADO DE COMBATE</strong><span className="deliverable-detail">• Combinaciones Profesionales y Avanzadas</span><span className="deliverable-detail">• Velocidad y Reflejos</span><span className="deliverable-detail">• Potencia y Explosividad</span></div>
                <div className="offer-bonus-list"><div><Check size={16} /><span><b>🎁 BONO:</b> Planificación Semanal de Rutinas</span></div><div><Check size={16} /><span><b>🎁 BONO:</b> Modelo de Clase Lista</span></div><div><Check size={16} /><span><b>🎁 BONO:</b> Variaciones de Ejercicios</span></div></div>
              </div>
              <a className="button button-green" href={hotmart27} target="_blank" rel="noreferrer">QUIERO EL COMPLETO</a>
            </article>
          </div>
        </section>

        <section className="guarantee-section">
          <div className="guarantee-inner">
            <div className="guarantee-seal-wrap"><div className="guarantee-glow" /><div className="guarantee-seal"><div className="guarantee-seal-inner"><span>GARANTÍA INCONDICIONAL</span><b>7</b><small>DÍAS DE RIESGO CERO</small></div></div></div>
            <div className="guarantee-copy"><h2>GARANTÍA EXCLUSIVA DEL <strong>PLAN AVANZADO</strong></h2><p>Al elegir el Plan Avanzado, podrás analizar todo el material, conocer las rutinas y comprobar si realmente encaja con tu rutina de entrenamiento en casa, en el gimnasio o en tus clases.</p><p>Si no cumple con tus expectativas, solo tienes que solicitar el reembolso dentro del plazo de 7 días.</p><p>Sin burocracia. Sin complicaciones.</p><p className="money-back"><LockKeyhole size={16} /> Recibes el 100% de tu dinero de vuelta.</p></div>
          </div>
        </section>

        <section className="faq-section">
          <div className="section-intro centered"><SectionLabel>PREGUNTAS FRECUENTES</SectionLabel><h2>PREGUNTAS <strong>FRECUENTES</strong></h2></div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}>
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span className="faq-question"><CircleHelp size={20} /><span>{question}</span></span><span className="arrow-container"><ChevronDown size={16} /></span></button>
                <div className="faq-answer"><p>{answer}</p></div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
            <div className="footer-wordmark">BOX <span>CLASSONE</span></div>
          <p>Creamos materiales prácticos para quienes entrenan y enseñan deportes.</p>
          <div className="footer-bottom"><p>© 2026 Box Class One. Todos los derechos reservados.</p><p>Este producto es digital. Se prohíbe su reproducción, distribución o comercialización sin autorización expresa.</p></div>
        </div>
      </footer>

      {showUpsell && (
        <div className="upsell-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setShowUpsell(false); }}>
          <section className="upsell-modal" role="dialog" aria-modal="true" aria-labelledby="upsell-title" aria-describedby="upsell-description">
            <button className="upsell-close" type="button" onClick={() => setShowUpsell(false)} aria-label="Cerrar oferta adicional"><X size={22} /></button>
            <div className="upsell-kicker">🥊 ATENCIÓN: NO CIERRES ESTA PÁGINA</div>
            <h2 id="upsell-title">LLÉVATE EL PAQUETE <strong>ÉLITE COMPLETO</strong> POR SOLO <strong>$5 MÁS</strong></h2>
            <p id="upsell-description" className="upsell-intro">Estás a un paso de asegurar el plan básico. Pero antes, te ofrezco llevarte todo el arsenal de un boxeador profesional.</p>
            <div className="upsell-divider" />
            <h3 className="upsell-subtitle">MIRA LO QUE SE AGREGARÁ A TU PEDIDO:</h3>
            <div className="upsell-items">
              <article className="upsell-item"><img src={bonusImages[0]} alt="Planificación Semanal de Rutinas" loading="lazy" decoding="async" width="2560" height="1440" /><div><h4>PLANIFICACIÓN SEMANAL DE RUTINAS</h4><p>Organiza tus rutinas durante toda la semana, define qué fundamentos trabajarás en cada sesión y crea una progresión más constante.</p><span>AHORRA $67 &nbsp; <b>HOY GRATIS</b></span></div></article>
              <article className="upsell-item"><img src={bonusImages[1]} alt="Modelo de Clase Lista" loading="lazy" decoding="async" width="2560" height="1440" /><div><h4>MODELO DE CLASE LISTA</h4><p>Un guion sencillo para dirigir tu entrenamiento de principio a fin: calentamiento, técnica, ejercicios, combinaciones, acondicionamiento y cierre.</p><span>AHORRA $47 &nbsp; <b>HOY GRATIS</b></span></div></article>
              <article className="upsell-item"><img src={bonusImages[2]} alt="Variaciones de Ejercicios" loading="lazy" decoding="async" width="2560" height="1440" /><div><h4>VARIACIONES DE EJERCICIOS</h4><p>Aprende diferentes formas de adaptar cada rutina según tu nivel, condición física, espacio disponible y objetivo.</p><span>AHORRA $27 &nbsp; <b>HOY GRATIS</b></span></div></article>
            </div>
            <div className="upsell-footer"><p>EN LUGAR DE PAGAR <s>$141</s>, LLEVA TODO HOY POR SOLO <strong>$15</strong></p><a className="upsell-accept" href={hotmart15} target="_blank" rel="noreferrer">✓ &nbsp; SÍ, QUIERO AGREGAR EL PLAN COMPLETO</a><a className="upsell-decline" href={hotmart10} onClick={() => setShowUpsell(false)}>No, prefiero continuar solamente con el plan Básico de $10.</a></div>
          </section>
        </div>
      )}
    </div>
  );
}
