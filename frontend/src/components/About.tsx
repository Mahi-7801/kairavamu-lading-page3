import { Check, Award, Users, Activity } from 'lucide-react';
import { useInView } from '../hooks/useScrollAnimation';

const highlights = [
  'Advanced Laser Treatments',
  'Skin Rejuvenation',
  'Personalized Beauty Solutions',
  'Natural-Looking Results',
  'Client-Focused Approach',
  'Premium Safety Standards',
];

const stats = [
  { icon: Award, value: '10+', label: 'Years Experience' },
  { icon: Users, value: '15K+', label: 'Happy Clients' },
  { icon: Activity, value: '50+', label: 'Treatments Offered' },
];

export default function About() {
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
                <p className="font-serif italic text-2xl text-emerald-800 font-bold leading-none" style={{ fontFamily: 'Georgia, serif' }}>Yamini</p>
                <p className="text-[10px] tracking-[0.2em] text-clinic-gray font-semibold uppercase mt-2">Senior Cosmetologist &amp; Aesthetic Expert</p>
              </div>
            </div>
          </div>

          {/* Right Column: Info & Highlights Grid */}
          <div className={`flex flex-col justify-center transition-all duration-700 delay-200 mt-8 lg:mt-0 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <p className="text-gold-600 font-medium text-xs tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                <span className="text-gold-500">✦</span> ABOUT
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[40px] font-bold text-emerald-800 mb-3 leading-tight">
                Yamini Kiran <span className="text-clinic-gray font-normal">Pasupuleti</span>
              </h2>
              <p className="text-clinic-gray italic text-sm md:text-base font-medium mb-6">
                Senior Cosmetologist &amp; Aesthetic Expert &bull; 10+ Years Experience
              </p>

              <p className="text-clinic-gray leading-relaxed mb-8 text-sm md:text-base">
                With over a decade of experience in aesthetic skincare and cosmetic treatments, Yamini specializes in advanced laser treatments, skin rejuvenation, and personalized beauty solutions. Her client-focused approach helps individuals achieve healthy, radiant, and natural-looking results tailored to their unique skin concerns.
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

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-gold-50/40 border border-gold-100/50 rounded-2xl p-4 text-center transition-all duration-300 hover:shadow-premium hover:bg-gold-50/70">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 mb-2">
                    <stat.icon className="w-5 h-5 text-emerald-800" />
                  </div>
                  <p className="font-serif text-2xl md:text-3xl font-bold text-emerald-800">{stat.value}</p>
                  <p className="text-[10px] tracking-[0.15em] text-clinic-gray font-semibold uppercase mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

