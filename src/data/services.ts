export type ServiceDetail = {
  slug: string;
  name: string;
  summary: string;
  heroTitle: string;
  highlights: string[];
  image: {
    src: string;
    alt: string;
  };
  seoDescription: string;
  keywords: string[];
  // Page content
  whatToExpect: {
    title: string;
    paragraphs: string[];
  };
  idealCandidates: {
    title: string;
    items: string[];
  };
  // Optional customizations
  showHighlights?: boolean; // defaults to true
  ctaText?: string; // custom CTA text above buttons
};

export const services: ServiceDetail[] = [
  {
    slug: "implants",
    name: "Dental Implants",
    summary:
      "Prosthetically driven and digitally planned implant placement with clinically proven, high quality bio-materials.",
    heroTitle: "Dental Implants",
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
    whatToExpect: {
      title: "Your Dental Implant Journey",
      paragraphs: [
        "Dental implants are titanium posts surgically placed into your jawbone to serve as artificial tooth roots. Once healed, they provide a stable foundation for crowns, bridges, or dentures that look, feel, and function like natural teeth.",
        "The process typically involves an initial consultation with 3D imaging, implant placement surgery, a healing period of at least 3 months for osseointegration, and finally the placement of your custom restoration.",
      ],
    },
    idealCandidates: {
      title: "Are Implants Right for You?",
      items: [
        "Want to confidently bite, chew, and smile again",
        "Missing one or more teeth",
        "Seeking a long-term, permanent solution",
        "Frustration with your removable dentures",
      ],
    },
  },
  {
    slug: "all-on-x",
    name: "All-on-X",
    summary:
      "Full-arch implant transformations delivered with the highest safety standards at every stage and your final smile and functional goals in mind.",
    heroTitle: "All-on-X Full-Arch",
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
    whatToExpect: {
      title: "Your Full-Arch Transformation",
      paragraphs: [
        "All-on-X is a revolutionary technique that replaces an entire arch of teeth using four to six strategically placed implants. ",
        "The process includes comprehensive planning with digital imaging and temporary teeth placement, followed by healing and placement of your final custom prosthesis once the implants are fully integrated.",
      ],
    },
    idealCandidates: {
      title: "Is All-on-X Right for You?",
      items: [
        "Missing all or most teeth in an arch",
        "Tired of loose or uncomfortable dentures",
        "Want a non-removable, permanent solution",
        "Generally non-restorable teeth",
      ],
    },
    showHighlights: false,
    ctaText: "Start your smile transformation today",
  },
  {
    slug: "iv-sedation",
    name: "IV Sedation",
    summary:
      "Board-certified anesthesia protocols tailored to your history, ensuring you remain relaxed, safe, and comfortable.",
    heroTitle: "IV Sedation & Anesthesia",
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
    whatToExpect: {
      title: "Your Comfort Experience",
      paragraphs: [
        "IV sedation delivers medication directly into your bloodstream for a deeply relaxed state during your procedure. You'll remain breathing on your own while feeling calm and comfortable throughout.",
        "Our highly trained team will be by your side to monitor and support you every step of the way, ensuring your comfort and safety. After your procedure, you'll relax in our secluded recovery suite with attentive, personalized care until you're fully ready to head home.",
      ],
    },
    idealCandidates: {
      title: "Is IV Sedation Right for You?",
      items: [
        "Dental anxiety or fear",
        "Undergoing longer or complex procedures",
      ],
    },
  },
  {
    slug: "wisdom-teeth-removal",
    name: "Wisdom Teeth Removal",
    summary:
      "Predictable, gentle third-molar extractions using Enhanced Recovery After Surgery (ERAS) protocols and personalized post-operative care.",
    heroTitle: "Wisdom Teeth Removal",
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
    whatToExpect: {
      title: "Your Wisdom Teeth Journey",
      paragraphs: [
        "Wisdom teeth removal is one of the most common oral surgery procedures. Using 3D imaging, we carefully plan your extraction to minimize discomfort and reduce risk of complications.",
        "Most patients are back to normal activities within a few days. We provide detailed aftercare instructions and are available for any questions during your recovery.",
      ],
    },
    idealCandidates: {
      title: "When Should Wisdom Teeth Be Removed?",
      items: [
        "Impacted or partially erupted wisdom teeth",
        "Pain, swelling, or infection",
        "Crowding or damage to adjacent teeth",
        "Recommended by your dentist or orthodontist",
      ],
    },
  },
  {
    slug: "tooth-extractions",
    name: "Tooth Extractions",
    summary:
      "Atraumatic removal techniques that protect bone volume and pave the way for bone regeneration and dental implant placement.",
    heroTitle: "Tooth Extractions",
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
    whatToExpect: {
      title: "Your Extraction Experience",
      paragraphs: [
        "Whether due to decay, abcess, fracture, or orthodontic needs, we use gentle, atraumatic techniques to preserve bone and surrounding tissue for optimal healing.",
        "Bone grafting at time of extraction is available when needed to preserve the site for future implant placement. Multiple anesthesia options ensure your comfort throughout.",
      ],
    },
    idealCandidates: {
      title: "When Is Extraction Necessary?",
      items: [
        "Severe decay beyond repair",
        "Fractured or broken teeth",
        "Advanced periodontal disease",
        "Preparation for orthodontics or dentures",
      ],
    },
  },
  {
    slug: "bone-grafting",
    name: "Bone Grafting",
    summary:
      "Regenerative bone grafting techniques to restore volume of lost bone for future implant placement.",
    heroTitle: "Bone & Soft Tissue Grafting",
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
    whatToExpect: {
      title: "Your Bone Regeneration Journey",
      paragraphs: [
        "Bone grafting restores lost jawbone volume using advanced biomaterials, growth factors, and tissue handling techniques. This creates a solid foundation for dental implants.",
        "Healing of bone grafting typically takes 6 months as your body integrates the graft material. We monitor your progress throughout your journey to ensure optimal results.",
      ],
    },
    idealCandidates: {
      title: "Who Needs Bone Grafting?",
      items: [
        "Insufficient bone for dental implants",
        "Sinus augmentation needed for upper implants",
      ],
    },
  },
  {
    slug: "biopsy-pathology",
    name: "Biopsy & Pathology",
    summary:
      "Expert diagnosis and treatment of oral mucosal lesions, cysts, and abnormal tissue.",
    heroTitle: "Biopsy & Pathology",
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
    whatToExpect: {
      title: "Your Diagnostic Journey",
      paragraphs: [
        "Our team performs thorough oral examinations and precise biopsies when needed to diagnose a wide range of conditions. Tissue samples are analyzed in parternship with UF Health Oral Pathology Lab.",
        "Results typically return within 3 weeks. We'll discuss findings with you and coordinate any necessary follow-up care with other specialists.",
      ],
    },
    idealCandidates: {
      title: "When Is a Biopsy Needed?",
      items: [
        "Unexplained oral lesions or growths",
        "Persistent sores that don't heal",
        "Abnormal tissue changes",
        "Screening for oral cancer",
      ],
    },
  },
  {
    slug: "emergency-care",
    name: "Emergency Care",
    summary:
      "Rapid access to emergency care for facial or dental trauma, dental infections, and post-surgical concerns.",
    heroTitle: "Emergency Care",
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
    whatToExpect: {
      title: "Your Emergency Visit",
      paragraphs: [
        "Dental emergencies require prompt attention. Our team is equipped to handle facial trauma, severe infections, uncontrolled bleeding, and other urgent situations.",
        "We coordinate with emergency rooms and your dental team to stabilize injuries while planning for long-term restoration and recovery.",
      ],
    },
    idealCandidates: {
      title: "What Constitutes an Emergency?",
      items: [
        "Knocked out or broken teeth from facial trauma",
        "Severe facial swelling or infection",
        "Facial fractures",
        "Jaw dislocations",
      ],
    },
  },
  {
    slug: "orthognathic-surgery",
    name: "Orthognathic Surgery",
    summary:
      "Corrective jaw surgery tailored to improve bite and facial harmony.",
    heroTitle: "Orthognathic Surgery",
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
    whatToExpect: {
      title: "Your Jaw Surgery Journey",
      paragraphs: [
        "Orthognathic surgery corrects jaw alignment issues affecting your bite, breathing, and facial aesthetics. We use virtual surgical planning for precise, predictable results in coordination with your orthodontist.",
        "We make recovery tolerable with Enhanced Recovery After Surgery (ERAS) protocols and personalized post-operative care.",
      ],
    },
    idealCandidates: {
      title: "Is Jaw Surgery Right for You?",
      items: [
        "Significant bite misalignment",
        "Sleep apnea related to jaw position",
        "Facial asymmetry",
      ],
    },
  },
  {
    slug: "tmj-facial-pain",
    name: "TMJ & Facial Pain",
    summary:
      "Detailed diagnostic services and surgical management of temporomandibular joint (TMJ) and facial pain disorders.",
    heroTitle: "TMJ & Facial Pain Disorders",
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
    whatToExpect: {
      title: "Your TMJ Treatment Journey",
      paragraphs: [
        "We begin with comprehensive evaluation including a detailed history, imaging, and an evidence-based clinical examination to identify the source of your pain and dysfunction.",
        "Treatment may include conservative non-surgical care, occlusal guards, medications, physical therapy, Botox, or surgical options when indicated.",
      ],
    },
    idealCandidates: {
      title: "Signs You May Have TMJ Disorder",
      items: [
        "Jaw pain with eating, chewing, or speaking",
        "Clicking, popping, or locking of the jaw",
        "Difficulty chewing or opening mouth",
      ],
    },
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
