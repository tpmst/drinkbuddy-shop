import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FaCalculator, FaList } from "react-icons/fa6";
import { MdLeaderboard, MdOutlineFavorite } from "react-icons/md";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <FaList size={60} color="#22bd5b" />,
    title: "Aufzeichnung",
    description:
      "Wenn du deine Getränke aufzeichnest, kannst du immer nachsehen wie viel du getrunken hast",
  },
  {
    icon: <FaCalculator size={60} color="#22bd5b" />,
    title: "Promillerechner",
    description:
      "Mit hinzugefügten Getränken steigt dein Promillewert, du verlierst aber nach der Zeit wieder Promille",
  },
  {
    icon: <MdLeaderboard size={60} color="#22bd5b" />,
    title: "Leaderboard",
    description:
      "Schaue auf dem Leaderboard nach welche Gruppe den meisten Alkohol konsumiert hat",
  },
  {
    icon: <MdOutlineFavorite size={60} color="#22bd5b" />,
    title: "Favoriten",
    description:
      "Speicher hinzugefügte Getränke als Favorit, um sie immer wieder abzurufen",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        Welche{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Besonderheiten{" "}
        </span>
        hat DrinkBuddy
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground"></p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
