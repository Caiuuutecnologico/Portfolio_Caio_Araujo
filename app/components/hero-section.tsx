import Image from "next/image";
import TypedIntro from "./typed-intro";

export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-copy">
          <TypedIntro />
          <p className="hero-description">
            Desenvolvedor apaixonado por transformar ideias em experiências
            digitais. Construo aplicações completas, unindo tecnologia, cuidado
            com os detalhes e boas experiências para quem usa.
          </p>
          <a className="projects-button" href="#projetos">
            <span>Conheça meus projetos</span>
            <span className="button-arrow" aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="portrait-wrap" aria-label="Espaço reservado para foto de Caio Araujo">
          <div className="portrait-frame">
            <div className="portrait-image-wrap">
              <Image
                src="/caio_araujo.png"
                alt="Foto de Caio Araujo"
                fill
                sizes="(max-width: 760px) 68vw, 440px"
                className="portrait-image"
                priority
              />
            </div>
            <span className="portrait-corner corner-top" />
            <span className="portrait-corner corner-bottom" />
          </div>
        </div>
      </div>

      <div className="hero-footer">
        <a href="#projetos">ROLE PARA EXPLORAR <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}
