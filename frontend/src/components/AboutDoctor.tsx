import { useInView } from '../hooks/useScrollAnimation';

export default function AboutDoctor() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="relative section-padding bg-clinic-cream overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className={`flex flex-col justify-between py-8 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            <div>
              <p className="text-gold-600 font-medium text-sm tracking-wider uppercase mb-3">Meet Your Specialist</p>
              <h2 className="heading-secondary mb-4">
                Yamini Kiran Pasupuleti
              </h2>
              <p className="text-gold-600 text-sm font-medium mb-3">Senior Cosmetologist & Aesthetic Expert</p>
              <div className="gold-divider !mx-0 mb-6" />

              <p className="text-clinic-gray leading-relaxed mb-6">
                With over a decade of experience in aesthetic skincare and cosmetic treatments, Yamini specializes in advanced laser treatments, skin rejuvenation, and personalized beauty solutions. Her client-focused approach helps individuals achieve healthy, radiant, and natural-looking results tailored to their unique skin concerns.
              </p>
            </div>

            <div>
              <div className="grid grid-cols-3 gap-4">
                <div className="glass-card rounded-xl p-4 text-center">
                  <p className="text-emerald-800 font-serif text-2xl font-bold">10+</p>
                  <p className="text-clinic-gray text-xs mt-1">Years Experience</p>
                </div>
                <div className="glass-card rounded-xl p-4 text-center">
                  <p className="text-emerald-800 font-serif text-2xl font-bold">15K+</p>
                  <p className="text-clinic-gray text-xs mt-1">Happy Clients</p>
                </div>
                <div className="glass-card rounded-xl p-4 text-center">
                  <p className="text-emerald-800 font-serif text-2xl font-bold">50+</p>
                  <p className="text-clinic-gray text-xs mt-1">Treatments Offered</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative overflow-hidden rounded-3xl shadow-gold-lg">
              <img
                src="/cosmetologist-yamini.jpg"
                alt="Yamini Kiran Pasupuleti"
                className="w-full h-[520px] object-cover object-[50%_20%] transition-all duration-700 ease-out hover:scale-[1.03] hover:shadow-2xl"
              />
              <div className="absolute top-4 left-4 px-4 py-2 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full">
                <span className="text-white text-sm font-semibold">10+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
