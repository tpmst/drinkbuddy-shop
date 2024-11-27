import React, { useState } from "react";
import "./DataRemove.css";
import { createDataRemove } from "@/logic/DataBase";
import { Input } from "@/components/ui/input";
import { InputMessage } from "@/components/ui/inputMessage";
import { Button } from "@/components/ui/button";
import Alert from "@/components/Alert";

const DataRemoveForm: React.FC = () => {
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

    try {
      const newAuftrag = {
        email: email,
        message: message,
      };

      await createDataRemove(newAuftrag);
      setAlert({
        title: "Erfolg!",
        description:
          "Deine Anfrage zum Entfernen der Daten wurde erfolgreich übermittelt.",
        type: "success",
      });

      // Felder zurücksetzen
      setEmail("");
      setMessage("");
    } catch (error) {
      setAlert({
        title: "Fehler!",
        description:
          "Ein Fehler ist aufgetreten. Bitte versuche es später erneut.",
        type: "error",
      });
    }
  };
  return (
    <section className="container py-24 sm:py-32 w-[100%]">
      <div className="bg-card p-8 rounded-lg shadow-md max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 text-primary">
          Kundendaten entfernen
        </h1>

        <div className="space-y-6 text-foreground">
          <p>
            <strong>
              1. Möchtest du deine personenbezogenen Daten löschen lassen?
            </strong>
            <br />
            <br />
            Hier kannst du eine Anfrage zur Löschung deiner gespeicherten
            Kundendaten einreichen. Bitte fülle das folgende Formular aus, um
            deine Anfrage zu stellen. Wir werden uns umgehend darum kümmern,
            dass deine Daten gemäß den Datenschutzbestimmungen entfernt werden.
          </p>
        </div>
        <div className="m-6">
          <div className="space-y-6 text-foreground">
            <p>
              <strong>
                2. Du musst nur dieses Formular ausfüllen und deine Daten werden
                gelöscht?
              </strong>
              <br />
              <br />
            </p>
          </div>
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
              placeholder="Grund für das Entfernen der Daten"
              className="bg-muted/50 dark:bg-muted/80"
              aria-label="Nachricht"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button type="submit">Senden</Button>
          </form>
        </div>
        {alert && (
          <Alert
            title={alert.title}
            description={alert.description}
            type={alert.type}
          />
        )}
      </div>
    </section>
  );
};

export default DataRemoveForm;
