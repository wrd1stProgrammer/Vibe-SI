import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-gradient mb-4">
            Vibe SI
          </div>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            {t('footer.tagline')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>© 2025 SERN.</span>
            <span>{t('footer.rights')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};