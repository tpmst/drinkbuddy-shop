import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              DrinkBuddy
            </span>{" "}
            um mit deinen
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Freunden
            </span>{" "}
          </h2>
          <h3 className="inline">
            Spaß am{" "}
            <span className="inline bg-gradient-to-r from-[#f1e31f] via-[#f1c71f] to-[#d8b91b] text-transparent bg-clip-text">
              Trinken
            </span>{" "}
            zu haben
          </h3>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Lade Freunde zum Trinekn ein
        </p>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
