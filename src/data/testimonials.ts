/**
 * Patient Testimonials Data
 * 
 * Add or remove testimonials here to automatically update the homepage and testimonials page.
 * The first 3 testimonials will display on the homepage.
 */

export type Testimonial = {
  name: string;
  procedure: string;
  quote: string;
  caseDescription: string;
  photo: string; // Path to patient photo (use placeholder or actual photo)
};

export const testimonials: Testimonial[] = [
  {
    name: "Sophia M.",
    procedure: "Full-Arch Implant Patient",
    quote:
      "Dr. London restored my smile with All-on-X and I finally feel like myself again. The experience was elegant, calm, and unbelievably gentle.",
    caseDescription:
      "Sophia came to us seeking a permanent solution for her failing teeth. After a comprehensive consultation, we designed a custom All-on-X full-arch restoration. The procedure was completed under IV sedation, and within months, Sophia had a beautiful, functional smile that transformed her confidence and quality of life.",
    photo: "/testimonials/placeholder-1.jpg",
  },
  {
    name: "Jackson R.",
    procedure: "Trauma & Reconstruction Case",
    quote:
      "From IV sedation to follow-up calls, the entire team anticipates what you need before you know to ask. Elite truly defines concierge oral surgery.",
    caseDescription:
      "Following a sports injury that resulted in multiple fractured teeth and bone damage, Jackson required complex reconstruction. Our team performed bone grafting and dental implant placement with precision planning. Throughout his recovery, we provided comprehensive support and monitoring, ensuring optimal healing and a seamless return to normal function.",
    photo: "/testimonials/placeholder-2.jpg",
  },
  {
    name: "Emily W.",
    procedure: "Wisdom Teeth Patient",
    quote:
      "Wisdom teeth removal was surprisingly easy. I was relaxing in their comfort suite with herbal tea within an hour.",
    caseDescription:
      "Emily's wisdom teeth were impacted and causing discomfort. We extracted all four teeth using our gentle surgical techniques under IV sedation. She experienced minimal swelling and was back to her daily routine within days. Emily appreciated our calming environment and attentive post-operative care.",
    photo: "/testimonials/placeholder-3.jpg",
  },
];

