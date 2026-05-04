const certifications = [
  { name: "iTEP", provider: "iTEP Mexico", category: "english", cenni: true, featured: true, desc: "Examen de ingles flexible y muy solicitado para expediente CENNI." },
  { name: "ELet", provider: "UKS", category: "english", cenni: true, featured: true, desc: "English Language e-Test reconocido en fichas SEP; producto estrella para CENNI." },
  { name: "ELet One", provider: "UKS", category: "english", cenni: true, featured: false, desc: "Opcion UKS para evidenciar nivel de ingles con asesoria de agenda." },
  { name: "ELet Plus", provider: "UKS", category: "english", cenni: true, featured: false, desc: "Evaluacion UKS con orientacion sobre alcance y protocolo." },
  { name: "ELet Reading", provider: "UKS", category: "english", cenni: true, featured: false, desc: "Modulo de lectura para objetivos especificos de certificacion." },
  { name: "ELet Speaking", provider: "UKS", category: "english", cenni: true, featured: false, desc: "Modulo de expresion oral con agenda asistida." },
  { name: "STARTERS (Pre A1)", provider: "Cambridge", category: "english", cenni: true, featured: false, desc: "Certificacion inicial para estudiantes jovenes." },
  { name: "MOVERS (A1)", provider: "Cambridge", category: "english", cenni: true, featured: false, desc: "Certificacion A1 para ruta escolar de ingles." },
  { name: "FLYERS (A2)", provider: "Cambridge", category: "english", cenni: true, featured: false, desc: "Certificacion A2 para estudiantes jovenes." },
  { name: "KEY (A2)", provider: "Cambridge", category: "english", cenni: true, featured: false, desc: "Key English Test, ficha tecnica CENNI Cambridge." },
  { name: "PRELIMINARY (B1)", provider: "Cambridge", category: "english", cenni: true, featured: false, desc: "Preliminary English Test para nivel intermedio." },
  { name: "FIRST (B2)", provider: "Cambridge", category: "english", cenni: true, featured: false, desc: "First Certificate in English para nivel B2." },
  { name: "ADVANCED (C1)", provider: "Cambridge", category: "english", cenni: true, featured: false, desc: "Certificate in Advanced English para nivel C1." },
  { name: "PROFICIENCY (C2)", provider: "Cambridge", category: "english", cenni: true, featured: false, desc: "Certificate of Proficiency in English para nivel C2." },
  { name: "TKT 1 Module", provider: "Cambridge", category: "english", cenni: false, featured: false, desc: "Certificacion docente por modulo para profesores de ingles." },
  { name: "TKT 3 Modules", provider: "Cambridge", category: "english", cenni: false, featured: false, desc: "Ruta completa de modulos TKT para docentes." },
  { name: "Linguaskill Bundle presencial", provider: "Cambridge", category: "english", cenni: true, featured: false, desc: "Evaluacion multi-habilidad presencial con ficha CENNI." },
  { name: "Linguaskill Listening and Reading presencial", provider: "Cambridge", category: "english", cenni: true, featured: false, desc: "Modulos de comprension auditiva y lectura." },
  { name: "Linguaskill Writing presencial", provider: "Cambridge", category: "english", cenni: true, featured: false, desc: "Modulo de escritura con protocolo presencial." },
  { name: "Linguaskill Speaking presencial", provider: "Cambridge", category: "english", cenni: true, featured: false, desc: "Modulo oral con agenda y supervision." },
  { name: "Linguaskill Bundle online", provider: "Cambridge", category: "english", cenni: true, featured: false, desc: "Evaluacion multi-habilidad online sujeta a protocolo." },
  { name: "Linguaskill Listening and Reading online", provider: "Cambridge", category: "english", cenni: true, featured: false, desc: "Comprension auditiva y lectura en modalidad online." },
  { name: "Linguaskill Writing online", provider: "Cambridge", category: "english", cenni: true, featured: false, desc: "Modulo writing online con requisitos tecnicos." },
  { name: "Linguaskill Speaking online", provider: "Cambridge", category: "english", cenni: true, featured: false, desc: "Modulo speaking online con supervision." },
  { name: "MET GO! Digital", provider: "Michigan Language Assessment", category: "english", cenni: true, featured: false, desc: "Evaluacion digital para jovenes." },
  { name: "MET", provider: "Michigan Language Assessment", category: "english", cenni: true, featured: false, desc: "Michigan English Test con ficha tecnica CENNI." },
  { name: "TOEFL Primary", provider: "IIE / ETS", category: "english", cenni: true, featured: false, desc: "Examen TOEFL para estudiantes de primaria." },
  { name: "TOEFL Junior", provider: "IIE / ETS", category: "english", cenni: true, featured: false, desc: "Examen TOEFL para secundaria y jovenes." },
  { name: "TOEFL ITP", provider: "IIE / ETS", category: "english", cenni: true, featured: false, desc: "Examen institucional para medir dominio de ingles academico." },
  { name: "TOEIC Listening & Reading", provider: "IIE / ETS", category: "english", cenni: true, featured: false, desc: "Agregado desde fichas SEP; mide ingles laboral receptivo." },
  { name: "TOEIC Speaking & Writing", provider: "IIE / ETS", category: "english", cenni: true, featured: false, desc: "Agregado desde fichas SEP; evalua produccion oral y escrita." },
  { name: "EQ", provider: "Oxford / OUP", category: "english", cenni: true, featured: false, desc: "Evaluacion Oxford disponible mediante cuenta institucional." },
  { name: "EQc", provider: "Oxford / OUP", category: "english", cenni: true, featured: false, desc: "Opcion Oxford para objetivos escolares o institucionales." },
  { name: "EFRAN", provider: "Oxford / OUP", category: "english", cenni: true, featured: false, desc: "Evaluacion Oxford ofrecida en linea." },
  { name: "OOPT", provider: "Oxford University Press", category: "english", cenni: true, featured: false, desc: "Oxford Online Placement Test con ficha CENNI SEP." },
  { name: "Oxford Test of English (OTE)", provider: "Oxford University Press", category: "english", cenni: true, featured: false, desc: "Agregado desde fichas SEP como instrumento Oxford reconocido." },
  { name: "OTCC", provider: "Oxford TCC", category: "english", cenni: true, featured: false, desc: "Certificacion Oxford TCC con validacion previa de requisitos." },
  { name: "IC3 GS5 Computing Fundamentals", provider: "Certiport", category: "it", cenni: false, featured: false, desc: "Fundamentos de computacion para alfabetizacion digital." },
  { name: "IC3 GS5 Key Applications", provider: "Certiport", category: "it", cenni: false, featured: false, desc: "Aplicaciones clave para productividad." },
  { name: "IC3 GS5 Living Online", provider: "Certiport", category: "it", cenni: false, featured: false, desc: "Competencias digitales para vida en linea." },
  { name: "Microsoft Office Specialist Word 2016", provider: "Certiport", category: "it", cenni: false, featured: false, desc: "Certificacion MOS para Microsoft Word." },
  { name: "Microsoft Office Specialist Excel 2016", provider: "Certiport", category: "it", cenni: false, featured: true, desc: "Certificacion MOS para Excel, alta demanda laboral." },
  { name: "Microsoft Office Specialist PowerPoint 2016", provider: "Certiport", category: "it", cenni: false, featured: false, desc: "Certificacion MOS para presentaciones." },
  { name: "Microsoft Office Specialist Word Expert 2016", provider: "Certiport", category: "it", cenni: false, featured: false, desc: "Nivel experto para Word." },
  { name: "Microsoft Office Specialist Excel Expert 2016", provider: "Certiport", category: "it", cenni: false, featured: false, desc: "Nivel experto para Excel." },
  { name: "Microsoft Office Specialist Outlook 2016", provider: "Certiport", category: "it", cenni: false, featured: false, desc: "Certificacion MOS para Outlook." },
  { name: "Microsoft Office Specialist Access 2016", provider: "Certiport", category: "it", cenni: false, featured: false, desc: "Certificacion MOS para bases de datos Access." },
  { name: "MTA: Windows Operating System Fundamentals", provider: "Certiport", category: "it", cenni: false, featured: false, desc: "Fundamentos de sistemas operativos Windows." },
  { name: "MTA: Software Development Fundamentals", provider: "Certiport", category: "it", cenni: false, featured: false, desc: "Bases de desarrollo de software." },
  { name: "MTA: Database Administration Fundamentals", provider: "Certiport", category: "it", cenni: false, featured: false, desc: "Fundamentos de administracion de bases de datos." },
  { name: "MTA: Windows Server Administration Fundamentals", provider: "Certiport", category: "it", cenni: false, featured: false, desc: "Conceptos base de administracion Windows Server." },
  { name: "MTA: Networking Fundamentals", provider: "Certiport", category: "it", cenni: false, featured: false, desc: "Redes, conectividad y fundamentos tecnicos." },
  { name: "MTA: Security Fundamentals", provider: "Certiport", category: "it", cenni: false, featured: false, desc: "Principios de seguridad informatica." },
  { name: "MTA: Windows Devices and Mobility Fundamentals", provider: "Certiport", category: "it", cenni: false, featured: false, desc: "Dispositivos Windows y movilidad." },
  { name: "MTA: HTML5 Application Development Fundamentals", provider: "Certiport", category: "it", cenni: false, featured: false, desc: "Fundamentos de apps web con HTML5." },
  { name: "Introduction to Programming using Python", provider: "Certiport", category: "it", cenni: false, featured: true, desc: "Certificacion introductoria de programacion con Python." },
  { name: "Introduction to Programming using JavaScript", provider: "Certiport", category: "it", cenni: false, featured: false, desc: "Programacion inicial con JavaScript." },
  { name: "Introduction to Programming using HTML and CSS", provider: "Certiport", category: "it", cenni: false, featured: false, desc: "Bases de desarrollo web." },
  { name: "Introduction to Programming using Java", provider: "Certiport", category: "it", cenni: false, featured: false, desc: "Programacion inicial con Java." },
  { name: "Technology Literacy for Educators", provider: "Certiport", category: "it", cenni: false, featured: false, desc: "Competencias digitales para docentes." },
  { name: "Adobe Premiere Pro CC (2019)", provider: "Certiport / Creative Solutions", category: "it", cenni: false, featured: false, desc: "Digital Video Using Adobe Premiere Pro." },
  { name: "Adobe Illustrator CC (2019)", provider: "Certiport / Creative Solutions", category: "it", cenni: false, featured: false, desc: "Graphic Design and Illustration." },
  { name: "Adobe Animate CC (2019)", provider: "Certiport / Creative Solutions", category: "it", cenni: false, featured: false, desc: "Multiplatform Animations." },
  { name: "Adobe InDesign CC (2019)", provider: "Certiport / Creative Solutions", category: "it", cenni: false, featured: false, desc: "Print & Digital Media Publication." },
  { name: "Adobe Photoshop CC (2019)", provider: "Certiport / Creative Solutions", category: "it", cenni: false, featured: true, desc: "Visual Design con Adobe Photoshop." },
  { name: "Adobe After Effects CC", provider: "Certiport / Creative Solutions", category: "it", cenni: false, featured: false, desc: "Visual Effects and Motion Graphics." },
  { name: "Adobe Dreamweaver CC (2019)", provider: "Certiport / Creative Solutions", category: "it", cenni: false, featured: false, desc: "Web Authoring con Dreamweaver." },
  { name: "AutoCAD Certified User", provider: "Certiport / Autodesk", category: "it", cenni: false, featured: true, desc: "Certificacion Autodesk para diseno CAD." },
  { name: "Fusion 360 Certified User", provider: "Certiport / Autodesk", category: "it", cenni: false, featured: false, desc: "Diseno y manufactura con Fusion 360." },
  { name: "Inventor Certified User", provider: "Certiport / Autodesk", category: "it", cenni: false, featured: false, desc: "Modelado mecanico con Inventor." },
  { name: "Revit Certified User", provider: "Certiport / Autodesk", category: "it", cenni: false, featured: false, desc: "Modelado BIM con Revit." },
  { name: "3ds Max Certified User", provider: "Certiport / Autodesk", category: "it", cenni: false, featured: false, desc: "Modelado y animacion 3D." },
  { name: "Maya Certified User", provider: "Certiport / Autodesk", category: "it", cenni: false, featured: false, desc: "Animacion y modelado 3D con Maya." },
  { name: "Entrepreneurship and Small Business", provider: "Certiport", category: "it", cenni: false, featured: false, desc: "Competencias de emprendimiento y negocio." },
  { name: "Unity Certified User: Programmer", provider: "Certiport", category: "it", cenni: false, featured: false, desc: "Programacion de videojuegos con Unity." },
  { name: "App Development with Swift Level 1", provider: "Certiport", category: "it", cenni: false, featured: false, desc: "Desarrollo de apps con Swift." },
  { name: "Ethical Hacking Associate (EHA)", provider: "EC-Council / Certiport", category: "it", cenni: false, featured: false, desc: "Fundamentos de hacking etico." },
  { name: "Cyber Forensics Associate (CFA)", provider: "EC-Council / Certiport", category: "it", cenni: false, featured: false, desc: "Fundamentos de analisis forense digital." },
];

const grid = document.querySelector("#certGrid");
const filterButtons = document.querySelectorAll(".filter-button");
const searchInput = document.querySelector("#searchInput");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const toast = document.querySelector("#toast");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
const leadForm = document.querySelector("#leadForm");

let activeFilter = "all";
let cart = [];

function normalizeText(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function matchesFilter(cert) {
  if (activeFilter === "all") return true;
  if (activeFilter === "cenni") return cert.cenni;
  if (activeFilter === "featured") return cert.featured;
  return cert.category === activeFilter;
}

function renderCertifications() {
  if (!grid || !searchInput) return;

  const query = normalizeText(searchInput.value.trim());
  const visible = certifications.filter((cert) => {
    const searchable = normalizeText(`${cert.name} ${cert.provider} ${cert.desc}`);
    return matchesFilter(cert) && searchable.includes(query);
  });

  grid.innerHTML = visible
    .map(
      (cert) => `
        <article class="cert-card">
          <div class="cert-topline">
            <span>${cert.provider}</span>
            ${cert.featured ? '<strong class="pill star">Mas vendida</strong>' : ""}
          </div>
          <h3>${cert.name}</h3>
          <p>${cert.desc}</p>
          <div class="cert-tags">
            <span class="pill">${cert.category === "english" ? "Ingles" : "Informatica"}</span>
            ${cert.cenni ? '<span class="pill cenni-pill">Compatible CENNI</span>' : ""}
          </div>
          <button class="add-button" type="button" data-cert="${cert.name}">Agregar a solicitud</button>
        </article>
      `,
    )
    .join("");

  if (!visible.length) {
    grid.innerHTML = '<p class="no-results">No encontramos coincidencias. Prueba con otro termino o solicita ayuda de un asesor.</p>';
  }
}

function renderCart() {
  if (!cartItems || !cartCount) return;

  cartCount.textContent = cart.length;
  if (!cart.length) {
    cartItems.innerHTML = '<p class="empty-cart">Agrega certificaciones para solicitar agenda y cotizacion.</p>';
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
          <div>
            <strong>${item.name}</strong>
            <span>${item.provider}</span>
          </div>
          <button type="button" aria-label="Quitar ${item.name}" data-remove="${item.name}">x</button>
        </div>
      `,
    )
    .join("");
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}

if (grid) {
  grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-cert]");
    if (!button) return;

    const cert = certifications.find((item) => item.name === button.dataset.cert);
    if (!cert || cart.some((item) => item.name === cert.name)) {
      showToast("Esa certificacion ya esta en tu solicitud.");
      return;
    }

    cart = [...cart, cert];
    renderCart();
    showToast(`${cert.name} agregada al carrito asesorado.`);
    document.querySelector("#carrito")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

if (cartItems) {
  cartItems.addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove]");
    if (!button) return;
    cart = cart.filter((item) => item.name !== button.dataset.remove);
    renderCart();
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderCertifications();
  });
});

searchInput?.addEventListener("input", renderCertifications);

navToggle?.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  nav?.classList.toggle("open", !expanded);
});

leadForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(leadForm);
  const selected = cart.map((item) => item.name).join(", ") || "sin certificacion seleccionada";
  const message = encodeURIComponent([
    "Solicitud DOCEO",
    `Cliente: ${formData.get("name")}`,
    `Telefono: ${formData.get("phone")}`,
    `Objetivo: ${formData.get("goal")}`,
    `Certificaciones: ${selected}`,
  ].join("\n"));

  showToast("Solicitud lista. Abriendo WhatsApp para contactar a un asesor.");
  window.open(`https://wa.me/?text=${message}`, "_blank", "noopener,noreferrer");
});

renderCertifications();
renderCart();
