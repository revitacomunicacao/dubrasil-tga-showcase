import blocosolucoes from "@/assets/blocosolucoes.jpeg"

const ModulesMock = () => {
  return (
    <section id="modulos-mock" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <img
          src={blocosolucoes}
          alt="Simulação de layout de soluções"
          className="mx-auto w-full h-auto"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  )
}

export default ModulesMock

