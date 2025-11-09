import { Button } from "@/components/ui/button";
import { Palmtree, Waves } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

const CartoonMango = () => (
  <svg viewBox="0 0 200 200" className="h-24 w-24">
    {/* Mango body */}
    <ellipse cx="100" cy="110" rx="65" ry="75" fill="#FFD700" />
    <ellipse cx="100" cy="110" rx="65" ry="75" fill="url(#mangoGradient)" />

    {/* Gradient for depth */}
    <defs>
      <linearGradient id="mangoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: '#FFA500', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#FF8C00', stopOpacity: 1 }} />
      </linearGradient>
      <radialGradient id="leafGradient" cx="50%" cy="50%">
        <stop offset="0%" style={{ stopColor: '#90EE90', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#228B22', stopOpacity: 1 }} />
      </radialGradient>
    </defs>

    {/* Highlight */}
    <ellipse cx="75" cy="85" rx="20" ry="25" fill="white" opacity="0.4" />

    {/* Leaf */}
    <ellipse cx="100" cy="40" rx="15" ry="30" fill="url(#leafGradient)" transform="rotate(-20 100 40)" />
    <line x1="100" y1="40" x2="100" y2="60" stroke="#228B22" strokeWidth="2" />

    {/* Cute face */}
    <circle cx="85" cy="100" r="5" fill="#333" />
    <circle cx="115" cy="100" r="5" fill="#333" />
    <circle cx="87" cy="98" r="2" fill="white" />
    <circle cx="117" cy="98" r="2" fill="white" />

    {/* Smile */}
    <path d="M 85 120 Q 100 130 115 120" stroke="#333" strokeWidth="3" fill="none" strokeLinecap="round" />

    {/* Rosy cheeks */}
    <circle cx="70" cy="110" r="8" fill="#FF69B4" opacity="0.3" />
    <circle cx="130" cy="110" r="8" fill="#FF69B4" opacity="0.3" />
  </svg>
);

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
            <CartoonMango />
          </div>
        </div>

        <h1 className="mb-6 text-5xl font-display text-white md:text-7xl tracking-tight">
          Feed Miami Beach
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
