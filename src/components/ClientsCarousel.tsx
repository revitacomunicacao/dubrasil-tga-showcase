import Logo from "@/assets/logo tga.png";

const clients = [
  { name: "Cliente 1", placeholder: "LOGO", image: Logo },
  { name: "Cliente 2", placeholder: "LOGO", image: Logo },
  { name: "Cliente 3", placeholder: "LOGO", image: Logo },
  { name: "Cliente 4", placeholder: "LOGO", image: Logo },
  { name: "Cliente 5", placeholder: "LOGO", image: Logo },
  { name: "Cliente 6", placeholder: "LOGO", image: Logo },
  { name: "Cliente 7", placeholder: "LOGO", image: Logo },
  { name: "Cliente 8", placeholder: "LOGO", image: Logo },
];


const ClientsCarousel = () => {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Clientes
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
            Empresas que confiam no ERP TGA
          </h2>
        </div>
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {clients.map((client, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 w-40 h-20 bg-card border border-border rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
            >
              <img
                src={client.image}
                alt={client.placeholder}
                className="max-h-10 max-w-[120px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 w-40 h-20 bg-card border border-border rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
            >
              <img
                src={client.image}
                alt={client.placeholder}
                className="max-h-10 max-w-[120px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-10">
        <p className="text-center text-muted-foreground">
          Mais de <span className="text-accent font-bold">1.000 empresas</span> já transformaram sua gestão com o ERP TGA
        </p>
      </div>
    </section>
  );
};

export default ClientsCarousel;
