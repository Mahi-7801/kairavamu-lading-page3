import { useState, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useScrollAnimation';

interface BeforeAfterCard {
  id: number;
  title: string;
  beforeLabel: string;
  afterLabel: string;
  improvement: string;
  beforeImg: string;
  afterImg: string;
}

const results: BeforeAfterCard[] = [
  { id: 1, title: 'GFC Hair Treatment', beforeLabel: 'Before', afterLabel: 'After', improvement: 'Visible Hair Regrowth', beforeImg: '/hair_gfc_before.png', afterImg: '/hair_gfc_after.png' },
  { id: 2, title: 'Hair Density Improvement', beforeLabel: 'Before', afterLabel: 'After', improvement: 'Improved Hair Density & Volume', beforeImg: '/Hair Density Improvement before.jpg', afterImg: '/Hair Density Improvement after.jpg' },
  { id: 3, title: 'Overall Hair Quality', beforeLabel: 'Before', afterLabel: 'After', improvement: 'Stronger, Healthier Hair', beforeImg: '/Overall Hair Quality before.jpg', afterImg: '/Overall Hair Quality after.jpg' },
  { id: 4, title: 'Hair Transplant', beforeLabel: 'Before', afterLabel: 'After', improvement: 'Permanent Hair Restoration', beforeImg: '/hair_transplant_before.png', afterImg: '/hair_transplant_after.png' },
];

function BeforeAfterSlider({ card }: { card: BeforeAfterCard }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize select-none group/card"
      onMouseDown={() => { isDragging.current = true; }}
      onMouseMove={(e) => { if (isDragging.current) handleMove(e.clientX); }}
      onMouseUp={() => { isDragging.current = false; }}
      onMouseLeave={() => { isDragging.current = false; }}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      <img
        src={card.afterImg}
        alt={card.afterLabel}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* After label */}
      <div className="absolute top-3 right-3 z-10 px-2.5 py-1 bg-emerald-700/80 backdrop-blur-sm text-white text-xs font-bold rounded-full">
        After
      </div>

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img
          src={card.beforeImg}
          alt={card.beforeLabel}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Before label */}
        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-bold rounded-full">
          Before
        </div>
      </div>

      <div
        className="absolute top-0 bottom-0 w-1 bg-white/80 z-10"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <ChevronLeft className="w-3 h-3 text-emerald-800 -mr-1" />
          <ChevronRight className="w-3 h-3 text-emerald-800 -ml-1" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/50 to-transparent">
        <p className="text-white text-sm font-medium flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          {card.improvement}
        </p>
      </div>
    </div>
  );
}

export default function Results() {
  const { ref, isInView } = useInView();

  return (
    <section id="results" className="relative section-padding bg-clinic-cream overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold-600 font-medium text-sm tracking-wider uppercase mb-3">Real Results</p>
          <h2 className="heading-primary mb-4">
            Before &amp; After <span className="text-gradient-gold">Hair Transformations</span>
          </h2>
          <p className="text-clinic-gray max-w-2xl mx-auto mt-4">
            Real hair transformation stories from our patients. Drag the slider to see the difference.
          </p>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {results.map((card, i) => (
            <div
              key={card.id}
              className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <BeforeAfterSlider card={card} />
              <p className="text-center text-emerald-800 font-semibold mt-3 text-base">{card.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
