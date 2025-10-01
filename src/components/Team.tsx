import { freneros, trabajador } from "@/assets/index";

interface ValuePoint {
  title: string;
  desc: string;
  icon: string;
}

const valuePoints: ValuePoint[] = [
  { title: 'Confianza real', desc: 'Somos un equipo estable que conoces al volver', icon: '🤝' },
  { title: 'Formación técnica', desc: 'Experiencia combinada en frenos y suspensión', icon: '🛠️' },
  { title: 'Acompañamiento', desc: 'Explicamos cada reparación con claridad', icon: '📋' },
];

const mechanicProfiles = [
  {
    label: 'Especialistas en Frenos',
    image: freneros,
    focus: 'Seguridad y precisión',
    quote: 'La tranquilidad del conductor nace en un sistema de frenos confiable.'
  },
  {
    label: 'Diagnóstico y Suspensión',
    image: trabajador,
    focus: 'Rendimiento y estabilidad',
    quote: 'Una suspensión sana protege tu vehículo y cada viaje.'
  }
];

const Team = () => {
  return (
    <section id="equipo" className="section-padding bg-background relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[radial-gradient(circle_at_20%_20%,#f59e0b,transparent_60%)]" aria-hidden="true" />
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in max-w-4xl mx-auto">
          <span className="inline-block bg-accent/15 text-accent px-5 py-2 rounded-full text-sm font-semibold mb-6 tracking-wide">
            Equipo Humano
          </span>
          <h2 className="text-h2 text-foreground mb-8 font-bold leading-tight">
            Mecánicos que <span className="bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent">conocen tu vehículo</span>
          </h2>
          <p className="text-body md:text-xl text-muted-foreground font-normal leading-relaxed">
            No somos una cadena anónima. Somos un equipo estable de técnicos especializados en frenos y suspensión
            que trata cada carro como si fuera propio. La relación comienza con una explicación clara y termina con tu confianza.
          </p>
        </div>

        {/* Mechanics dual layout */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-24">
          {mechanicProfiles.map((m, idx) => (
            <figure
              key={m.label}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-600 ease-standard"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={m.image}
                  alt={m.label}
                  className="w-full h-full object-cover transition-transform duration-600 ease-standard group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block text-xs font-semibold tracking-wide px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white mb-4 border border-white/20">
                    {m.focus}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    {m.label}
                  </h3>
                  <p className="text-white/80 text-sm max-w-sm leading-relaxed">
                    {m.quote}
                  </p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

        {/* Value points & CTA */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
          {valuePoints.map((v, i) => (
            <div
              key={v.title}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-accent/40 transition-all duration-400 ease-standard backdrop-blur-sm"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl" aria-hidden="true">{v.icon}</span>
                <h4 className="font-semibold text-foreground text-lg">{v.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Si quieres una segunda opinión honesta o entender qué necesita realmente tu vehículo, podemos ayudarte sin compromiso.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-semibold text-white bg-gradient-to-r from-accent via-yellow-400 to-accent hover:shadow-[0_10px_30px_rgba(245,158,11,0.4)] transition-all duration-400 ease-standard hover:-translate-y-0.5"
          >
            Hablemos de tu vehículo
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
