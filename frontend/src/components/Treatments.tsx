import { useState, useEffect, useRef } from 'react';
import { Droplets, Zap, TrendingUp, Layers, Sparkles, ChevronRight, HeartPulse, Link2 } from 'lucide-react';

const treatments = [
  {
    id: 'prp',
    icon: Droplets,
    image: '/prp_treatment.png',
    title: 'PRP Hair Growth Treatment',
    subtitle: 'Platelet Rich Plasma Therapy',
    desc: 'Uses your body\'s natural growth factors to stimulate dormant hair follicles and promote new hair growth.',
    benefits: ['Reduces Hair Fall', 'Stimulates Hair Growth', 'Improves Hair Thickness', 'Enhances Hair Density', 'Natural & Safe Procedure'],
    price: '\u20B94,000 \u2013 \u20B910,000',
    priceLabel: 'Per Session',
    offer: 'Up To 40% OFF',
    accent: 'from-amber-400 to-amber-600',
    bg: 'bg-amber-50',
  },
  {
    id: 'gfc',
    icon: Zap,
    image: '/gfc_treatment.png',
    title: 'GFC Hair Treatment',
    subtitle: 'Growth Factor Concentrate Therapy',
    desc: 'An advanced hair restoration treatment using concentrated growth factors to improve hair quality and regrowth.',
    benefits: ['Reduces Hair Fall', 'Promotes Hair Regrowth', 'Improves Hair Density', 'Strengthens Hair Roots', 'Safe & Natural Treatment'],
    price: '\u20B95,000 \u2013 \u20B910,000',
    priceLabel: 'Per Session',
    offer: 'Up To 40% OFF',
    accent: 'from-emerald-400 to-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    id: 'hairfall',
    icon: HeartPulse,
    image: '/hair_fall_treatment.png',
    title: 'Hair Fall Treatment Programs',
    subtitle: 'Targeted Hair Fall Solutions',
    desc: 'Target the root causes of excessive hair shedding with personalized treatment plans for lasting results.',
    benefits: ['Controls Hair Fall', 'Improves Scalp Health', 'Strengthens Hair Follicles', 'Reduces Hair Breakage', 'Promotes Healthy Hair Growth'],
    price: null,
    priceLabel: 'Consult for Pricing',
    offer: null,
    accent: 'from-red-400 to-red-600',
    bg: 'bg-red-50',
  },
  {
    id: 'regrowth',
    icon: TrendingUp,
    image: '/hair_regrowth.png',
    title: 'Hair Regrowth Programs',
    subtitle: 'Comprehensive Regrowth Solutions',
    desc: 'Comprehensive treatment programs designed to restore hair volume, density and your confidence.',
    benefits: ['Boosts Hair Growth', 'Improves Hair Density', 'Strengthens Existing Hair', 'Customized Solutions', 'Long-Term Maintenance Support'],
    price: null,
    priceLabel: 'Consult for Pricing',
    offer: null,
    accent: 'from-cyan-400 to-cyan-600',
    bg: 'bg-cyan-50',
  },
  {
    id: 'extensions',
    icon: Link2,
    image: '/hair_extensions.png',
    title: 'Hair Extensions',
    subtitle: 'Premium Hair Extension Solutions',
    desc: 'Instantly enhance hair length, volume and appearance with premium hair extension solutions.',
    benefits: ['Instant Hair Volume', 'Longer Hair Appearance', 'Natural Looking Results', 'Custom Matching', 'Confidence Boosting Transformation'],
    price: null,
    priceLabel: 'Consult for Pricing',
    offer: null,
    accent: 'from-violet-400 to-violet-600',
    bg: 'bg-violet-50',
  },
];

const concerns = [
  'Male Pattern Baldness', 'Female Pattern Hair Loss', 'Post Pregnancy Hair Fall',
  'Stress Related Hair Loss', 'Hair Thinning', 'Weak Hair Roots',
  'Patchy Hair Loss', 'Scalp Health Issues', 'Early Hair Loss Prevention',
];

function useStaggerInView(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

export default function Treatments() {
  const { ref, isInView } = useStaggerInView();
  const { ref: ref2, isInView: isInView2 } = useStaggerInView();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="treatments" className="relative section-padding bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-14 md:mb-16 transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="inline-block px-4 py-1.5 bg-gold-500/10 text-gold-600 text-xs font-semibold tracking-widest uppercase rounded-full mb-4">Our Treatments</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-800 leading-tight mb-4">
            Advanced <span className="text-gradient-gold">Hair Growth</span><br className="hidden md:block" />
            &amp; Hair Restoration Solutions
          </h2>
          <p className="text-clinic-gray max-w-2xl mx-auto mt-2 text-base md:text-lg leading-relaxed">
            PRP, GFC, Hair Fall Treatments, Hair Regrowth Programs &amp; Hair Extensions — Regain thicker, healthier and stronger hair.
          </p>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {treatments.map((t, i) => {
            const delay = i * 60;
            return (
              <div
                key={t.id}
                id={t.id}
                onMouseEnter={() => setHoveredId(t.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative rounded-2xl p-6 lg:p-8 cursor-default transition-all duration-700 ease-out ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${delay}ms`,
                  background: 'rgba(255,255,255,0.75)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(225,207,124,0.12)',
                  boxShadow: hoveredId === t.id
                    ? '0 24px 48px -16px rgba(29,70,49,0.2), 0 2px 8px rgba(29,70,49,0.04)'
                    : '0 8px 32px -8px rgba(29,70,49,0.06), 0 1px 3px rgba(0,0,0,0.02)',
                  transform: hoveredId === t.id ? 'translateY(-4px) scale(1.005)' : 'translateY(0) scale(1)',
                }}
              >
                <div className="relative h-52 md:h-64 -mx-6 -mt-6 lg:-mx-8 lg:-mt-8 mb-4 overflow-hidden rounded-t-2xl">
                  <img
                    src={t.image}
                    alt={t.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/60 to-transparent pt-8 px-6 pb-3 lg:px-8 lg:pb-3">
                    <div className="flex items-end gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.accent} flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <t.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-base md:text-lg font-bold text-emerald-800 leading-tight">{t.title}</h3>
                        <p className="text-gold-600 text-xs md:text-sm font-medium">{t.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-clinic-gray text-sm leading-relaxed mb-4">{t.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {t.benefits.map((b, bi) => (
                    <span
                      key={b}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full border transition-all duration-300"
                      style={{
                        backgroundColor: hoveredId === t.id ? 'rgba(29,70,49,0.06)' : 'rgba(29,70,49,0.04)',
                        borderColor: hoveredId === t.id ? 'rgba(225,207,124,0.2)' : 'rgba(29,70,49,0.1)',
                        color: '#121f18',
                        transitionDelay: hoveredId === t.id ? `${bi * 30}ms` : '0ms',
                      }}
                    >
                      <Sparkles className="w-3 h-3 text-gold-500 flex-shrink-0" />
                      {b}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'rgba(225,207,124,0.1)' }}>
                  <div>
                    {t.price && (
                      <div>
                        <p className="text-emerald-800 font-serif text-lg font-bold">{t.price}</p>
                        <p className="text-clinic-gray text-xs mt-0.5">{t.priceLabel}</p>
                      </div>
                    )}
                    {!t.price && (
                      <div>
                        <p className="text-emerald-800 font-serif text-sm font-semibold">{t.priceLabel}</p>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2.5">
                    {t.offer && (
                      <span
                        className="inline-flex items-center px-3 py-1 md:px-3 md:py-1 text-[0.625rem] md:text-xs font-bold tracking-wide rounded-md transition-all duration-300"
                        style={{
                          background: 'linear-gradient(135deg, #e1cf7c 0%, #bda54d 50%, #e1cf7c 100%)',
                          color: 'white',
                          boxShadow: hoveredId === t.id ? '0 4px 12px rgba(225,207,124,0.3)' : 'none',
                        }}
                      >
                        {t.offer}
                      </span>
                    )}
                    <a
                      href="#contact"
                      className="relative inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 overflow-hidden group/btn"
                      style={{
                        background: 'linear-gradient(135deg, #e1cf7c 0%, #bda54d 50%, #e1cf7c 100%)',
                        color: 'white',
                        boxShadow: hoveredId === t.id ? '0 4px 16px rgba(225,207,124,0.25)' : '0 2px 8px rgba(225,207,124,0.15)',
                      }}
                    >
                      <span className="relative z-10 flex items-center gap-1.5">
                        Book
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${hoveredId === t.id ? 'translate-x-0.5' : ''}`} />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div ref={ref2} className="max-w-7xl mx-auto mt-20 md:mt-24">
        <div className={`text-center mb-10 transition-all duration-1000 ease-out ${isInView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 bg-gold-500/10 text-gold-600 text-xs font-semibold tracking-widest uppercase rounded-full mb-4">Common Concerns</span>
          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-800">
            Hair Concerns We <span className="text-gradient-gold">Treat</span>
          </h3>
        </div>
        <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-16 before:z-10 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:bottom-0 after:w-16 after:z-10 after:bg-gradient-to-l after:from-white after:to-transparent">
          <div className="flex gap-3 animate-scroll hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
            {[...concerns, ...concerns].map((c, i) => (
              <span
                key={`${c}-${i}`}
                className="inline-flex px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap cursor-default transition-all duration-300 hover:!bg-[#1d4631] hover:!text-white hover:!border-transparent hover:-translate-y-0.5"
                style={{
                  background: 'rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(225,207,124,0.12)',
                  color: '#121f18',
                  boxShadow: '0 4px 12px -4px rgba(29,70,49,0.04)',
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
