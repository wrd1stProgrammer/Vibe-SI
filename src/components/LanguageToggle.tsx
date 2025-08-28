import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-secondary/50 rounded-lg p-1">
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="text-xs font-medium"
      >
        EN
      </Button>
      <Button
        variant={language === 'ko' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('ko')}
        className="text-xs font-medium"
      >
        KOR
      </Button>
    </div>
  );
};