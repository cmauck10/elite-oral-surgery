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
      "Digitally guided implant placement with same-day temporaries and regenerative biomaterials for long-term stability.",
    heroTitle: "Dental Implants",
    heroSubtitle:
      "Life-proof smiles crafted with CBCT planning, intraoral scanning, and custom titanium or zirconia solutions.",
    overview: [
      "We combine 3D printing, platelet-rich fibrin, and photogrammetry to deliver implants that integrate faster and feel indistinguishable from natural teeth.",
      "From single-tooth replacement to complex reconstruction after trauma, every case is mapped for function, esthetics, and longevity.",
    ],
    highlights: [
      "CBCT-guided surgical guides",
      "Same-day provisional crowns",
      "PRF + bone grafting protocols",
      "Zygomatic and pterygoid implant options",
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
      "Full-arch implant transformations delivered with photogrammetry, provisional smiles, and curated recovery pathways.",
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
      "Maintenance and warranty program",
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
      "Board-certified anesthesia protocols tailored to your history, ensuring you remain relaxed, safe, and deeply comfortable.",
    heroTitle: "IV Sedation & Anesthesia",
    heroSubtitle:
      "Experience advanced oral surgery care while fully relaxed with personalized sedation medicine delivered by hospital-trained surgeons.",
    overview: [
      "Each sedation plan begins with medical clearance, digital airway assessment, and anesthesia monitoring identical to hospital standards.",
      "We combine warm blankets, aromatherapy, and private recovery suites so you awaken calm and supported.",
    ],
    highlights: [
      "Board-certified anesthesia providers",
      "Smart pumps + continuous monitoring",
      "Private recovery lounges",
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
      "Predictable, gentle third-molar extractions with PRF, minimal swelling protocols, and curated recovery instructions.",
    heroTitle: "Wisdom Teeth Removal",
    heroSubtitle:
      "Modern diagnostics ensure we remove third molars before they threaten surrounding teeth, airways, or orthodontic results.",
    overview: [
      "We time removal based on root development, airway considerations, and your orthodontic plan to make recovery smoother.",
      "PRF, ozone therapy, and personalized post-op care kits help reduce swelling and speed healing.",
    ],
    highlights: [
      "3D CBCT nerve mapping",
      "Sedation options from nitrous to IV",
      "Weekend follow-up access",
      "Recovery concierge check-ins",
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
      "Atraumatic removal techniques that protect bone volume and pave the way for implants or grafting.",
    heroTitle: "Tooth Extractions",
    heroSubtitle:
      "Whether due to decay, fractures, or orthodontic needs, we remove teeth with precision and immediate site preservation.",
    overview: [
      "We utilize periotomes, Piezosurgery, and socket-shield concepts whenever indicated to preserve bone and soft tissue.",
      "Same-day grafting options ensure your implant timeline stays on track.",
    ],
    highlights: [
      "Socket preservation grafts",
      "Piezosurgery instrumentation",
      "Nitrous, oral, or IV sedation",
      "Collaboration with your dentist",
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
      "Regenerative bone and soft tissue grafting to rebuild arches for implants, orthodontics, or trauma repair.",
    heroTitle: "Bone & Soft Tissue Grafting",
    heroSubtitle:
      "Advanced biologics, membranes, and 3D-printed scaffolds restore the foundation for implants and facial harmony.",
    overview: [
      "We pair autogenous grafts with growth factors, collagen membranes, or titanium meshes for predictable volume gain.",
      "Soft-tissue grafting refines esthetics while stabilizing peri-implant health.",
    ],
    highlights: [
      "Sinus augmentation + lateral windows",
      "Ridge-split + tenting techniques",
      "PRF + BMP regenerative options",
      "Soft tissue microsurgery",
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
      "Expert diagnosis and treatment of oral lesions, cysts, and abnormal tissue with precise biopsy techniques.",
    heroTitle: "Biopsy & Oral Pathology",
    heroSubtitle:
      "Early detection and accurate diagnosis of oral lesions, tumors, and abnormalities with advanced tissue analysis.",
    overview: [
      "Our team performs comprehensive oral examinations and biopsies to diagnose a wide range of conditions, from benign cysts to precancerous lesions.",
      "We coordinate with pathology laboratories and oncology specialists when needed to ensure you receive timely, accurate diagnoses and appropriate treatment plans.",
    ],
    highlights: [
      "Incisional and excisional biopsy techniques",
      "Cyst and tumor removal",
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
      "Rapid access to oral surgeons for facial trauma, dental injuries, infections, and post-surgical concerns.",
    heroTitle: "Emergency Oral Surgery",
    heroSubtitle:
      "We accept emergency patients and are equipped to handle a wide range of dental emergencies.",
    overview: [
      "We coordinate with referring dentists to ensure expedited care to get you out of pain.",
    ],
    highlights: [
      "Same-day emergency services",
      "Infected teeth extraction",
      "Abscess + infection drainage",
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
      "Jaw surgery tailored for airway, bite harmony, and facial balance using virtual surgical planning.",
    heroTitle: "Orthognathic Surgery",
    heroSubtitle:
      "We partner with orthodontists to reposition jaws, unlock airway space, and harmonize facial esthetics.",
    overview: [
      "Virtual surgical planning and cutting guides ensure jaw movements are exact, efficient, and safe.",
      "Comprehensive follow-up, nutrition support, and airway monitoring safeguard your recovery.",
    ],
    highlights: [
      "Virtual surgical planning (VSP)",
      "Airway + sleep assessment",
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
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

