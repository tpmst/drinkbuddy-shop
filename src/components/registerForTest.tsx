import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import Alert from "./Alert";
import { createRegisterForTest } from "@/logic/DataBase";
import { InputMessage } from "./ui/inputMessage";

export const RegisterForTest = () => {
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

    const newAuftrag = {
      tel: tel,
      email: email,
      message: message,
    };

    await createRegisterForTest(newAuftrag); // Create fields in Firestore
    setAlert({
      title: "Erfolg!",
      description: "Deine Nachricht wurde erfolgreich gesendet.",
      type: "success",
    });

    // Resets the field in UI
    setTel("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="registerForTest">
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
          Sende uns deine{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Email
          </span>
          , wenn du die App testen möchtest.
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
