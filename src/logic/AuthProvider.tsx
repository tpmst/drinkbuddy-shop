// Define the shape of the context with TypeScript
import { createContext, useState, useEffect, ReactNode } from "react";
import { auth, provider, signInWithPopup } from "./FirebaseSetup";
import { onAuthStateChanged, signOut } from "firebase/auth";

// Define the context type
interface AuthContextType {
  user: any | null;
  signInWithGoogle: () => Promise<void>;
  signOutUser: () => Promise<void>;
  loading: boolean;
}

// Provide a default value that matches the type
const defaultAuthContext: AuthContextType = {
  user: null,
  signInWithGoogle: async () => {},
  signOutUser: async () => {},
  loading: true,
};

// Create context with a default value
export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, signInWithGoogle, signOutUser, loading }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
