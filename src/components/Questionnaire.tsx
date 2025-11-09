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
    <section className="py-16 px-6">
      <div className="mx-auto max-w-4xl">
        {onBack && (
          <button
            onClick={onBack}
            className="mb-8 text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Top
          </button>
        )}

        <div className="card-martie p-10">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-4xl font-display text-foreground">
              How would you like to help?
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose the way that works best for you
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <button
              onClick={() => handleSelection("time")}
              className="card-martie p-6 flex flex-col items-center gap-4 cursor-pointer group bg-primary/5 hover:bg-primary/10"
            >
              <div className="rounded-full bg-primary/20 p-4 group-hover:bg-primary/30 transition-colors">
                <Clock className="h-12 w-12 text-primary" />
              </div>
              <div className="text-center">
                <div className="font-semibold text-xl mb-2">Donate Time</div>
                <div className="text-sm text-muted-foreground">
                  Volunteer at food banks and distribution centers
                </div>
              </div>
            </button>

            <button
              onClick={() => handleSelection("money")}
              className="card-martie p-6 flex flex-col items-center gap-4 cursor-pointer group bg-secondary/5 hover:bg-secondary/10"
            >
              <div className="rounded-full bg-secondary/20 p-4 group-hover:bg-secondary/30 transition-colors">
                <DollarSign className="h-12 w-12 text-secondary" />
              </div>
              <div className="text-center">
                <div className="font-semibold text-xl mb-2">Donate Money</div>
                <div className="text-sm text-muted-foreground">
                  Financial contributions help organizations scale their impact
                </div>
              </div>
            </button>

            <button
              onClick={() => handleSelection("food")}
              className="card-martie p-6 flex flex-col items-center gap-4 cursor-pointer group bg-accent/5 hover:bg-accent/10"
            >
              <div className="rounded-full bg-accent/20 p-4 group-hover:bg-accent/30 transition-colors">
                <ShoppingBag className="h-12 w-12 text-accent" />
              </div>
              <div className="text-center">
                <div className="font-semibold text-xl mb-2">Donate Food</div>
                <div className="text-sm text-muted-foreground">
                  Provide non-perishable items to local food banks
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
