import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ko';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Turn Your Ideas Into Reality',
    'hero.subtitle': 'From concept to launch in 2-4 weeks. Affordable pricing $19-$99. Design, develop, and deploy your ideas with Vibe SI.',
    'hero.cta': 'Start Your Project',
    'hero.learn_more': 'Learn More',
    
    // Features
    'features.title': 'Why Choose Vibe SI?',
    'features.subtitle': 'We handle everything from design to deployment',
    'features.fast.title': 'Lightning Fast',
    'features.fast.description': 'Launch your idea in just 2-4 weeks',
    'features.affordable.title': 'Affordable Pricing',
    'features.affordable.description': 'Starting from just $19-$99',
    'features.complete.title': 'Complete Solution',
    'features.complete.description': 'Design, development, and deployment all in one',
    
    // Pricing
    'pricing.title': 'Simple, Transparent Pricing',
    'pricing.subtitle': 'Choose the plan that fits your project needs',
    'pricing.starter.title': 'Starter',
    'pricing.starter.price': '$19',
    'pricing.starter.description': 'Perfect for simple ideas',
    'pricing.pro.title': 'Professional',
    'pricing.pro.price': '$59',
    'pricing.pro.description': 'Most popular choice',
    'pricing.enterprise.title': 'Enterprise',
    'pricing.enterprise.price': '$99',
    'pricing.enterprise.description': 'For complex projects',
    'pricing.cta': 'Get Started',
    
    // About
    'about.title': 'About Vibe SI',
    'about.subtitle': 'Your Ideas, Our Execution',
    'about.description': 'We believe that great ideas shouldn\'t wait. That\'s why we\'ve created a streamlined process to turn your concepts into reality quickly and affordably. From initial design to final deployment, we handle every aspect of your project.',
    'about.mission': 'Our mission is simple: help entrepreneurs and creators bring their ideas to life without the complexity and high costs typically associated with software development.',
    
    // CTA
    'cta.title': 'Ready to Start?',
    'cta.subtitle': 'Don\'t let your ideas wait. Let\'s build something amazing together.',
    'cta.button': 'Start Your Project Today',
    
    // Footer
    'footer.tagline': 'Turning ideas into reality, one project at a time.',
    'footer.rights': 'All rights reserved.',
  },
  ko: {
    // Navigation
    'nav.home': '홈',
    'nav.about': '소개',
    'nav.pricing': '가격',
    'nav.contact': '연락처',
    
    // Hero Section
    'hero.title': '당신의 아이디어를 현실로',
    'hero.subtitle': '2-4주 만에 컨셉부터 런칭까지. 합리적인 가격 $19-$99. Vibe SI와 함께 아이디어를 디자인, 개발, 배포하세요.',
    'hero.cta': '프로젝트 시작하기',
    'hero.learn_more': '자세히 알아보기',
    
    // Features
    'features.title': 'Vibe SI를 선택하는 이유',
    'features.subtitle': '디자인부터 배포까지 모든 것을 처리합니다',
    'features.fast.title': '빠른 출시',
    'features.fast.description': '단 2-4주 만에 아이디어를 런칭하세요',
    'features.affordable.title': '합리적인 가격',
    'features.affordable.description': '$19-$99부터 시작하는 저렴한 비용',
    'features.complete.title': '완전한 솔루션',
    'features.complete.description': '디자인, 개발, 배포를 한 번에',
    
    // Pricing
    'pricing.title': '심플하고 투명한 가격',
    'pricing.subtitle': '프로젝트 요구사항에 맞는 플랜을 선택하세요',
    'pricing.starter.title': '스타터',
    'pricing.starter.price': '$19',
    'pricing.starter.description': '간단한 아이디어에 적합',
    'pricing.pro.title': '프로페셔널',
    'pricing.pro.price': '$59',
    'pricing.pro.description': '가장 인기 있는 선택',
    'pricing.enterprise.title': '엔터프라이즈',
    'pricing.enterprise.price': '$99',
    'pricing.enterprise.description': '복잡한 프로젝트용',
    'pricing.cta': '시작하기',
    
    // About
    'about.title': 'Vibe SI 소개',
    'about.subtitle': '당신의 아이디어, 우리의 실행력',
    'about.description': '우리는 훌륭한 아이디어가 기다려서는 안 된다고 믿습니다. 그래서 개념을 빠르고 합리적으로 현실로 만드는 간소화된 프로세스를 만들었습니다. 초기 디자인부터 최종 배포까지 프로젝트의 모든 측면을 처리합니다.',
    'about.mission': '우리의 사명은 간단합니다: 일반적으로 소프트웨어 개발과 관련된 복잡성과 높은 비용 없이 기업가와 크리에이터가 아이디어를 실현할 수 있도록 돕는 것입니다.',
    
    // CTA
    'cta.title': '시작할 준비가 되셨나요?',
    'cta.subtitle': '아이디어를 기다리게 하지 마세요. 함께 멋진 것을 만들어봅시다.',
    'cta.button': '오늘 프로젝트 시작하기',
    
    // Footer
    'footer.tagline': '한 번에 하나의 프로젝트씩, 아이디어를 현실로 만들어갑니다.',
    'footer.rights': '모든 권리 보유.',
  }
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};