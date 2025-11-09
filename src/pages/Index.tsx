import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Questionnaire } from "@/components/Questionnaire";
import { OrganizationList } from "@/components/OrganizationList";

const Index = () => {
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [selections, setSelections] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleGetStarted = () => {
    setShowQuestionnaire(true);
    setShowResults(false);
    // Smooth scroll to questionnaire
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 100);
  };

  const handleQuestionnaireComplete = (newSelections: string[]) => {
    setSelections(newSelections);
    setShowResults(true);
    // Smooth scroll to results
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 100);
  };

  const handleStartOver = () => {
    setShowQuestionnaire(false);
    setShowResults(false);
    setSelections([]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Hero onGetStarted={handleGetStarted} />
      
      {showQuestionnaire && !showResults && (
        <Questionnaire 
          onComplete={handleQuestionnaireComplete}
          onBack={handleStartOver}
        />
      )}

      {showResults && (
        <OrganizationList 
          filter={selections} 
          onBack={handleStartOver}
        />
      )}

      <footer className="bg-card py-10 px-6 border-t-2 border-border">
        <div className="mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p className="mb-3 text-foreground font-semibold text-base">
            Miami Beach Cares
          </p>
          <p className="mb-2">
            Supporting our community through food insecurity
          </p>
          <p className="text-xs">
            This resource connects community members with local organizations.
            All donations go directly to the listed organizations.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
