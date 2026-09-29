// Contenido centralizado del sitio. Estudio ficticio (demo).

export const site = {
  name: "Rapaz",
  legalName: "Estudio Jurídico Rapaz",
  tagline: "Defensa penal",
  url: "https://www.estudiorapaz.com.ar",
  phoneDisplay: "11 5555-0142",
  phoneHref: "tel:+541155550142",
  whatsappHref:
    "https://wa.me/5491155550142?text=Hola%2C%20necesito%20una%20consulta%20penal.",
  email: "consultas@estudiorapaz.com.ar",
  address: "Av. Corrientes 1250, piso 7",
  city: "Ciudad Autónoma de Buenos Aires",
  hours: "Lunes a viernes, 9 a 19 h · Urgencias las 24 h",
} as const;

export const nav = [
  { href: "#areas", label: "Áreas" },
  { href: "#metodo", label: "Método" },
  { href: "#estudio", label: "Estudio" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
] as const;

export type Area = {
  title: string;
  ref: string;
  summary: string;
};

export const areas: Area[] = [
  {
    title: "Detenciones y excarcelaciones",
    ref: "Código Procesal Penal",
    summary:
      "Presencia en la dependencia, control de la legalidad de la detención y pedido de libertad desde la primera audiencia.",
  },
  {
    title: "Delitos económicos y estafas",
    ref: "CP arts. 172 y 173",
    summary:
      "Defensa en causas por defraudación, administración fraudulenta y vaciamiento, con peritos contables propios.",
  },
  {
    title: "Lavado de activos",
    ref: "CP art. 303",
    summary:
      "Análisis del origen de fondos, reportes de operaciones sospechosas y defensa ante la UIF y la justicia federal.",
  },
  {
    title: "Estupefacientes",
    ref: "Ley 23.737",
    summary:
      "Tenencia, comercio y contrabando. Revisamos cada paso del allanamiento y la cadena de custodia de la prueba.",
  },
  {
    title: "Delitos informáticos",
    ref: "Ley 26.388",
    summary:
      "Accesos indebidos, fraudes digitales y difusión de material. Trabajamos con peritos informáticos de parte.",
  },
  {
    title: "Homicidios y lesiones",
    ref: "CP arts. 79 a 94",
    summary:
      "Defensa en causas dolosas y culposas, incluidos siniestros viales y casos de mala praxis médica.",
  },
  {
    title: "Querella y víctimas",
    ref: "Ley 27.372",
    summary:
      "Representamos a quien sufrió el delito: impulso de la investigación, prueba y reparación del daño.",
  },
];

export const steps = [
  {
    time: "Primeras 24 h",
    title: "Llegamos antes que el expediente",
    body: "Te acompañamos en la detención, el allanamiento o la citación. Nadie declara sin que hayamos hablado antes.",
  },
  {
    time: "Semana 1",
    title: "Leemos todo, dos veces",
    body: "Pedimos acceso a la causa y revisamos cada foja: plazos, nulidades, cadena de custodia y contradicciones de los testigos.",
  },
  {
    time: "Semana 2",
    title: "Estrategia por escrito",
    body: "Te entregamos un informe claro con escenarios posibles, riesgos y honorarios. Decidimos juntos el camino.",
  },
  {
    time: "Hasta la sentencia",
    title: "Juicio, recursos y seguimiento",
    body: "Litigamos en todas las instancias. Recibís un aviso cada vez que la causa se mueve, sin tener que preguntar.",
  },
] as const;

export const team = [
  {
    name: "Martín Rapaz",
    initials: "MR",
    role: "Socio fundador",
    bio: "Veinte años en defensa penal. Ex secretario de un juzgado de instrucción. Profesor de Derecho Procesal Penal (UBA).",
  },
  {
    name: "Lucía Ferreyra",
    initials: "LF",
    role: "Socia · Delitos económicos",
    bio: "Especialista en derecho penal económico y compliance. Coordina el equipo de peritos contables del estudio.",
  },
  {
    name: "Tomás Aguirre",
    initials: "TA",
    role: "Asociado · Litigio y recursos",
    bio: "Litiga ante tribunales orales y la Cámara Federal de Casación Penal. Lleva la guardia de urgencias.",
  },
] as const;

export const principles = [
  {
    title: "Secreto profesional",
    body: "Lo que nos contás queda entre vos y el estudio. Siempre.",
  },
  {
    title: "Honorarios por escrito",
    body: "Presupuesto cerrado antes de empezar, sin cargos sorpresa.",
  },
  {
    title: "Te avisamos primero",
    body: "Cada novedad de la causa te llega el mismo día.",
  },
] as const;

export const faqs = [
  {
    q: "Detuvieron a un familiar, ¿qué hago ahora?",
    a: "Llamá a la guardia de urgencias. Averiguá en qué comisaría o dependencia está y, si podés, el número de causa. Pedí que no declare sin abogado: es un derecho garantizado por el artículo 18 de la Constitución Nacional.",
  },
  {
    q: "¿Cuánto cuesta la primera consulta?",
    a: "La primera entrevista tiene un valor fijo que se descuenta de los honorarios si nos encargás el caso. En urgencias por detención, primero actuamos y después hablamos de honorarios.",
  },
  {
    q: "Me llegó una citación a indagatoria, ¿tengo que ir?",
    a: "Sí, tenés que presentarte, pero no estás obligado a declarar. Antes de la fecha revisamos la causa con vos y decidimos si conviene declarar, presentar un escrito o negarse.",
  },
  {
    q: "¿Atienden fuera de Buenos Aires?",
    a: "Sí. Tomamos causas en la justicia federal de todo el país y en tribunales provinciales. Las primeras reuniones pueden ser por videollamada.",
  },
  {
    q: "¿Pueden representarme si fui víctima de un delito?",
    a: "Sí. Podemos constituirnos como querellantes para impulsar la investigación, aportar prueba y reclamar la reparación del daño.",
  },
] as const;
