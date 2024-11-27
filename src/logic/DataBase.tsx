import { firestoredb, auth } from "./FirebaseSetup";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  Timestamp,
} from "firebase/firestore";

interface ContactData {
  email: string;
  tel: string;
  message: string;
}

interface DatenRemove {
  email: string;
  message: string;
}

// Funktion für monatliche Checkout-Session
export const createCheckoutSessionMonthly = async (
  setAlert: (alertData: {
    title: string;
    description: string;
    type: "success" | "error";
  }) => void
) => {
  const currentUser = auth.currentUser;

  if (!currentUser) {
    setAlert({
      title: "Fehler",
      description: "Bitte melde dich an, um einen Kauf zu tätigen.",
      type: "error",
    });
    throw new Error("Bitte melde dich an, um einen Kauf zu tätigen.");
  }

  try {
    const docRef = await addDoc(
      collection(
        firestoredb,
        "customers-stripe",
        currentUser.uid,
        "checkout_sessions"
      ),
      {
        price: "price_1QJsNeBq7TdB1kQgh9bvTuTd", // Preis-ID für monatlich
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    );

    onSnapshot(
      doc(
        firestoredb,
        "customers-stripe",
        currentUser.uid,
        "checkout_sessions",
        docRef.id
      ),
      (snap) => {
        const data = snap.data();
        if (data) {
          const { error, url } = data;
          if (error) {
            console.error("Fehler beim Erstellen der Checkout-Session:", error);
            setAlert({
              title: "Fehler",
              description: `Ein Fehler ist aufgetreten: ${error.message}`,
              type: "error",
            });
            throw new Error(`Ein Fehler ist aufgetreten: ${error.message}`);
          }
          if (url) {
            setAlert({
              title: "Erfolg",
              description: "Weiterleitung zur Zahlungsseite...",
              type: "success",
            });
            window.location.assign(url);
          }
        }
      }
    );
  } catch (error) {
    console.error("Fehler beim Erstellen der Checkout-Session:", error);
    setAlert({
      title: "Fehler",
      description: "Es gab ein Problem beim Erstellen der Checkout-Session.",
      type: "error",
    });
    throw new Error("Es gab ein Problem beim Erstellen der Checkout-Session.");
  }
};

// Funktion für jährliche Checkout-Session
export const createCheckoutSessionYearly = async (
  setAlert: (alertData: {
    title: string;
    description: string;
    type: "success" | "error";
  }) => void
) => {
  const currentUser = auth.currentUser;

  if (!currentUser) {
    setAlert({
      title: "Fehler",
      description: "Bitte melde dich an, um einen Kauf zu tätigen.",
      type: "error",
    });
    throw new Error("Bitte melde dich an, um einen Kauf zu tätigen.");
  }

  try {
    const docRef = await addDoc(
      collection(
        firestoredb,
        "customers-stripe",
        currentUser.uid,
        "checkout_sessions"
      ),
      {
        price: "price_1QJsNeBq7TdB1kQg689sU9MV", // Preis-ID für jährlich
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    );

    onSnapshot(
      doc(
        firestoredb,
        "customers-stripe",
        currentUser.uid,
        "checkout_sessions",
        docRef.id
      ),
      (snap) => {
        const data = snap.data();
        if (data) {
          const { error, url } = data;
          if (error) {
            console.error("Fehler beim Erstellen der Checkout-Session:", error);
            setAlert({
              title: "Fehler",
              description: `Ein Fehler ist aufgetreten: ${error.message}`,
              type: "error",
            });
            throw new Error(`Ein Fehler ist aufgetreten: ${error.message}`);
          }
          if (url) {
            setAlert({
              title: "Erfolg",
              description: "Weiterleitung zur Zahlungsseite...",
              type: "success",
            });
            window.location.assign(url);
          }
        }
      }
    );
  } catch (error) {
    console.error("Fehler beim Erstellen der Checkout-Session:", error);
    setAlert({
      title: "Fehler",
      description: "Es gab ein Problem beim Erstellen der Checkout-Session.",
      type: "error",
    });
    throw new Error("Es gab ein Problem beim Erstellen der Checkout-Session.");
  }
};

// create ContactUS
export const createContactUS = async (contactData: ContactData) => {
  try {
    // Füge die Eingabedaten zur `contactUs`-Sammlung in Firestore hinzu
    await addDoc(collection(firestoredb, "contactUs"), {
      ...contactData,
      createdAt: Timestamp.now(), // Zeitstempel für die Erstellung hinzufügen
    });
    console.log("Daten erfolgreich in der Sammlung `contactUs` gespeichert.");
  } catch (error) {
    console.error("Fehler beim Speichern der Daten in Firestore:", error);
    throw new Error("Fehler beim Speichern der Kontaktdaten.");
  }
};

export const createDataRemove = async (contactData: DatenRemove) => {
  try {
    // Füge die Eingabedaten zur `contactUs`-Sammlung in Firestore hinzu
    await addDoc(collection(firestoredb, "dataRemove"), {
      ...contactData,
      createdAt: Timestamp.now(), // Zeitstempel für die Erstellung hinzufügen
    });
    console.log("Daten übertragen");
  } catch (error) {
    console.error("Fehler beim Speichern der Daten in Firestore:", error);
    throw new Error("Fehler beim Speichern der Kontaktdaten.");
  }
};

export const createRegisterForTest = async (contactData: DatenRemove) => {
  try {
    // Füge die Eingabedaten zur `contactUs`-Sammlung in Firestore hinzu
    await addDoc(collection(firestoredb, "register-test"), {
      ...contactData,
      createdAt: Timestamp.now(), // Zeitstempel für die Erstellung hinzufügen
    });
    console.log("Daten erfolgreich in der Sammlung `contactUs` gespeichert.");
  } catch (error) {
    console.error("Fehler beim Speichern der Daten in Firestore:", error);
    throw new Error("Fehler beim Speichern der Kontaktdaten.");
  }
};
