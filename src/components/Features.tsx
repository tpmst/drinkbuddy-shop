import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VscGraphLine } from "react-icons/vsc";
import { MdGroups } from "react-icons/md";
import { FaCalculator, FaList } from "react-icons/fa6";
import { MdLeaderboard, MdOutlineFavorite } from "react-icons/md";
import { GiDrinking } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { IoIosBeer } from "react-icons/io";
import { useTheme } from "./theme-provider"; // Import the useTheme hook

interface FeatureProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

export const Features = () => {
  const { theme } = useTheme(); // Extract the theme property from useTheme
  const iconColor = theme === "dark" ? "#FFD700" : "#ffb300"; // Yellow in dark mode, orange otherwise

  const features: FeatureProps[] = [
    {
      title: "Konsum",
      description: "Zeigt die Konsumierten Getränke und den Promillerechner",
      icon: <VscGraphLine size={60} color={iconColor} />,
    },
    {
      title: "Gruppen",
      description:
        "Zeigt die von deiner Gruppe konsumierten Getränke, sowie wer von was am meisten getrunken hat",
      icon: <MdGroups size={60} color={iconColor} />,
    },
    {
      title: "Trinkspiele",
      description:
        "Verschiedene Trinkspiele mit verschiedenen Sorten wie Party, 18+ usw...",
      icon: <GiDrinking size={60} color={iconColor} />,
    },
    {
      title: "Profil",
      description:
        "Kombiniert dein Profil und deine Einstellungen in eine Ansicht, sodass du den Promillerechner auf dich zuschneiden kannst oder auch die Benachrichtigungen deaktivieren kannst",
      icon: <CgProfile size={60} color={iconColor} />,
    },
    {
      title: "Drinks",
      description:
        "Durch das hinzufügen von Getränken steigt dein Promillewert, sowie das ranking deiner Gruppe sofern du in einer bist.",
      icon: <IoIosBeer size={60} color={iconColor} />,
    },
    {
      icon: <FaList size={60} color={iconColor} />,
      title: "Aufzeichnung",
      description:
        "Wenn du deine Getränke aufzeichnest, kannst du immer nachsehen wie viel du getrunken hast",
    },
    {
      icon: <FaCalculator size={60} color={iconColor} />,
      title: "Promillerechner",
      description:
        "Mit hinzugefügten Getränken steigt dein Promillewert, du verlierst aber nach der Zeit wieder Promille",
    },
    {
      icon: <MdLeaderboard size={60} color={iconColor} />,
      title: "Leaderboard",
      description:
        "Schaue auf dem Leaderboard nach welche Gruppe den meisten Alkohol konsumiert hat, zeigt auch welchen Platz deine Gruppe belegt",
    },
    {
      icon: <MdOutlineFavorite size={60} color={iconColor} />,
      title: "Favoriten",
      description:
        "Speicher hinzugefügte Getränke als Favorit, um sie immer wieder abzurufen",
    },
  ];

  const featureList: string[] = [
    "Dark/Light theme",
    "Minimalistsisches Design",
    "Gruppen",
    "Leaderboard",
    "Trinkspiele",
    "Benachrichtigungen",
  ];

  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Die Seiten innerhalb von
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          DrinkBuddy
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, icon }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">{description}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
