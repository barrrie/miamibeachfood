import { Button } from "@/components/ui/button";
import { Palmtree, Waves } from "lucide-react";
import mangoImage from "@/assets/mango.png";

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-hero-gradient-start via-primary to-hero-gradient-end py-20 px-6 text-center">
      {/* Decorative palm trees */}
      <div className="absolute left-4 top-8 opacity-20">
        <Palmtree className="h-24 w-24 text-primary-foreground" />
      </div>
      <div className="absolute right-8 top-12 opacity-15">
        <Palmtree className="h-32 w-32 text-primary-foreground" />
      </div>
      <div className="absolute left-12 bottom-8 opacity-10">
        <Palmtree className="h-20 w-20 text-primary-foreground" />
      </div>
      
      {/* Decorative waves at bottom */}
      <div className="absolute bottom-0 left-0 right-0 opacity-30">
        <Waves className="h-16 w-full text-secondary" />
      </div>
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="relative mx-auto max-w-4xl z-10">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-white/90 p-3 backdrop-blur-sm shadow-lg">
            <img src={mangoImage} alt="Fresh sliced mango" className="h-20 w-20 object-cover rounded-full" />
          </div>
        </div>
        
        <h1 className="mb-6 text-5xl font-display font-bold text-primary-foreground md:text-7xl tracking-wider">
          MIAMI BEACH CARES
        </h1>
        
        <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl">
          With SNAP benefits paused, our community needs your support now more than ever. 
          Find the perfect way to help Miami Beach neighbors facing food insecurity.
        </p>
        
        <Button 
          variant="hero" 
          size="lg" 
          onClick={onGetStarted}
          className="text-lg px-8 py-6 h-auto bg-white text-foreground hover:bg-white/90 shadow-xl hover:shadow-2xl"
        >
          Find How You Can Help
        </Button>
        
        <p className="mt-6 text-sm text-primary-foreground/80">
          Takes less than 30 seconds • Connect with local organizations
        </p>
      </div>
    </section>
  );
}
