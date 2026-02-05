export const IMAGES = {
  LOGO: "https://files.codingninjas.in/new-logo-03-11400.svg",
  HERO_THUMBNAIL: "https://files.codingninjas.in/group-11822-17676.png",
  
  // Unsplash Tech & Education Images
  COURSE_DSA: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80", // Algorithm/Code
  COURSE_WEB: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80", // Web Design
  COURSE_ML: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",  // AI/Data
  
  // Professional Mentor Portraits from Unsplash
  MENTOR_ANKUSH: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80", // Tech Executive
  MENTOR_NIDHI: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",  // Tech Lead
  MENTOR_MANISHA: "https://img.freepik.com/premium-photo/portrait-happy-graduate-posing_1148666-1792.jpg", // Software Engineer
  MENTOR_ARPIT: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",  // MERN Developer
};

export const NAV_LINKS = ["Courses", "Scholarships", "Practice", "Events"];

export const COURSES = [
  { 
    id: 1, 
    title: "Full Stack Web Development", 
    cat: "Web Dev", 
    img: IMAGES.COURSE_WEB, 
    tag: "Job Bootcamp" 
  },
  { 
    id: 2, 
    title: "Data Structures & Algorithms", 
    cat: "DSA", 
    img: IMAGES.COURSE_DSA, 
    tag: "Most Popular" 
  },
  { 
    id: 3, 
    title: "Machine Learning Masterclass", 
    cat: "Data Science", 
    img: IMAGES.COURSE_ML, 
    tag: "Advanced" 
  }
];

export const MENTORS = [
  { name: "Ankush Singla", role: "Co-founder, IIT Delhi", img: IMAGES.MENTOR_ANKUSH },
  { name: "Nidhi Agarwal", role: "Co-founder, IIT Delhi", img: IMAGES.MENTOR_NIDHI },
  { name: "Manish Khattar", role: "SDE @ Google", img: IMAGES.MENTOR_MANISHA },
  { name: "Arpit Mishra", role: "MERN Expert, AKGEC", img: IMAGES.MENTOR_ARPIT }
];

export const FOOTER_LINKS = {
  products: ["Courses", "Try for Free", "Scholarship", "Success Stories"],
  community: ["Coding Ninjas Studio", "Blog", "Events", "Campus Ninja"],
  company: ["About Us", "Contact Us", "Privacy Policy", "Terms & Conditions"]
};