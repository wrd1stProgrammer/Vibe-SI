import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('about.title')}
            </h2>
            <p className="text-2xl text-gradient font-semibold mb-8">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.mission')}
              </p>
            </div>

            <Card className="p-8 gradient-card shadow-elegant">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">VS</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gradient">Vibe SI</h3>
                  <p className="text-muted-foreground mt-2">
                    Turning visions into reality
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-gradient">2-4</div>
                    <div className="text-sm text-muted-foreground">Weeks</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient">$19+</div>
                    <div className="text-sm text-muted-foreground">Starting</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient">100%</div>
                    <div className="text-sm text-muted-foreground">Custom</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};