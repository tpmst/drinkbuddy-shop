export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold">
            Man braucht kein Spaß um
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Alkohol{" "}
            </span>
            zu haben
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0"></p>
        </div>
      </div>
    </section>
  );
};
