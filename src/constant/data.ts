interface ReasonCardProps {
  icon: string;
  title: string;
  desc: string;
}

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/service' },
  { label: 'Products', href: '/products' },
  { label: 'Team', href: '/team' },
];

export const partnerLogos = [
  '/images/partners/image-5.png',
  '/images/partners/image-6.png',
  '/images/partners/image-7.png',
];

export const serviceTabs = [
  {
    label: "Information Technology and Systems",
    services: [
      {
        title: "IT Strategy and Digital Transformation",
        description: "Aligning technology with business objectives for long-term growth.",
      },
      {
        title: "System Architecture and Integration",
        description: "Designing scalable and efficient IT infrastructures.",
      },
      {
        title: "Cybersecurity and Compliance",
        description: "Ensuring secure, resilient, and compliant digital environments.",
      },
      {
        title: "AI and Data-Driven Solutions",
        description: "Implementing artificial intelligence and data analytics to enhance decision-making.",
      },
      {
        title: "Software Development and Optimization",
        description: "Tailoring IT solutions to meet unique business challenges.",
      },
    ],
  },
  {
    label: "Management and Technical Events",
    services: [
      {
        title: "Event Strategy and Planning",
        description: "Designing engaging and impactful conferences, workshops, and seminars.",
      },
      {
        title: "Logistics and Coordination",
        description: "Managing venue selection, scheduling, and participant engagement.",
      },
      {
        title: "Technology-Driven Event Solutions",
        description: "Implementing digital platforms for virtual and hybrid events.",
      },
      {
        title: "Content Curation and Speaker Management",
        description: "Ensuring relevant, high-quality discussions and presentations.",
      },
      {
        title: "Sponsorship and Networking Facilitation",
        description: "Connecting stakeholders to foster collaboration and funding opportunities.",
      },
    ],
  },
];

export const portfolioItems = [
  {
    image: '/images/project-1.jpg',
    tag: 'iEventHive',
    title: 'Registration Management System for Events and Training',
  },
  {
    image: '/images/project-2.jpg',
    tag: 'Love4you',
    title: 'Dating, Friendship and Meeting App & Portal',
  },
  {
    image: '/images/project-3.jpg',
    tag: 'Integral Medical System',
    title: 'Virtual Platform for Medicine and Telemedicine',
  },
  {
    image: '/images/project-4.jpg',
    tag: 'Eok Arcade',
    title: 'Virtual Mathematics Platform',
  },
];

export const services = [
    {
      image: '/images/cybersecurity.jpg',
      icon: '/icons/icon-10.png',
      title: 'Cybersecurity and Compliance',
      desc: 'Ensuring secure, resilient, and compliant digital environments.',
    },
    {
      image: '/images/system.jpg',
      icon: '/icons/icon-11.png',
      title: 'System Architecture and Integration',
      desc: 'Designing scalable and efficient IT infrastructures.',
    },
    {
      image: '/images/strategy.jpg',
      icon: '/icons/icon-12.png',
      title: 'IT Strategy and Digital Transformation',
      desc: 'Aligning technology with business objectives for long-term growth',
    },
    {
      image: '/images/ai.jpg',
      icon: '/icons/icon-13.png',
      title: 'AI and Data-Driven Solutions',
      desc: ' Implementing artificial intelligence and data analytics to enhance decision-making.',
    },
    {
      image: '/images/software.jpg',
      icon: '/icons/icon-13.png',
      title: 'Software Development and Optimization',
      desc: 'Tailoring IT solutions to meet unique business challenges.',
    },
];

// data/eventServices.ts
export const eventServices = [
  {
    title: 'Strategic Event Planning',
    desc: 'We design engaging, goal-oriented events aligned with your vision.',
  },
  {
    title: 'End-to-End Event Management',
    desc: 'Complete logistics and execution from concept to completion.',
  },
  {
    title: 'Digital and Hybrid Event Solutions',
    desc: 'Virtual and hybrid options for broader participation.',
  },
  {
    title: 'Technical and Scientific Program Development',
    desc: 'Curated programs with top speakers and relevant content.',
  },
  {
    title: 'Sponsorship and Networking Facilitation',
    desc: 'We connect you with sponsors and strategic partners.',
  },
  {
    title: 'On-Site and Virtual Event Coordination',
    desc: 'Flawless coordination for both virtual and physical events.',
  },
];


export const teamMembers = [
    {
      image: '/images/team/alvaro.jpg',
      name: 'Álvaro Rocha',
      position: 'Chairman',
      desc: 'Expert in IT Strategy and Digital Transformation, Enterprise Architecture, Information Systems Planning, Management Information Systems, Maturity Models, Information Systems Quality, Intelligent Information Systems, Requirements Engineering, Cybersecurity, e-Government, e-Health, e-Education, Events Strategy and Planning, and Events Management.',
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
      desc: 'Tiago Carvalho is a Project Manager and Business Analyst with over 10 years of experience in e-commerce and industrial sectors. He specializes in delivering complex software solutions, ensuring strategic alignment between business needs and technology. At Toogas, he focused on Magento and AWS for e-commerce integration, while at Segin, he led scalable solutions and CI/CD pipelines using .NET and Azure. His Agile approach enhances team productivity and operational efficiency. Passionate about digital transformation, Tiago bridges the gap between business objectives and technology solutions, driving impactful results and customer satisfaction.',
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
      desc: 'Expert in Artificial Intelligence and Machine Learning, Knowledge Management, Business Intelligence and Data-Driven Solutions, and Software Engineering.',
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
      desc: 'Expert in Network Security & Information Security Management, Cybersecurity Engineering & Cryptography, Blockchain and Smart Contracts Security, Intrusion Detection & Prevention Systems, Cyber Threat Intelligence & Countermeasures, Privacy-Preserving AI Models in Cybersecurity, Web & Mobile Application Development.',
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
      desc: 'Expertise in Software development, Website development and Mobile application development in any technology.',
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
      desc: 'Expert in technical skills in Power BI, Advanced Excel, Cybersecurity, WordPress, and Python. Additionally, he has experience in data analysis, machine learning, project management with agile methodologies, and database administration. He is also recognized for his ability to effectively communicate technical concepts and provide technology consulting across various fields.',
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
      desc: 'Expert in System Architecture and Integration, Servers Architecture and Management, Back-End Programming, Software Engineering, Web Programming, and Technology-Driven Event Solutions.',
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
      desc: 'Expert in Design, Photography, Video, Multimedia, Social Media, Office Tools, Events Organization, and Events Logistics and Coordination.',
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
      desc: 'Expert in Digital Marketing, Social Media, Office Tools, Human Resources Management, Public Administration, Digital Transformation, Learning and Skills Development, European Funding and Projects Management; Strategic Business Advice; Event Strategy, Planning and Management.',
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