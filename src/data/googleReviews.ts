/**
 * Google Reviews Data
 * 
 * Add or remove Google reviews here to automatically update the homepage featured reviews section.
 */

export type GoogleReview = {
  name: string;
  rating: 5; // Google reviews shown are typically 5-star
  text: string;
};

export const googleReviews: GoogleReview[] = [
  {
    name: "Julio Gomez",
    rating: 5,
    text:
      "I came into Dr. London's care after I visited the ER due to an infection / complications from a recent wisdom teeth extraction done by another oral surgeon. Dr. London was the on call surgeon to assist with my treatment. He performed another surgery to remove a 5cm abcess in my mouth. Upon meeting Dr. London he was very polite and informative regarding the surgery needing to be done. The surgery went smoothly and Dr. London was very attentive during my recovery in the hospital checking on me daily. After I was discharged and made follow up appts with Dr London's office, I was met with a friendly and amazing staff. Macy was very helpful, kind , and an Eagles fan which made the appt more smoothly. I am grateful and thankful for Dr. London and his team. Will definitely recommend",
  },
  {
    name: "Marsha Martial",
    rating: 5,
    text:
      "Coming to this office was a great experience and I highly recommend coming to Dr. London. The whole team at Elite Oral Surgery are welcoming and made me wisdom teeth removal experience extremely pleasant. I have already advise some family member to come here because I know they will be in good hands.",
  },
  {
    name: "Alex Meno",
    rating: 5,
    text:
      "Dr. Michael London and his team provide an amazing experience during a normally unpleasant process. I had all 4 wisdom teeth needing extraction and went to 2 prior consultations before finding Elite Oral Surgery of Wellington. The entire team is friendly, show care and empathy for your situation, have amazing verbal and nonverbal communication, and perform the procedure with master class. The office is clean, the team is pleasant, the communication is amazing, and the surgery went perfect. No need for opioids and a very fast recovery. Dr. Michael London even took the time on a Saturday to call me and make sure everything was going well. That is next level patient treatment. This is not an office that wants to turn and burn patients, they care, communicate, and execute flawlessly. Thank you and any one looking for an excellent oral surgery center put your trust in Elite Oral Surgery of Wellington.",
  },
  {
    name: "Brianna Altida",
    rating: 5,
    text:
      "Kerri and Dr. London were phenomenal !! They made sure to be thorough with explaining the process and instructions before, during, & after my procedure. Front staff was extremely helpful and polite. Would recommend !!",
  },
  {
    name: "Judith",
    rating: 5,
    text:
      "Don't go anywhere else for oral surgery! Dr. London is an excellent doctor and surgeon. Who looks forward to seeing their oral surgeon? You will because he and his warm, kind and competent staff will take outstanding care of you. Ms. Ana at the front desk is extremely personable and professional. Kerri and Maci on the surgical team are amazing. The helped me through my procedures by making me laugh and holding my hand if I needed it! Give them a raise!",
  },
];

