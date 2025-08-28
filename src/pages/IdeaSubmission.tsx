
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mwhtfsuvbqffxpmcalha.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13aHRmc3V2YnFmZnhwbWNhbGhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2MzgwODcsImV4cCI6MjA2ODIxNDA4N30.Rn0hN-xQvojm0rC-upNd2IScLcu0QKtsqILBlan3JKQ';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const IdeaSubmission = () => {
  const { t } = useLanguage();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [idea, setIdea] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("basic"); // Default to basic

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      plan: selectedPlan, // Renamed to 'plan' to avoid conflict with 'selectedPlan' state
      idea,
    };

    try {
      const { data, error } = await supabase
        .from('ideas') // Assuming table name is 'idea_submissions'
        .insert([formData]);

      if (error) {
        console.error('Error inserting data:', error);
        alert('Failed to submit idea. Please try again.');
      } else {
        console.log('Data inserted successfully:', data);
        alert('Idea submitted successfully!');
        // Optionally, clear the form after successful submission
        setName("");
        setEmail("");
        setIdea("");
        setSelectedPlan("basic");
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      alert('An unexpected error occurred while submitting your idea.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">

        <div className="mb-4">
          <Button asChild variant="ghost" size="sm">
            <Link to="/"><ArrowLeft className="w-4 h-4 mr-2" />{t('submission.back')}</Link>
          </Button>
        </div>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">{t('submission.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('submission.name')}</Label>
                  <Input
                    id="name"
                    placeholder={t('submission.namePlaceholder')}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t('submission.email')}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('submission.emailPlaceholder')}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="plan">{t('submission.plan')}</Label>
                <RadioGroup
                  defaultValue="basic"
                  value={selectedPlan}
                  onValueChange={setSelectedPlan}
                  className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="basic" id="plan-basic" />
                    <Label htmlFor="plan-basic">{t('submission.plan.basic')}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="professional" id="plan-professional" />
                    <Label htmlFor="plan-professional">{t('submission.plan.professional')}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="enterprise" id="plan-enterprise" />
                    <Label htmlFor="plan-enterprise">{t('submission.plan.enterprise')}</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="idea">{t('submission.idea')}</Label>
                <Textarea
                  id="idea"
                  placeholder={t('submission.ideaPlaceholder')}
                  rows={8}
                  required
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full" size="lg">{t('submission.submit')}</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IdeaSubmission;
