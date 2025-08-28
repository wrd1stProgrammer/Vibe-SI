import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gradient">
          Vibe SI
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-foreground hover:text-brand-accent transition-smooth"
          >
            {t('nav.home')}
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-brand-accent transition-smooth"
          >
            {t('nav.about')}
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-foreground hover:text-brand-accent transition-smooth"
          >
            {t('nav.pricing')}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-brand-accent transition-smooth"
          >
            {t('nav.contact')}
          </button>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle />
          <Button variant="premium" onClick={() => scrollToSection('contact')}>
            {t('hero.cta')}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 text-foreground hover:text-brand-accent transition-smooth"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-foreground hover:text-brand-accent transition-smooth"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left py-2 text-foreground hover:text-brand-accent transition-smooth"
            >
              {t('nav.pricing')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-foreground hover:text-brand-accent transition-smooth"
            >
              {t('nav.contact')}
            </button>
            <Button 
              variant="premium" 
              className="w-full"
              onClick={() => scrollToSection('contact')}
            >
              {t('hero.cta')}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};