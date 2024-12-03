import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import {
  createCheckoutSessionMonthly,
  createCheckoutSessionYearly,
} from "@/logic/DataBase";
import { useState } from "react";
import Alert from "./Alert";
import Spinner from "./Spinner";
import { getAnalytics, logEvent } from "firebase/analytics";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  duaration: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Standard",
    duaration: "/monat",
    popular: 0,
    price: 0,
    description: "Du hast die Standart Optionen",
    buttonText: "Herunterladen",
    benefitList: [
      "Getränkehistore",
      "Promillerechner und Historie",
      "Trinkspiele",
      "Gruppeneinladung",
      "Gruppenerstellung",
      "Leaderboard",
      "Favoriten in den Getränken",
    ],
  },
  {
    title: "Premium",
    duaration: "/monat",
    popular: 1,
    price: 1.99,
    description: "Die Monatliche Version.",
    buttonText: "Kaufen",
    benefitList: [
      "alles was Standard kann",
      "Einladen in der Umgebung",
      "keine Werbung",
      "Extra Trinkspiele",
      "mehr kommt dazu",
    ],
  },
  {
    title: "Premium",
    duaration: "/jahr",
    popular: 0,
    price: 22.0,
    description: "Du sparst dir ein bisschen was ;)",
    buttonText: "Kaufen",
    benefitList: [
      "alles was Standard kann",
      "Einladen in der Umgebung",
      "keine Werbung",
      "Extra Trinkspiele",
      "mehr kommt dazu",
    ],
  },
];

export const Pricing = () => {
  const [activeAlert, setActiveAlert] = useState<string | null>(null);
  const [alertData, setAlertData] = useState<{
    title: string;
    description: string;
    type: "success" | "error";
  } | null>(null);
  const [loading, setLoading] = useState<string | null>(null);
  const analytics = getAnalytics();

  const handleClick = async (
    text: string,
    duaration: string,
    title: string
  ) => {
    setActiveAlert(null);
    setLoading(title); // Ladezustand aktivieren

    try {
      if (text === "Kaufen") {
        logEvent(analytics, "tryed_purchase");
        if (duaration === "/monat") {
          await createCheckoutSessionMonthly((alert) => {
            setAlertData(alert);
            setActiveAlert(title);
            setLoading(null); // Ladezustand deaktivieren
          });
        } else {
          await createCheckoutSessionYearly((alert) => {
            setAlertData(alert);
            setActiveAlert(title);
            setLoading(null); // Ladezustand deaktivieren
          });
        }
      } else {
        logEvent(analytics, "tryed_downlaod");
        // URL für download
      }
    } catch (error) {
      setAlertData({
        title: "Fehler",
        description: "Es gab ein Problem beim Erstellen der Checkout-Session.",
        type: "error",
      });
      setActiveAlert(title);
      setLoading(null); // Ladezustand deaktivieren
    }
  };

  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Hol dir jetzt die
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Standardversion{" "}
        </span>
        oder kauf
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Premium{" "}
        </span>
        für mehr Funktionen
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Hier sind die verschiedenen Optionen. Suche die passende für dich aus.
      </h3>
      <div className="items-center justify-center w-full">
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingList.map((pricing: PricingProps) => (
            <Card
              key={pricing.title + pricing.duaration}
              className={
                pricing.popular === PopularPlanType.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="flex item-center justify-between">
                  {pricing.title}
                  {pricing.popular === PopularPlanType.YES ? (
                    <Badge variant="secondary" className="text-sm text-primary">
                      Beste :)
                    </Badge>
                  ) : null}
                </CardTitle>
                <div>
                  <span className="text-3xl font-bold">{pricing.price}€</span>
                  <span className="text-muted-foreground">
                    {pricing.duaration}
                  </span>
                </div>

                <CardDescription>{pricing.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <button
                  className="w-full inline-block text-center py-2 px-4 bg-primary text-primary-foreground rounded hover:bg-primary/90 dark:text-gray-900"
                  onClick={() =>
                    handleClick(
                      pricing.buttonText,
                      pricing.duaration,
                      pricing.title + pricing.duaration
                    )
                  }
                  disabled={loading === pricing.title + pricing.duaration} // Deaktivieren, wenn der Button lädt
                >
                  {loading === pricing.title + pricing.duaration ? (
                    <Spinner /> // Zeige den Spinner während des Ladens
                  ) : (
                    pricing.buttonText
                  )}
                </button>
                {activeAlert === pricing.title + pricing.duaration &&
                  alertData && (
                    <Alert
                      title={alertData.title}
                      description={alertData.description}
                      type={alertData.type}
                    />
                  )}
              </CardContent>

              <hr className="w-4/5 m-auto mb-4" />

              <CardFooter className="flex">
                <div className="space-y-4">
                  {pricing.benefitList.map((benefit: string) => (
                    <span key={benefit} className="flex">
                      <Check className="text-green-500" />{" "}
                      <h3 className="ml-2">{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
