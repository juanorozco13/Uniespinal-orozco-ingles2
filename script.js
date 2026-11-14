/* ============================================================
   WEB PROFILE TEMPLATE - SCRIPT
   UniEspinal · Técnico Profesional en Programación Web

   THIS IS THE FILE YOU WILL WORK ON THE MOST.

   Below there are two dictionaries: ES and EN.
   They have exactly the same keys, but different texts.

   IMPORTANT: the English version is NOT a translation of the
   Spanish version. A professional profile in English follows
   different rules. Read NOTES.md before you write it.
   ============================================================ */


/* ------------------------------------------------------------
   1. SPANISH TEXTS
   ------------------------------------------------------------ */
const ES = {
  "nav.home":      "JUAN DAVID OROZCO GOMEZ",
  "nav.about":     "I am a Web Programming student at UniEspinal with a strong interest in website development and information technology. I have basic knowledge of HTML, CSS, JavaScript, and computer systems. I enjoy learning new technologies, building practical projects, and solving technical problems. I am currently seeking an internship opportunity where I can contribute, develop my skills, and gain hands-on experience.",
  "nav.skills":    "PROGRAMAR",
  "nav.resume":    "HACER BIEN MI TRABAJO",
  "nav.portfolio": "ARROZCONECTA",
  "nav.contact":   "3112243040",

  "hero.role": "Desarrollador Web · Soporte Técnico",

  "about.title":          "About Me",
  "about.text":          "I am a Web Programming student at UniEspinal with a strong interest in website development and information technology. I have basic knowledge of HTML, CSS, JavaScript, and computer systems. I enjoy learning new technologies, building practical projects, and solving technical problems. I am currently seeking an internship opportunity where I can contribute, develop my skills, and gain hands-on experience.",
  "about.infoTitle":      "Personal Information",
  "about.labelLocation":  "Manzana 13A Casa 5 Barrio Balkanes",
  "about.valueLocation":  "EL ESPINAL - TOLIMA, Colombia",
  "about.labelEmail":     "JUANCHOG765@GMAIL.COM",
  "about.labelLanguages": "Spanish",
  "about.valueLanguages": "Spanish (native) · English (basic)",
  "about.labelStatus":    "Availability",
  "about.valueStatus":    "Available for internships",
  "about.interestsTitle": "Interests",

  "interest.1": "PROGRAMMING",
  "interest.2": "IT SUPPORT",
  "interest.3": "TECHNOLOGY",
  "interest.4": "GAMING",

  "skills.title":        "PROGRAMADOR",
  "skills.technical":    "PROGRAMAR",
  "skills.professional": "NINGUNA",
  "skill.support":       "User support",
  "skill.teamwork":      "Teamwork",
  "skill.problem":       "Problem solving",
  "skill.english":       "Technical English",

  "resume.title":      "Education and Experience",
  "resume.education":  "Formación",
  "resume.experience": "Experiencia",

  "edu.1.title": "Técnico Profesional en Programación Web",
  "edu.1.text":  "[Una o dos frases sobre lo que estás aprendiendo y qué sabes hacer ahora.]",
  "edu.2.title": "[Curso o certificación]",
  "edu.2.text":  "[Qué aprendiste y para qué te sirve.]",

  "exp.1.title": "[Rol o tipo de proyecto]",
  "exp.1.text":  "[Qué hiciste, con qué herramientas y qué resultado tuvo.]",
  "exp.2.title": "[Rol o tipo de proyecto]",
  "exp.2.text":  "[Qué hiciste, con qué herramientas y qué resultado tuvo.]",

  "portfolio.title": "Proyectos",
  "project.1.title": "[Nombre del proyecto]",
  "project.1.text":  "[Tecnologías usadas]",
  "project.2.title": "[Nombre del proyecto]",
  "project.2.text":  "[Tecnologías usadas]",
  "project.3.title": "[Nombre del proyecto]",
  "project.3.text":  "[Tecnologías usadas]",

  "contact.title":         "Contacto",
  "contact.intro":         "[Una frase invitando a escribirte. Por ejemplo: ¿Tienes un proyecto o una vacante? Escríbeme.]",
  "contact.emailLabel":    "Correo",
  "contact.linkedinValue": "[Tu perfil profesional]",

  "footer.note": "[Tu nombre] · Técnico Profesional en Programación Web · UniEspinal"
};


/* ------------------------------------------------------------
   2. ENGLISH TEXTS

   Before writing this section, remember:
   - Use action verbs: built, configured, fixed, tested, supported.
   - Do not include age, marital status or a home address.
   - Do not translate word by word. Rewrite.
   ------------------------------------------------------------ */
const EN = {
  "nav.home":      "HOME",
  "nav.about":     "ABOUT",
  "nav.skills":    "SKILLS",
  "nav.resume":    "RESUME",
  "nav.portfolio": "PROJECTS",
  "nav.contact":   "CONTACT",

  "hero.role": "Web Developer · Technical Support",

  "about.title":          "About Me",
  "about.text":           "[Write two or three sentences about yourself: what you study, what interests you in web development, and what you are looking for now.]",
  "about.infoTitle":      "Information",
  "about.labelLocation":  "Location",
  "about.valueLocation":  "[City], Colombia",
  "about.labelEmail":     "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · English ([your level])",
  "about.labelStatus":    "Availability",
  "about.valueStatus":    "Open to internships",
  "about.interestsTitle": "Interests",

  "interest.1": "CODE",
  "interest.2": "SUPPORT",
  "interest.3": "READING",
  "interest.4": "GAMING",

  "skills.title":        "Skills",
  "skills.technical":    "Technical skills",
  "skills.professional": "Professional skills",
  "skill.support":       "User support",
  "skill.teamwork":      "Teamwork",
  "skill.problem":       "Problem solving",
  "skill.english":       "Technical English",

  "resume.title":      "Education and experience",
  "resume.education":  "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.text":  "[One or two sentences about what you are learning and what you can do now.]",
  "edu.2.title": "[Course or certificate]",
  "edu.2.text":  "[What you learned and how you use it.]",

  "exp.1.title": "[Role or type of project]",
  "exp.1.text":  "[What you did, which tools you used, and what the result was.]",
  "exp.2.title": "[Role or type of project]",
  "exp.2.text":  "[What you did, which tools you used, and what the result was.]",

  "portfolio.title": "Projects",
  "project.1.title": "[Project name]",
  "project.1.text":  "[Technologies used]",
  "project.2.title": "[Project name]",
  "project.2.text":  "[Technologies used]",
  "project.3.title": "[Project name]",
  "project.3.text":  "[Technologies used]",

  "contact.title":         "3112243040",
  "contact.intro":         "[One sentence inviting people to write to you. Example: Have a project or a vacancy? Send me a message.]",
  "contact.emailLabel":    "Email",
  "contact.linkedinValue": "[Your professional profile]",

  "footer.note": "[Your name] · Professional Technician in Web Programming · UniEspinal"
};


/* ============================================================
   3. LANGUAGE SWITCHER
   You do not need to change the code below.
   ============================================================ */

const DICCIONARIOS = { es: ES, en: EN };
let idiomaActual = "es";

function aplicarIdioma(idioma) {
  const textos = DICCIONARIOS[idioma];
  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {
    const clave = elemento.getAttribute("data-i18n");
    if (textos[clave] !== undefined) {
      elemento.textContent = textos[clave];
    } else {
      console.warn("Missing translation key:", clave);
    }
  });

  document.documentElement.lang = idioma;

  const boton = document.getElementById("btn-idioma");
  if (boton) {
    const otro = idioma === "es" ? "en" : "es";
    boton.innerHTML =
      '<span class="idioma-activo">'   + idioma.toUpperCase() + '</span>' +
      '<span class="idioma-sep">/</span>' +
      '<span class="idioma-inactivo">' + otro.toUpperCase()   + '</span>';
    boton.setAttribute("aria-label",
      idioma === "es" ? "Switch to English" : "Cambiar a español");
  }

  idiomaActual = idioma;
}

function cambiarIdioma() {
  aplicarIdioma(idiomaActual === "es" ? "en" : "es");
}


/* ============================================================
   4. RESPONSIVE MENU
   ============================================================ */

let menuVisible = false;

function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  menuVisible = !menuVisible;
  nav.className = menuVisible ? "responsive" : "";
}

function cerrarMenu() {
  document.getElementById("nav").className = "";
  menuVisible = false;
}


/* ============================================================
   5. SKILL BARS

   The width comes from the data-percent attribute in index.html.
   You can add or remove skills freely: this code does not depend
   on how many there are.
   ============================================================ */

function animarHabilidades() {
  const barras = document.querySelectorAll(".progreso");

  const mostrar = barra => {
    const porcentaje = barra.getAttribute("data-percent") || "0";
    barra.style.width = porcentaje + "%";
    const etiqueta = barra.querySelector("span");
    if (etiqueta) etiqueta.textContent = porcentaje + "%";
  };

  if (!("IntersectionObserver" in window)) {
    barras.forEach(mostrar);
    return;
  }

  const observador = new IntersectionObserver((entradas, obs) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        mostrar(entrada.target);
        obs.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.4 });

  barras.forEach(barra => observador.observe(barra));
}


/* ============================================================
   6. START
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma("es");
  animarHabilidades();
});
