interface ReasonCardProps {
  icon: string;
  title: string;
  desc: string;
}

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Our Services', href: '/service' },
  { label: 'Our Team', href: '/team' },
];

export const partnerLogos = [
  '/images/partners/image-5.png',
  '/images/partners/image-6.png',
  '/images/partners/image-7.png',
];

export const portfolioItems = [
  {
    image: '/images/portfolio-01.jpg',
    tag: 'IT Strategy',
    title: 'Digital Transformation & System Architecture',
  },
  {
    image: '/images/portfolio-02.jpg',
    tag: 'Data & AI',
    title: 'AI & Data Analytics for Strategic Decision-Making',
  },
  {
    image: '/images/portfolio-03.jpg',
    tag: 'Cybersecurity',
    title: 'Cybersecurity & Compliance Consulting',
  },
  {
    image: '/images/portfolio-04.jpg',
    tag: 'Events',
    title: 'Technical & Scientific Event Management',
  },
];

export const services = [
    {
      image: '/images/service-01.jpg',
      icon: '/icons/icon-10.png',
      title: 'Financial Guidance',
      desc: 'We focus on the best practices for it solutions and services.',
    },
    {
      image: '/images/service-02.jpg',
      icon: '/icons/icon-11.png',
      title: 'Business Campaign',
      desc: 'We focus on the best practices for it solutions and services.',
    },
    {
      image: '/images/service-03.jpg',
      icon: '/icons/icon-12.png',
      title: 'Business Planning',
      desc: 'We focus on the best practices for it solutions and services.',
    },
    {
      image: '/images/service-10.jpg',
      icon: '/icons/icon-13.png',
      title: 'Business Strategy',
      desc: 'We focus on the best practices for it solutions and services.',
    },
];

export const teamMembers = [
    {
      image: '/images/team/alvaro.jpg',
      name: 'Álvaro Rocha',
      position: 'Chairman',
      socialMedia: {
        facebook: 'https://facebook.com/johndoe',
        twitter: 'https://twitter.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe',
      },
    },
    {
      image: '/images/team/profilepicture-955x1024.jpg',
      name: 'Tiago Carvalho',
      position: 'Consultant',
      socialMedia: {
        facebook: 'https://facebook.com/janesmith',
        twitter: 'https://twitter.com/janesmith',
        linkedin: 'https://linkedin.com/in/janesmith',
      },
    },
        {
      image: '/images/team/Jose-Braga.jpg',
      name: 'José Braga de Vasconcelos',
      position: 'Consultant',
      socialMedia: {
        facebook: 'https://facebook.com/johndoe',
        twitter: 'https://twitter.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe',
      },
    },
    {
      image: '/images/team/image-8-268x300.png',
      name: 'Fadele Ayotunde',
      position: 'Consultant',
      socialMedia: {
        facebook: 'https://facebook.com/janesmith',
        twitter: 'https://twitter.com/janesmith',
        linkedin: 'https://linkedin.com/in/janesmith',
      },
    },
        {
      image: '/images/team/Shashi-300x300.jpg',
      name: 'Shashi Kant Gupta',
      position: 'Consultant',
      socialMedia: {
        facebook: 'https://facebook.com/johndoe',
        twitter: 'https://twitter.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe',
      },
    },
    {
      image: '/images/team/1b5dda0f-3681-400d-9fbc-d0e77a675e8c-3-1-286x300.jpg',
      name: 'António José Araújo',
      position: 'Consultant',
      socialMedia: {
        facebook: 'https://facebook.com/janesmith',
        twitter: 'https://twitter.com/janesmith',
        linkedin: 'https://linkedin.com/in/janesmith',
      },
    },
    {
      image: '/images/team/Anton-Vasiliev-295x300.jpg',
      name: 'Anton Vasiliev',
      position: 'Consultant',
      socialMedia: {
        facebook: 'https://facebook.com/janesmith',
        twitter: 'https://twitter.com/janesmith',
        linkedin: 'https://linkedin.com/in/janesmith',
      },
    },
    {
      image: '/images/team/ArturRocha-269x300.jpg',
      name: 'Artur Rocha',
      position: 'Consultant',
      socialMedia: {
        facebook: 'https://facebook.com/janesmith',
        twitter: 'https://twitter.com/janesmith',
        linkedin: 'https://linkedin.com/in/janesmith',
      },
    },
    {
      image: '/images/team/image-7-291x300.png',
      name: 'Miguel Sousa',
      position: 'Consultant',
      socialMedia: {
        facebook: 'https://facebook.com/janesmith',
        twitter: 'https://twitter.com/janesmith',
        linkedin: 'https://linkedin.com/in/janesmith',
      },
    },
  ];

export const slides = [
  {
    image: '/images/hero-1.jpg',
    heading: 'Empowering Your Mission with Insight & Strategy',
    subtext: 'AMARITS delivers digital solutions, research, and innovation to drive real impact.',
  },
  {
    image: '/images/hero-2.jpg',
    heading: 'Guiding Digital Transformation with Expertise & Innovation',
    subtext: 'We help organizations adapt, scale, and thrive through expert consulting.',
  },
  {
    image: '/images/hero-3.jpg',
    heading: 'Transforming Data into Results with Precision & Purpose',
    subtext: 'Transform insights into actions with our data-driven and research-backed solutions.',
  },
];


export const tabs = [
  {
    text: 'TECH & SYSTEMS',
    desc: 'We help organizations navigate digital transformation through strategic IT consulting, system integration, AI-driven solutions, cybersecurity, and custom software development tailored to business needs.',
  },
  {
    text: 'EVENT MANAGEMENT',
    desc: 'We provide end-to-end management for technical and scientific events—from concept and logistics to speaker curation and tech-enabled execution—delivering seamless and impactful experiences.',
  },
  {
    text: 'STRATEGIC PARTNER',
    desc: 'We work side-by-side with businesses, institutions, and research bodies to align vision with execution, offering tailored, innovative strategies for sustainable success.',
  },
];

// Optional: Move data outside component for cleaner structure
export const reasonData: ReasonCardProps[] = [
  {
    icon: '/icons/icon-05.png',
    title: 'Cost-Saving Innovation',
    desc: 'We identify smart, scalable ways to cut expenses without compromising performance—driving efficiency and maximizing ROI.',
  },
  {
    icon: '/icons/icon-06.png',
    title: 'Accelerated Growth',
    desc: 'Our strategies are designed to fuel business expansion, unlock new markets, and build a strong, future-ready foundation.',
  },
  {
    icon: '/icons/icon-07.png',
    title: 'Proven Excellence',
    desc: 'Recognized for quality and results, we bring award-winning expertise to every project we lead and every goal we help you achieve.',
  },
];

export const faqs = [
    {
      title: 'What areas does AMARITS specialize in?',
      content:
        'AMARITS Consulting offers tailored solutions in IT strategy, research support, project implementation, data analytics, and event management for both public and private sectors.',
    },
    {
      title: 'How can AMARITS help my organization?',
      content:
        'We partner with organizations to drive digital transformation, optimize operations through research and data, and provide expert guidance to enhance innovation and impact.',
    },
    {
      title: 'How do I work with AMARITS?',
      content:
        'You can contact us via our website, email, or phone. We’ll schedule a discovery call to assess your needs and recommend a customized solution.',
    },
    {
      title: 'What industries do you work with?',
      content:
        'We serve clients across education, healthcare, government, NGOs, and the private sector—adapting our solutions to meet unique industry needs.',
    },
    {
      title: 'Do you offer long-term support?',
      content:
        'Yes, AMARITS offers ongoing support and post-project consulting to ensure long-term success and impact of implemented solutions.',
    },
];