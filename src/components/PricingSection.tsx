import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, Star } from "lucide-react";

export const PricingSection = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: t('pricing.starter.title'),
      price: t('pricing.starter.price'),
      description: t('pricing.starter.description'),
      features: [
        'Basic Design',
        'Simple Functionality',
        'Mobile Responsive',
        '1 Revision Round',
        'Basic Support'
      ],
      popular: false,
    },
    {
      name: t('pricing.pro.title'),
      price: t('pricing.pro.price'),
      description: t('pricing.pro.description'),
      features: [
        'Custom Design',
        'Advanced Features',
        'Mobile & Desktop',
        '3 Revision Rounds',
        'Priority Support',
        'SEO Optimization'
      ],
      popular: true,
    },
    {
      name: t('pricing.enterprise.title'),
      price: t('pricing.enterprise.price'),
      description: t('pricing.enterprise.description'),
      features: [
        'Premium Design',
        'Complex Features',
        'Full Responsive',
        'Unlimited Revisions',
        'Dedicated Support',
        'Advanced SEO',
        'Analytics Setup'
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 transition-spring hover:scale-105 ${
                plan.popular 
                  ? 'border-brand-accent shadow-glow bg-gradient-to-b from-white to-secondary' 
                  : 'hover:shadow-elegant'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-brand-accent text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-5xl font-bold mb-2 text-gradient">
                  {plan.price}
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-brand-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "premium" : "outline"}
                size="lg"
                className="w-full"
                onClick={scrollToContact}
              >
                {t('pricing.cta')}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};