import { Button } from "@/components/ui/button";
import { Palmtree, Waves } from "lucide-react";
import mangoImage from "@/assets/mango.png";

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary py-24 px-6 text-center">
      {/* Decorative palm trees */}
      <div className="absolute left-4 top-8 opacity-10">
        <Palmtree className="h-24 w-24 text-white" />
      </div>
      <div className="absolute right-8 top-12 opacity-10">
        <Palmtree className="h-32 w-32 text-white" />
      </div>
      <div className="absolute left-12 bottom-8 opacity-10">
        <Palmtree className="h-20 w-20 text-white" />
      </div>

      {/* Decorative waves at bottom */}
      <div className="absolute bottom-0 left-0 right-0 opacity-20">
        <Waves className="h-16 w-full text-white" />
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="relative mx-auto max-w-4xl z-10">
        <div className="mb-8 flex justify-center">
          <div className="rounded-2xl bg-white p-4 shadow-2xl border-2 border-black/10">
            <img src={mangoImage} alt="Fresh sliced mango" className="h-24 w-24 object-cover rounded-xl" />
          </div>
        </div>

        <h1 className="mb-6 text-5xl font-display text-white md:text-7xl tracking-tight">
          Miami Beach Cares
        </h1>

        <p className="mb-10 text-lg text-white/95 md:text-xl max-w-2xl mx-auto leading-relaxed">
          With SNAP benefits paused, our community needs your support now more than ever.
          Find the perfect way to help Miami Beach neighbors facing food insecurity.
        </p>

        <button
          onClick={onGetStarted}
          className="btn-martie bg-accent text-accent-foreground text-lg px-10 py-4 hover:bg-accent/90 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
        >
          Find How You Can Help
          <span className="text-xl">→</span>
        </button>

        <p className="mt-8 text-sm text-white/80 font-light">
          Takes less than 30 seconds • Connect with local organizations
        </p>
      </div>
    </section>
  );
}
