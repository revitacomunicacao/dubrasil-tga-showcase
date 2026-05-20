import type { HomeModuleItem } from "@/types/cms"

type ModulesMockProps = {
  modules: HomeModuleItem[]
}

const ModulesMock = ({ modules }: ModulesMockProps) => {
  return (
    <section id="modulos-mock" className="w-full bg-white max-md:pt-12 max-md:pb-0 md:py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {modules.map((card, i) => (
          <article
            key={`${card.title}-${i}`}
            className="relative w-full max-md:aspect-square md:aspect-[16/10] overflow-hidden group"
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover object-center max-md:object-[center_30%] md:object-center transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Overlay azulado no mobile + card levemente transparente no texto */}
            <div
              className="absolute inset-0 bg-[#05244a]/60 max-md:block md:hidden"
              aria-hidden="true"
            />
            <div className="absolute inset-0 z-10 flex max-w-[92%] mx-auto flex-col items-center justify-center px-5 py-4 text-center md:relative md:inset-auto md:mx-0 md:max-w-none md:min-h-full md:justify-start md:px-6 md:pt-8 md:pb-0">
              <div className="flex w-full flex-col items-center justify-center gap-1 max-md:rounded-2xl max-md:bg-white/60 max-md:px-4 max-md:py-4 max-md:backdrop-blur-sm md:bg-transparent md:p-0 md:rounded-none md:backdrop-blur-none">
                <h3 className="font-poppins font-bold text-lg leading-tight text-primary md:text-4xl max-md:mb-0.5 md:mb-2">
                  {card.title}
                </h3>
                <p className="font-poppins text-base leading-snug text-foreground/90 md:text-2xl max-md:mb-0.5 md:mb-3">
                  {card.subtitle}
                </p>
                <p className="font-poppins text-sm leading-snug text-foreground/75 md:text-base max-w-xl max-md:line-clamp-3 md:leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ModulesMock
