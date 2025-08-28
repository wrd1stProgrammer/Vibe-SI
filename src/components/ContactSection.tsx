import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, MessageCircle, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.4),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
              {t('cta.subtitle')}
            </p>
            
            <Button asChild variant="outline_white" size="xl" className="mb-8">
              <Link to="/idea-submission">
                <Rocket className="w-5 h-5 mr-2" />
                {t('cta.button')}
              </Link>
            </Button>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-smooth">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-white/80 mb-4">Get a detailed proposal</p>
                <Button variant="outline_white" size="sm">
                  kicoa24@gmail.com
                </Button>
              </div>
            </Card>

            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-smooth">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Chat With Us</h3>
                <p className="text-white/80 mb-4">Quick questions & support</p>
                <Button variant="outline_white" size="sm">
                  Start Chat
                </Button>
              </div>
            </Card>
          </div>

          {/* Process Steps */}
          <div className="mt-16 pt-12 border-t border-white/20">
            <h3 className="text-2xl font-bold text-white mb-8">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-brand-accent rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <p className="text-white/80">Share Your Idea</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-brand-accent rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <p className="text-white/80">We Build It</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-brand-accent rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <p className="text-white/80">Launch & Celebrate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};