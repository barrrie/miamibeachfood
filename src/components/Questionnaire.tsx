import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, DollarSign, ShoppingBag, ArrowLeft } from "lucide-react";

interface QuestionnaireProps {
  onComplete: (selections: string[]) => void;
  onBack?: () => void;
}

export function Questionnaire({ onComplete, onBack }: QuestionnaireProps) {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState<string[]>([]);

  const handleSelection = (value: string) => {
    const newSelections = [...selections, value];
    setSelections(newSelections);
    
    // Move to results after first question
    onComplete(newSelections);
  };

  return (
    <section className="py-12 px-6">
      <div className="mx-auto max-w-3xl">
        {onBack && (
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Top
          </Button>
        )}
        
        <Card className="p-8 shadow-card">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-foreground">
              How would you like to help?
            </h2>
            <p className="text-muted-foreground">
              Choose the way that works best for you
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Button
              variant="choice"
              onClick={() => handleSelection("time")}
              className="flex-col gap-4 items-center"
            >
              <Clock className="h-12 w-12 text-primary" />
              <div className="text-center">
                <div className="font-semibold text-lg mb-1">Donate Time</div>
                <div className="text-sm text-muted-foreground">
                  Volunteer at food banks and distribution centers
                </div>
              </div>
            </Button>

            <Button
              variant="choice"
              onClick={() => handleSelection("money")}
              className="flex-col gap-4 items-center"
            >
              <DollarSign className="h-12 w-12 text-secondary" />
              <div className="text-center">
                <div className="font-semibold text-lg mb-1">Donate Money</div>
                <div className="text-sm text-muted-foreground">
                  Financial contributions help organizations scale their impact
                </div>
              </div>
            </Button>

            <Button
              variant="choice"
              onClick={() => handleSelection("food")}
              className="flex-col gap-4 items-center"
            >
              <ShoppingBag className="h-12 w-12 text-accent" />
              <div className="text-center">
                <div className="font-semibold text-lg mb-1">Donate Food</div>
                <div className="text-sm text-muted-foreground">
                  Provide non-perishable items to local food banks
                </div>
              </div>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
