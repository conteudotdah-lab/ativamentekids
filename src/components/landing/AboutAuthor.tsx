import authorPhoto from "@/assets/author-photo.jpg";

const AboutAuthor = () => {
  return (
    <section className="py-12 md:py-16 bg-peach">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border-2 border-primary/20">
            <h2 className="text-2xl font-heading font-bold mb-2">Sobre a Autora</h2>
            <h3 className="text-xl font-heading font-bold text-primary mb-1">
              Fabia Justen
            </h3>
            <p className="text-muted-foreground mb-6">
              Especialista em Desenvolvimento Infantil
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="text-center px-4 py-2 bg-muted rounded-lg">
                <span className="text-2xl font-bold text-foreground">15+</span>
                <p className="text-xs text-muted-foreground uppercase">Anos de Experiência</p>
              </div>
              <div className="text-center px-4 py-2 bg-muted rounded-lg">
                <span className="text-2xl font-bold text-foreground">1.500+</span>
                <p className="text-xs text-muted-foreground uppercase">Famílias Ajudadas</p>
              </div>
              <div className="text-center px-4 py-2 bg-accent text-accent-foreground rounded-lg">
                <span className="text-lg font-bold">TDAH</span>
                <p className="text-xs uppercase">Especialista Certificada</p>
              </div>
              
              <img 
                src={authorPhoto} 
                alt="Fabia Justen - Especialista em Desenvolvimento Infantil"
                className="w-20 h-20 rounded-full object-cover ml-auto border-2 border-primary/20"
              />
            </div>

            <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4">
              "Dediquei minha vida a ajudar crianças com TDAH a desenvolverem seu
              potencial. Essas atividades são o resultado de anos de pesquisa,
              experiência e amor pelo desenvolvimento infantil."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
