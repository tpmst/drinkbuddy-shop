import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Wann bekomme ich Benachrichtigungen?",
    answer:
      "Du bekommst nur dann Benachrichtigungen, wenn du sie in den Einstellungen der App angeschalten hast. Zudem muss jemand in deiner Gruppe oder in deiner Nähe dich einladen.",
    value: "item-1",
  },
  {
    question: "Wie trete ich einer Gruppe bei?",
    answer:
      "Gehe auf die Profilseite und scrolle zu Deine Gruppe, dort drückst du auf Gruppe beitreten und gibts den Namen der Gruppe ein, dann nach wird deine Anfrage verschickt.",
    value: "item-2",
  },
  {
    question: "Hat die App einen Dark und Light-Mode?",
    answer:
      "Ja die App hat einen Dark- und einen Light-Mode, welcher im Profiltab ausgewählt werden kann.",
    value: "item-3",
  },
  {
    question: "Was bringt mir die App?",
    answer:
      "Du kannst deinen persöhnlichen Alkoholkonsum aufzeichnen und mit deinen Freunden vergleichen. Zudem kannst du Trinkspiele auf der App spielen.",
    value: "item-4",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Häufig gestellte{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Fragen
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Immernoch Fragen?{" "}
        <a
          rel="noreferrer noopener"
          href="#contactUs"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
