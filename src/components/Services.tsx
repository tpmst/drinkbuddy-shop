import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import cubeLeg from "../assets/cube-leg.png";

import { FaPercentage } from "react-icons/fa";
import { IoMdBeer, IoMdSettings } from "react-icons/io";
import { useTheme } from "./theme-provider"; // Import the useTheme hook

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

export const Services = () => {
  const { theme } = useTheme(); // Extract the theme property from useTheme
  const iconColor = theme === "dark" ? "#FFD700" : "#ffb300"; // Yellow in dark mode, green otherwise

  const serviceList: ServiceProps[] = [
    {
      title: "Promille",
      description:
        "Zeigt dir in einem Diagramm wie hoch deine Promille über die Woche waren",
      icon: <FaPercentage size={70} color={iconColor} />, // Use iconColor here
    },
    {
      title: "Getränke",
      description:
        "Zeigt dir sortiert nach Tagen und Getränksorte die Getränke die du konsumiert hast",
      icon: <IoMdBeer size={70} color={iconColor} />, // Use iconColor here
    },
    {
      title: "Einstellungen",
      description:
        "Schalte die Benachrichtigungen in der App einfach ab und entscheide dich zwischen Dark- und Light-Mode",
      icon: <IoMdSettings size={70} color={iconColor} />, // Use iconColor here
    },
  ];

  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Andere{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Funktionen{" "}
            </span>
            von DrinkBuddy
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 "></p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title} className="bg-muted/50">
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
        <Card className="bg-muted/50">
          <img
            src={cubeLeg}
            className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
            alt="About services"
          />
        </Card>
      </div>
    </section>
  );
};
