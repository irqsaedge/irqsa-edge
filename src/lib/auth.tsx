import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  type User,
} from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

export type AuthMode = "login" | "signup";

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  isAdmin: boolean;
  authMode: AuthMode;
  setAuthMode: (mode: AuthMode) => void;
  authOpen: boolean;
  openAuth: (mode?: AuthMode) => void;
  closeAuth: () => void;
  loginWithGoogle: () => Promise<void>;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  signupWithEmail: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function friendlyAuthError(error: unknown) {
  const code = (error as { code?: string })?.code || "";
  const messages: Record<string, string> = {
    "auth/invalid-credential": "Email or password is incorrect.",
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/email-already-in-use": "An account already exists with this email.",
    "auth/weak-password": "Use a stronger password (at least 6 characters).",
    "auth/popup-closed-by-user": "Google sign-in was cancelled.",
    "auth/popup-blocked": "Your browser blocked the sign-in popup. Please allow popups and try again.",
    "auth/operation-not-allowed": "This sign-in method is not enabled in Firebase yet.",
  };
  return messages[code] || "Something went wrong while signing you in. Please try again.";
}

async function syncUser(user: User) {
  const ref = doc(db, "users", user.uid);
  const existing = await getDoc(ref);
  await setDoc(
    ref,
    {
      uid: user.uid,
      name: user.displayName || "",
      email: user.email || "",
      photoURL: user.photoURL || "",
      provider: user.providerData[0]?.providerId || "password",
      updatedAt: serverTimestamp(),
      ...(existing.exists() ? {} : { createdAt: serverTimestamp() }),
    },
    { merge: true },
  );
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (nextUser) => {
      void (async () => {
        setUser(nextUser);
        setLoading(false);
        if (!nextUser) {
          setIsAdmin(false);
          return;
        }
        try {
          await syncUser(nextUser);
          const adminDoc = await getDoc(doc(db, "admins", nextUser.uid));
          setIsAdmin(adminDoc.exists() && adminDoc.data()?.["active"] !== false);
        } catch {
          setIsAdmin(false);
        }
      })();
    });
    return unsubscribe;
  }, []);

  const value = useMemo<AuthContextValue>(() => ({
    user,
    loading,
    isAdmin,
    authMode,
    setAuthMode,
    authOpen,
    openAuth: (mode = "login") => { setAuthMode(mode); setAuthOpen(true); },
    closeAuth: () => setAuthOpen(false),
    loginWithGoogle: async () => {
      try {
        const result = await signInWithPopup(auth, new GoogleAuthProvider());
        await syncUser(result.user);
        setAuthOpen(false);
      } catch (error) {
        throw new Error(friendlyAuthError(error));
      }
    },
    loginWithEmail: async (email, password) => {
      try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        await syncUser(result.user);
        setAuthOpen(false);
      } catch (error) {
        throw new Error(friendlyAuthError(error));
      }
    },
    resetPassword: async (email) => {
      try {
        await sendPasswordResetEmail(auth, email);
      } catch (error) {
        throw new Error(friendlyAuthError(error));
      }
    },
    signupWithEmail: async (name, email, password) => {
      try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        if (name.trim()) await updateProfile(result.user, { displayName: name.trim() });
        await syncUser(result.user);
        setAuthOpen(false);
      } catch (error) {
        throw new Error(friendlyAuthError(error));
      }
    },
    logout: () => signOut(auth),
  }), [authMode, authOpen, isAdmin, loading, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth must be used inside AuthProvider");
  return value;
}
