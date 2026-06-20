import { Award, BookOpen, Heart, Microscope, Pill, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useScrollAnimation';

const expertise = [
  { icon: Heart, text: 'Hair Fall Management' },
  { icon: Microscope, text: 'PRP Therapy' },
  { icon: Sparkles, text: 'GFC Therapy' },
  { icon: BookOpen, text: 'Hair Growth Programs' },
  { icon: Pill, text: 'Scalp Treatments' },
  { icon: Award, text: 'Hair Restoration Solutions' },
];

export default function AboutDoctor() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="relative section-padding bg-clinic-cream overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          <div className={`relative h-full transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative h-full">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-500/10 to-emerald-600/10 rounded-3xl rotate-3 h-[calc(100%+32px)]" />
              <div className="relative bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center h-full">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden mb-6 shadow-gold-lg ring-4 ring-gold-500/20 -mt-8">
                  <img
                    src="/cosmetologist-yamini.jpg"
                    alt="Dr. Yamini Kiran Pasupuleti"
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
                <h3 className="text-white font-serif text-2xl md:text-3xl font-bold text-center">Dr. Yamini Kiran Pasupuleti</h3>
                <p className="text-gold-400 text-sm md:text-base mt-2 text-center">PG Diploma in Cosmetology & Aesthetics</p>
                <div className="mt-6 px-6 py-2.5 bg-gold-500/10 border border-gold-500/20 rounded-full">
                  <span className="text-gold-400 text-sm font-medium">10+ Years Experience</span>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3 w-full max-w-sm">
                  {expertise.map((item) => (
                    <div key={item.text} className="flex items-center gap-2 px-3 py-2.5 bg-white/5 rounded-lg">
                      <item.icon className="w-4 h-4 text-gold-500 flex-shrink-0" />
                      <span className="text-white/80 text-xs">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`h-full transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-gold-600 font-medium text-sm tracking-wider uppercase mb-3">Meet Your Specialist</p>
            <h2 className="heading-secondary mb-4">
              Dr. Yamini Kiran Pasupuleti
            </h2>
            <div className="gold-divider !mx-0 mb-6" />

            <p className="text-clinic-gray leading-relaxed mb-4">
              Dr. Yamini Kiran Pasupuleti is a leading <strong>cosmetologist and aesthetic practitioner in Vijayawada</strong>, 
              specializing in advanced <strong>hair restoration</strong>, <strong>hair growth stimulation</strong>, and 
              aesthetic procedures at Kairavam — the premier <strong>luxury salon and aesthetic clinic in Andhra Pradesh</strong>. 
              Every treatment plan is customized based on thorough scalp analysis, hair density evaluation, and individual 
              hair concerns to deliver natural, lasting results.
            </p>

            <p className="text-clinic-gray leading-relaxed mb-4">
              At Kairavam, we combine <strong>advanced aesthetic technology</strong> with personalized care to offer 
              comprehensive solutions for <strong>hair fall management</strong>, <strong>PRP therapy</strong>, 
              <strong>GFC therapy</strong>, and <strong>scalp treatments</strong>. Our goal is to help you achieve 
              healthier hair and renewed confidence through evidence-based, results-driven cosmetic treatments 
              in a luxurious, relaxing environment.
            </p>

            <p className="text-clinic-gray leading-relaxed mb-6">
              Beyond hair restoration, Dr. Yamini offers a wide range of <strong>aesthetic and beauty treatments in Vijayawada</strong> 
              including <strong>Hollywood peel</strong>, <strong>laser toning</strong>, <strong>laser hair reduction</strong>, 
              <strong>PMU eyebrows</strong>, <strong>PMU lip blush</strong>, <strong>SMP scalp micro-pigmentation</strong>, 
              and luxury salon services. Each procedure is performed with precision, using premium products and 
              state-of-the-art equipment to ensure safety, comfort, and exceptional results.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="glass-card rounded-xl p-4 text-center">
                <p className="text-emerald-800 font-serif text-2xl font-bold">10+</p>
                <p className="text-clinic-gray text-xs mt-1">Years Experience</p>
              </div>
              <div className="glass-card rounded-xl p-4 text-center">
                <p className="text-emerald-800 font-serif text-2xl font-bold">1000+</p>
                <p className="text-clinic-gray text-xs mt-1">Happy Patients</p>
              </div>
              <div className="glass-card rounded-xl p-4 text-center">
                <p className="text-emerald-800 font-serif text-2xl font-bold">6+</p>
                <p className="text-clinic-gray text-xs mt-1">Treatments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
