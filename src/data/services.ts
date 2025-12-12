export type ServiceDetail = {
  slug: string;
  name: string;
  summary: string;
  heroTitle: string;
  heroSubtitle: string;
  overview: string[];
  highlights: string[];
  image: {
    src: string;
    alt: string;
  };
  seoDescription: string;
  keywords: string[];
};

export const services: ServiceDetail[] = [
  {
    slug: "implants",
    name: "Dental Implants",
    summary:
      "Prosthetically driven and digitally planned implant placement with clinically proven, high quality bio-materials.",
    heroTitle: "Dental Implants",
    heroSubtitle:
      "Life-proof smiles crafted with CBCT planning, intraoral scanning, and custom titanium or zirconia solutions.",
    overview: [
      "We combine 3D printing, platelet-rich fibrin, and photogrammetry to deliver implants that integrate faster and feel indistinguishable from natural teeth.",
      "From single-tooth replacement to complex reconstruction after trauma, every case is mapped for function, esthetics, and longevity.",
    ],
    highlights: [
      "CBCT-guided surgical planning",
      "Full-arch reconstruction",
      "Zygomatic, pterygoid, and custom implant options",
      "PRF + bone regeneration protocols",
    ],
    image: {
      src: "/services/implants.jpg",
      alt: "Digital implant planning on large monitor",
    },
    seoDescription:
      "Dental implants in Wellington, FL with fully guided placement, regenerative techniques, and concierge comfort by Elite Oral Surgery.",
    keywords: [
      "dental implants Wellington",
      "guided implant surgery",
      "implant dentist",
      "same day dental implants",
    ],
  },
  {
    slug: "all-on-x",
    name: "All-on-X",
    summary:
      "Full-arch implant transformations delivered with the highest safety standards at every stage and your final smile and functional goals in mind.",
    heroTitle: "All-on-X Full-Arch",
    heroSubtitle:
      "Transformative smile designs with four to six implants, immediate load temporaries, and on-site lab customization.",
    overview: [
      "Our All-on-X workflow blends digital smile design, photogrammetry, and PMMA temporaries so you wake up with a confident smile.",
      "We coordinate with your restorative dentist or deliver complete prosthetics in-house for seamless care.",
    ],
    highlights: [
      "Day-of-surgery provisional smile",
      "Anesthesia + comfort concierge",
      "Pink esthetics sculpting",
      "Maintenance and  program",
    ],
    image: {
      src: "/services/all-on-x.jpg",
      alt: "Patient smiling after All-on-X treatment",
    },
    seoDescription:
      "All-on-X implant solutions in Wellington for full-arch smile transformations with immediate results and spa-like recovery.",
    keywords: [
      "all on x Wellington",
      "full arch implants",
      "teeth in a day",
      "implant supported dentures",
    ],
  },
  {
    slug: "iv-sedation",
    name: "IV Sedation",
    summary:
      "Board-certified anesthesia protocols tailored to your history, ensuring you remain relaxed, safe, and comfortable.",
    heroTitle: "IV Sedation & Anesthesia",
    heroSubtitle:
      "Experience advanced oral surgery care while fully relaxed with personalized sedation medicine delivered by hospital-trained surgeons.",
    overview: [
      "Each sedation plan begins with medical clearance, digital airway assessment, and anesthesia monitoring identical to hospital standards.",
      "We combine warm blankets, aromatherapy, and private recovery suites so you awaken calm and supported.",
    ],
    highlights: [
      "Board-certified anesthesia provider",
      "Continuous monitoring with electronic anesthesia charting",
      "Private recovery suite",
      "Tailored post-op comfort kits",
    ],
    image: {
      src: "/services/iv-sedation.jpg",
      alt: "Patient resting comfortably under blanket",
    },
    seoDescription:
      "Elite IV sedation dentistry in Wellington with hospital-level monitoring and concierge recovery amenities.",
    keywords: [
      "IV sedation dentistry",
      "sleep dentistry Wellington",
      "oral surgery anesthesia",
      "sedation oral surgeon",
    ],
  },
  {
    slug: "wisdom-teeth-removal",
    name: "Wisdom Teeth Removal",
    summary:
      "Predictable, gentle third-molar extractions using Enhanced Recovery After Surgery (ERAS) protocols and personalized post-operative care.",
    heroTitle: "Wisdom Teeth Removal",
    heroSubtitle:
      "Modern diagnostics ensure we remove third molars before they threaten surrounding teeth, airways, or orthodontic results.",
    overview: [
      "We time removal based on root development, airway considerations, and your orthodontic plan to make recovery smoother.",
      "PRF, ozone therapy, and personalized post-op care kits help reduce swelling and speed healing.",
    ],
    highlights: [
      "3D CBCT nerve mapping",
      "PRF to reduce risk of dry sockets",
      "Exparel to reduce post-operative pain",
      "Sedation options for your comfort",
    ],
    image: {
      src: "/services/wisdom-teeth.jpg",
      alt: "Teen smiling in dental chair",
    },
    seoDescription:
      "Comfort-focused wisdom teeth removal in Wellington with CBCT planning, IV sedation, and regenerative healing.",
    keywords: [
      "wisdom teeth removal",
      "oral surgeon Wellington",
      "painless wisdom tooth extraction",
      "third molar surgery",
    ],
  },
  {
    slug: "tooth-extractions",
    name: "Tooth Extractions",
    summary:
      "Atraumatic removal techniques that protect bone volume and pave the way for bone regeneration and dental implant placement.",
    heroTitle: "Tooth Extractions",
    heroSubtitle:
      "Whether due to decay, fractures, or orthodontic needs, we remove teeth with precision and immediate site preservation.",
    overview: [
      "We utilize periotomes, Piezosurgery, and socket-shield concepts whenever indicated to preserve bone and soft tissue.",
      "Same-day grafting options ensure your implant timeline stays on track.",
    ],
    highlights: [
      "Socket preservation grafts",
      "Guided tissue regeneration techniques",
      "Custom bone grafting techniques",
      "Interdisiplinary collaboration with your dentist",
    ],
    image: {
      src: "/services/extractions.jpg",
      alt: "Oral surgeon preparing instruments",
    },
    seoDescription:
      "Atraumatic tooth extractions in Wellington with socket preservation and sedation options tailored to you.",
    keywords: [
      "tooth extraction Wellington",
      "atraumatic extraction",
      "socket preservation",
      "oral surgery tooth removal",
    ],
  },
  {
    slug: "bone-grafting",
    name: "Bone Grafting",
    summary:
      "Regenerative bone grafting techniques to restore volume of lost bone for future implant placement.",
    heroTitle: "Bone & Soft Tissue Grafting",
    heroSubtitle:
      "Advanced biologics, membranes, and 3D-printed scaffolds restore the foundation for implants and facial harmony.",
    overview: [
      "We pair autogenous grafts with growth factors, collagen membranes, or titanium meshes for predictable volume gain.",
      "Soft-tissue grafting refines esthetics while stabilizing peri-implant health.",
    ],
    highlights: [
      "High-quality clinically proven bio-materials",
      "Ridge-split + tenting techniques",
      "PRF + BMP regenerative options",
      "3D CBCT planning for optimal graft placement",
    ],
    image: {
      src: "/services/bone-grafting.jpg",
      alt: "3D imaging scan for bone graft planning",
    },
    seoDescription:
      "Bone grafting in Wellington featuring sinus lifts, ridge augmentation, and advanced biologics for implant readiness.",
    keywords: [
      "bone grafting Wellington",
      "sinus lift",
      "ridge augmentation",
      "PRF dentistry",
    ],
  },
  {
    slug: "biopsy-pathology",
    name: "Biopsy & Pathology",
    summary:
      "Expert diagnosis and treatment of oral mucosal lesions, cysts, and abnormal tissue.",
    heroTitle: "Biopsy & Pathology",
    heroSubtitle:
      "Early detection and accurate diagnosis of oral lesions, tumors, and abnormalities with advanced tissue analysis.",
    overview: [
      "Our team performs comprehensive oral examinations and biopsies to diagnose a wide range of conditions, from benign cysts to precancerous lesions.",
      "We coordinate with pathology laboratories and oncology specialists when needed to ensure you receive timely, accurate diagnoses and appropriate treatment plans.",
    ],
    highlights: [
      "Incisional and excisional biopsy techniques",
      "Cyst and tumor evaluation",
      "Oral cancer screening",
      "Coordination with oncology specialists",
    ],
    image: {
      src: "/services/pathology.jpg",
      alt: "Oral pathology examination",
    },
    seoDescription:
      "Oral biopsy and pathology services in Wellington for accurate diagnosis of lesions, cysts, and oral abnormalities.",
    keywords: [
      "oral biopsy Wellington",
      "oral pathology",
      "oral cancer screening",
      "cyst removal oral surgeon",
    ],
  },
  {
    slug: "emergency-care",
    name: "Emergency Care",
    summary:
      "Rapid access to emergency care for facial or dental trauma, dental infections, and post-surgical concerns.",
    heroTitle: "Emergency Care",
    heroSubtitle:
      "We accept emergency patients and are equipped to handle a wide range of dental emergencies.",
    overview: [],
    highlights: [
      "Same-day emergency services",
      "Infected teeth extraction",
      "Abscess and infection management",
      "Pain management solutions",
    ],
    image: {
      src: "/services/emergency.jpg",
      alt: "Surgeon reviewing emergency imaging",
    },
    seoDescription:
      "Emergency oral surgery in Wellington for trauma, infections, and urgent implant or extraction complications.",
    keywords: [
      "emergency oral surgeon",
      "facial trauma dentist",
      "dental emergency Wellington",
      "abscess drainage oral surgery",
    ],
  },
  {
    slug: "orthognathic-surgery",
    name: "Orthognathic Surgery",
    summary:
      "Corrective jaw surgery tailored to improve bite and facial harmony.",
    heroTitle: "Orthognathic Surgery",
    heroSubtitle:
      "We partner with orthodontists to reposition jaws, unlock airway space, and harmonize facial esthetics.",
    overview: [
      "Virtual surgical planning and cutting guides ensure jaw movements are exact, efficient, and safe.",
      "Comprehensive follow-up, nutrition support, and airway monitoring safeguard your recovery.",
    ],
    highlights: [
      "Virtual surgical planning (VSP)",
      "Custom surgical guides",
      "3D printed surgical splints",
      "Coordinated orthodontic care",
    ],
    image: {
      src: "/services/jaw-surgery.jpg",
      alt: "3D jaw model used for orthognathic planning",
    },
    seoDescription:
      "Orthognathic surgery in Wellington with virtual planning, airway-focused outcomes, and curated recovery pathways.",
    keywords: [
      "orthognathic surgery",
      "jaw surgery Wellington",
      "sleep apnea jaw surgery",
      "VSP oral surgeon",
    ],
  },
  {
    slug: "tmj-facial-pain",
    name: "TMJ & Facial Pain",
    summary:
      "Detailed diagnostic services and surgical management of temporomandibular joint (TMJ) and facial pain disorders.",
    heroTitle: "TMJ & Facial Pain Disorders",
    heroSubtitle:
      "Comprehensive evaluation and treatment of temporomandibular joint dysfunction and chronic facial pain conditions.",
    overview: [
      "Our team provides thorough diagnostic workups including imaging, clinical examination, and bite analysis to identify the root cause of your TMJ or facial pain symptoms.",
      "Treatment options range from conservative therapies and splint therapy to advanced surgical interventions when necessary, all tailored to restore comfort and function.",
    ],
    highlights: [
      "Comprehensive 3D CBCT TMJ imaging",
      "Certified Maxillofacial radiology interpretation",
      "Non-surgical and surgical management options",

    ],
    image: {
      src: "/services/tmj.png",
      alt: "TMJ examination and diagnosis",
    },
    seoDescription:
      "TMJ and facial pain treatment in Wellington with comprehensive diagnostics and personalized surgical and non-surgical management options.",
    keywords: [
      "TMJ treatment Wellington",
      "facial pain specialist",
      "TMJ disorder oral surgeon",
      "jaw pain treatment",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

