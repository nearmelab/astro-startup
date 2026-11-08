
export interface Project {
  slug: string;
  title: string;
  description: string;
  service: string;
  industry: string;
  budget: string;
  tags: string[];
  img: string;
  lang: string;
}

export const portfolioData: Project[] = [
  // English Projects
  {
    slug: 'green-energy-solutions',
    title: 'Green Energy Solutions',
    description: 'A comprehensive web platform for a leading provider of renewable energy solutions, focusing on user engagement and data visualization.',
    service: 'Web Development',
    industry: 'Energy',
    budget: '$20k - $50k',
    tags: ['Astro', 'Tailwind CSS', 'Contentful'],
    img: '/placeholders/project-1.jpg',
    lang: 'en'
  },
  {
    slug: 'fintech-mobile-app',
    title: 'Fintech Mobile App',
    description: 'A secure and intuitive mobile application for a fintech startup, enabling users to manage investments and track their portfolio in real-time.',
    service: 'Mobile App',
    industry: 'Finance',
    budget: '$50k - $100k',
    tags: ['React Native', 'Node.js', 'PostgreSQL'],
    img: '/placeholders/project-2.jpg',
    lang: 'en'
  },
  {
    slug: 'ecommerce-platform-revamp',
    title: 'E-commerce Platform Revamp',
    description: 'A full-scale redesign and migration for a major online retailer, improving performance, user experience, and scalability.',
    service: 'Web Development',
    industry: 'Retail',
    budget: '$50k - $100k',
    tags: ['Vendure', 'Vue.js', 'GraphQL'],
    img: '/placeholders/project-3.jpg',
    lang: 'en'
  },
  {
    slug: 'healthcare-logistics-system',
    title: 'Healthcare Logistics',
    description: 'An integrated system to optimize logistics and supply chain management for a major healthcare provider.',
    service: 'Systems Integration',
    industry: 'Healthcare',
    budget: '$100k+',
    tags: ['Umbraco', '.NET', 'Azure'],
    img: '/placeholders/project-4.jpg',
    lang: 'en'
  },
  {
    slug: 'vr-training-simulation',
    title: 'VR Training Simulation',
    description: 'An immersive virtual reality simulation for employee training in the manufacturing sector.',
    service: 'Gaming & 3D',
    industry: 'Manufacturing',
    budget: '$20k - $50k',
    tags: ['Unity', 'C#', 'VR'],
    img: '/placeholders/project-5.jpg',
    lang: 'en'
  },

  // Arabic Projects
  {
    slug: 'green-energy-solutions',
    title: 'حلول الطاقة الخضراء',
    description: 'منصة ويب شاملة لمزود رائد لحلول الطاقة المتجددة، مع التركيز على إشراك المستخدم وتصور البيانات.',
    service: 'تطوير الويب',
    industry: 'الطاقة',
    budget: '$20k - $50k',
    tags: ['Astro', 'Tailwind CSS', 'Contentful'],
    img: '/placeholders/project-1.jpg',
    lang: 'ar'
  },
  {
    slug: 'fintech-mobile-app',
    title: 'تطبيق التكنولوجيا المالية',
    description: 'تطبيق جوال آمن وبديهي لشركة تكنولوجيا مالية ناشئة، يتيح للمستخدمين إدارة الاستثمارات وتتبع محافظهم في الوقت الفعلي.',
    service: 'تطبيقات الجوال',
    industry: 'المالية',
    budget: '$50k - $100k',
    tags: ['React Native', 'Node.js', 'PostgreSQL'],
    img: '/placeholders/project-2.jpg',
    lang: 'ar'
  },
  {
    slug: 'ecommerce-platform-revamp',
    title: 'تجديد منصة التجارة الإلكترونية',
    description: 'إعادة تصميم وترقية شاملة لمتجر تجزئة كبير عبر الإنترنت، مما أدى إلى تحسين الأداء وتجربة المستخدم وقابلية التوسع.',
    service: 'تطوير الويب',
    industry: 'التجزئة',
    budget: '$50k - $100k',
    tags: ['Vendure', 'Vue.js', 'GraphQL'],
    img: '/placeholders/project-3.jpg',
    lang: 'ar'
  },
  {
    slug: 'healthcare-logistics-system',
    title: 'نظام لوجستيات الرعاية الصحية',
    description: 'نظام متكامل لتحسين إدارة الخدمات اللوجستية وسلسلة التوريد لمزود رعاية صحية كبير.',
    service: 'تكامل الأنظمة',
    industry: 'الرعاية الصحية',
    budget: '$100k+',
    tags: ['Umbraco', '.NET', 'Azure'],
    img: '/placeholders/project-4.jpg',
    lang: 'ar'
  },
  {
    slug: 'vr-training-simulation',
    title: 'محاكاة تدريب الواقع الافتراضي',
    description: 'محاكاة غامرة للواقع الافتراضي لتدريب الموظفين في قطاع التصنيع.',
    service: 'الألعاب والرسومات ثلاثية الأبعاد',
    industry: 'التصنيع',
    budget: '$20k - $50k',
    tags: ['Unity', 'C#', 'VR'],
    img: '/placeholders/project-5.jpg',
    lang: 'ar'
  }
];
