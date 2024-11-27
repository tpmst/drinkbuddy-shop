import { Badge } from "./ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { IoBeer } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { useTheme } from "./theme-provider";

export const HeroCards = () => {
  const { theme } = useTheme(); // Korrekt extrahiert die 'theme'-Eigenschaft
  const isDarkTheme = theme === "dark";
  const iconColor = isDarkTheme ? "#FFD700" : "#ffb300"; // Yellow in dark mode, green otherwise

  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[30px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <FaPeopleGroup size={50} color={iconColor} />
          </div>
          <div>
            <CardTitle>Gruppen</CardTitle>
            <CardDescription className="text-md mt-2">
              Mach eine Gruppe mit deinen Freunden und schau wer am meisten
              Trinkt.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <CardTitle className="text-center">Tom Stiefel</CardTitle>
          <CardDescription className="font-normal text-primary">
            Founder & Developer
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            Ich habe spaß am Programmieren und warum nicht das Trinken damit
            verbinden.
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/tpmst"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>

            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/tom-stiefel-98128531a/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Premium
            <Badge variant="secondary" className="text-sm text-primary">
              am Besten :)
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">1.99€</span>
            <span className="text-muted-foreground"> /Monat</span>
          </div>

          <CardDescription>
            Du hast wunderbare extra Funktionen innerhalb der App
          </CardDescription>
        </CardHeader>

        <CardContent>
          <a
            href="#pricing"
            className="w-full inline-block text-center py-2 px-4 bg-primary text-primary-foreground rounded hover:bg-primary/90"
          >
            Kaufen
          </a>{" "}
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {[
              "Einladen in der Umgebung",
              "keine Werbung",
              "Extra Trinkspiele",
              "mehr kommt dazu",
            ].map((benefit: string) => (
              <span key={benefit} className="flex">
                <Check
                  className={isDarkTheme ? "text-yellow-500" : "text-green-500"}
                />{" "}
                <h3 className="ml-2">{benefit}</h3>
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[360px] -right-[20px] bottom-[20px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <IoBeer size={50} color={iconColor} />
          </div>
          <div>
            <CardTitle>Zum Trinken einladen</CardTitle>
            <CardDescription className="text-md mt-2">
              Lade deine Gruppenmitglieder ein. Mit Premium kannst du alle Leute
              in einer Umgebung von bis zu 30km einladen ;)
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
