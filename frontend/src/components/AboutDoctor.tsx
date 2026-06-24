import { Check } from 'lucide-react';
import { useInView } from '../hooks/useScrollAnimation';

const highlights = [
  '10+ Years Experience',
  'Certified PMU Specialist',
  'Personalized Facial Mapping',
  'Natural-Looking Results',
  'Advanced Aesthetic Techniques',
  'Premium Pigments & Safety Standards',
];

export default function AboutDoctor() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="relative section-padding bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[360px_1fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait Card with Floating Badge */}
          <div className={`relative flex justify-center order-first transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[2/3] rounded-[36px] shadow-gold-lg">
              <div className="w-full h-full rounded-[36px] overflow-hidden">
                <img
                  src="/cosmetologist-yamini.jpg"
                  alt="Yamini Kiran Pasupuleti"
                  className="w-full h-full object-cover object-[50%_15%] transition-all duration-700 ease-out hover:scale-[1.03]"
                />
              </div>
              
              {/* Floating Name Badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white/95 backdrop-blur-md py-4 px-6 rounded-2xl shadow-xl border border-gold-200/40 text-center z-10 hover:shadow-2xl transition-all duration-300">
                <p className="font-serif italic text-2xl text-emerald-800 font-bold leading-none" style={{ fontFamily: 'Georgia, serif' }}>Dr. Yamini</p>
                <p className="text-[10px] tracking-[0.2em] text-clinic-gray font-semibold uppercase mt-2">PMU Specialist</p>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Info & Highlights Grid */}
          <div className={`flex flex-col justify-center transition-all duration-700 delay-200 mt-8 lg:mt-0 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <p className="text-gold-600 font-medium text-xs tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                <span className="text-gold-500">✦</span> ABOUT THE DOCTOR
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[40px] font-bold text-emerald-800 mb-3 leading-tight">
                Dr. Yamini Kiran <span className="text-clinic-gray font-normal">Pasupuleti</span>
              </h2>
              <p className="text-clinic-gray italic text-sm md:text-base font-medium mb-6">
                PG Diploma in Cosmetology & Aesthetics &bull; 10+ Years Experience
              </p>

              <p className="text-clinic-gray leading-relaxed mb-8 text-sm md:text-base">
                Dr. Yamini specializes in aesthetic enhancement procedures and personalized beauty solutions that enhance facial harmony while maintaining a natural appearance. Each treatment blends artistic precision with advanced PMU techniques and premium pigments.
              </p>
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3.5 bg-gold-50/40 border border-gold-100/50 rounded-2xl p-4 transition-all duration-300 hover:shadow-premium hover:bg-gold-50/70">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-gold-700" />
                  </div>
                  <span className="text-emerald-900 font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

