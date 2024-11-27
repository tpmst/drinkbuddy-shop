import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import Alert from "./Alert";
import { createContactUS } from "@/logic/DataBase";
import { InputMessage } from "./ui/inputMessage";

export const ContactUS = () => {
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState<{
    title: string;
    description: string;
    type: "success" | "warning" | "error" | "info";
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setAlert({
        title: "Fehler!",
        description: "Bitte gib eine gültige E-Mail-Adresse ein.",
        type: "error",
      });
      return;
    }

    if (tel === "" || message === "") {
      setAlert({
        title: "Information!",
        description: "Bitte trage alle erforderlichen Felder ein.",
        type: "info",
      });
      return;
    }

    const newAuftrag = {
      tel: tel,
      email: email,
      message: message,
    };

    await createContactUS(newAuftrag); // Diese Funktion sollte definiert sein, um Daten zu verarbeiten
    setAlert({
      title: "Erfolg!",
      description: "Deine Nachricht wurde erfolgreich gesendet.",
      type: "success",
    });

    // Felder zurücksetzen
    setTel("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contactUs">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        {alert && (
          <Alert
            title={alert.title}
            description={alert.description}
            type={alert.type}
          />
        )}
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Kontaktiere{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Uns
          </span>{" "}
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Sende uns deine Daten und wir melden uns bei dir.
        </p>

        <form
          className="flex flex-col w-full md:w-6/12 lg:w-4/12 mx-auto gap-4"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="Deine E-Mail-Adresse"
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="+49 1535 268123"
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="Telefon"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
          <InputMessage
            placeholder="Deine Nachricht"
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="Nachricht"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button type="submit">Senden</Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
