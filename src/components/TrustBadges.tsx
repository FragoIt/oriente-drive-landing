const TrustBadges = () => {
  const badges = [
    {
      icon: "✓",
      text: "Garantía Certificada"
    },
    {
      icon: "⚡",
      text: "Servicio Mismo Día"
    },
    {
      icon: "🏆",
      text: "Tecnología de Punta"
    },
    {
      icon: "💯",
      text: "Precios Justos"
    }
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 text-primary-dark font-semibold text-lg md:text-xl"
            >
              <span className="text-2xl md:text-3xl">{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;