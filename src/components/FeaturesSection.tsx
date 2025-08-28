import { useLanguage } from "@/contexts/LanguageContext";
import { Zap, DollarSign, Rocket } from "lucide-react";

export const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Zap,
      title: t('features.fast.title'),
      description: t('features.fast.description'),
    },
    {
      icon: DollarSign,
      title: t('features.affordable.title'),
      description: t('features.affordable.description'),
    },
    {
      icon: Rocket,
      title: t('features.complete.title'),
      description: t('features.complete.description'),
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('features.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-spring"
            >
              <div className="w-16 h-16 mx-auto mb-6 gradient-primary rounded-2xl flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-smooth">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};