import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.2),transparent_50%)]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-brand-accent rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-brand-gradient-end rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-brand-accent rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-brand-accent" />
            <span className="text-sm text-white">Fast • Affordable • Professional</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline_white" 
              size="xl"
              onClick={() => scrollToSection('contact')}
              className="group"
            >
              {t('hero.cta')}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="ghost" 
              size="xl"
              onClick={() => scrollToSection('about')}
              className="text-white hover:bg-white/10"
            >
              {t('hero.learn_more')}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2-4</div>
              <div className="text-white/60">Weeks to Launch</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">$19-$99</div>
              <div className="text-white/60">Affordable Pricing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/60">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};