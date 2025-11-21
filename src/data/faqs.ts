export type FAQ = {
  question: string;
  answer: string | React.ReactNode;
  category: string;
};

export const faqs: FAQ[] = [
  // General
  {
    category: "General",
    question: "Do I need a referral from my dentist?",
    answer:
      "Referrals are appreciated but not required. Many patients come directly to us for implants, wisdom teeth, or trauma care. We'll collaborate with your dentist once treatment begins.",
  },
  {
    category: "Insurance",
    question: "What insurances do you accept?",
    answer:
      "Please view our Participating Insurances page at /resources/insurance for a complete list of accepted insurance plans.",
  },
  {
    category: "Insurance",
    question: "Do you accept HMO insurances?",
    answer:
      "No, we do not accept any HMO insurances. Please see the Participating Insurances page at /resources/insurance for more details on insurances we do accept.",
  },
  {
    category: "General",
    question: "What are your office hours?",
    answer:
      "We are open Monday through Friday, 8:00 AM to 5:00 PM. Emergency appointments are available for urgent cases. Please call (561) 790-0206 to schedule.",
  },
  {
    category: "Finances",
    question: "Do you offer payment plans?",
    answer:
      "Yes! We partner with Cherry and CareCredit to offer flexible financing options. Visit our Financing page at /resources/financing for more details.",
  },

  // Anesthesia & Sedation
  {
    category: "Anesthesia & Sedation",
    question: "What type of anesthesia do you offer?",
    answer:
      "We provide oral sedation, IV sedation, nitrous oxide, and local anesthesia. Your medical history, anxiety level, and procedure complexity help us tailor the safest option.",
  },
  {
    category: "Anesthesia & Sedation",
    question: "Will I need someone to drive me home?",
    answer:
      "Yes. If you receive oral sedation or IV sedation, a licensed adult must stay in the office during your procedure and escort you home afterward.",
  },
  {
    category: "Anesthesia & Sedation",
    question: "Is IV sedation safe?",
    answer:
      "Yes. Dr. London is trained and certified in IV sedation. We monitor vital signs continuously throughout your procedure to ensure your safety and comfort.",
  },
  {
    category: "Anesthesia & Sedation",
    question: "Will I be asleep during surgery?",
    answer:
      "With IV sedation, you'll be in a deeply relaxed state and likely won't remember the procedure. With local anesthesia alone, you'll be awake but numb in the treatment area.",
  },

  // Recovery & Aftercare
  {
    category: "Recovery & Aftercare",
    question: "How long is the typical recovery?",
    answer:
      "Most patients return to normal routines within 2–3 days for wisdom teeth or extractions, while implants and bone grafting may require 5–7 days of modified activity. Orthognathic or full-arch cases may require weeks to months of downtime.",
  },
  {
    category: "Recovery & Aftercare",
    question: "What can I eat after surgery?",
    answer:
      "Stick to soft foods for the first few days—smoothies, yogurt, mashed potatoes, scrambled eggs. Avoid hot, spicy, crunchy, or chewy foods until your surgeon approves.",
  },
  {
    category: "Recovery & Aftercare",
    question: "How do I manage pain after surgery?",
    answer:
      "We'll prescribe pain medication and provide detailed aftercare instructions. Most patients find over-the-counter pain relievers sufficient after the first 1-2 days.",
  },
  {
    category: "Recovery & Aftercare",
    question: "When can I return to work or school?",
    answer:
      "Most patients take 2-3 days off for wisdom teeth removal or extractions. More complex procedures may require 5-7 days. We'll provide a personalized timeline based on your procedure.",
  },

  // Dental Implants
  {
    category: "Dental Implants",
    question: "How long do dental implants last?",
    answer:
      "With proper care, dental implants can last 25+ years or even a lifetime. Regular dental hygiene and checkups are essential for long-term success.",
  },
  {
    category: "Dental Implants",
    question: "Am I a candidate for dental implants?",
    answer:
      "Most adults with adequate bone density are candidates. We'll evaluate your jaw structure, medical history, and oral health during your consultation.",
  },
  {
    category: "Dental Implants",
    question: "What is the success rate of dental implants?",
    answer:
      "Dental implants have a 95-98% success rate when placed by an experienced oral surgeon and properly maintained by the patient.",
  },
  {
    category: "Dental Implants",
    question: "How long does the implant process take?",
    answer:
      "The entire process typically takes 3-6 months. This includes initial placement, healing time for osseointegration, and final crown placement. Some cases may qualify for same-day teeth.",
  },

  // Wisdom Teeth
  {
    category: "Wisdom Teeth",
    question: "When should wisdom teeth be removed?",
    answer:
      "Ideally between ages 17-25 when roots are not fully formed. However, they can be removed at any age if causing pain, infection, crowding, or other problems.",
  },
  {
    category: "Wisdom Teeth",
    question: "Do all wisdom teeth need to be removed?",
    answer:
      "Not necessarily. If they're healthy, fully erupted, properly positioned, and can be cleaned daily, they may not need removal. We'll assess your specific situation.",
  },
  {
    category: "Wisdom Teeth",
    question: "Will my face swell after wisdom teeth removal?",
    answer:
      "Some swelling is normal and peaks around day 2-3. Ice packs, prescribed medications, and keeping your head elevated help minimize swelling.",
  },
];

// Helper function to get unique categories
export function getCategories(): string[] {
  return Array.from(new Set(faqs.map((faq) => faq.category))).sort();
}

// Helper function to filter FAQs
export function filterFAQs(searchQuery: string, category: string): FAQ[] {
  return faqs.filter((faq) => {
    // If no search query, match all
    if (searchQuery === "") {
      const matchesCategory = category === "All" || faq.category === category;
      return matchesCategory;
    }

    // Common stop words to filter out
    const stopWords = new Set([
      "a", "an", "and", "are", "as", "at", "be", "by", "do", "does", "for",
      "from", "has", "have", "i", "in", "is", "it", "of", "on", "or", "that",
      "the", "to", "was", "will", "with", "you", "your", "my", "we", "us",
      "can", "could", "should", "would", "may", "might", "must", "take", "get"
    ]);

    // Split search query into individual words, filter out stop words and short terms
    const searchTerms = searchQuery
      .toLowerCase()
      .split(/\s+/)
      .filter(term => term.length >= 3 && !stopWords.has(term));
    
    // If no valid search terms remain after filtering, return no results
    if (searchTerms.length === 0) {
      return false;
    }

    // Combine category, question and answer text for searching
    const categoryText = faq.category.toLowerCase();
    const questionText = faq.question.toLowerCase();
    const answerText = typeof faq.answer === "string" ? faq.answer.toLowerCase() : "";
    const combinedText = categoryText + " " + questionText + " " + answerText;

    // Check if ANY search term appears somewhere in the combined text (OR logic)
    const matchesSearch = searchTerms.some(term => combinedText.includes(term));
    const matchesCategory = category === "All" || faq.category === category;
    
    return matchesSearch && matchesCategory;
  });
}

