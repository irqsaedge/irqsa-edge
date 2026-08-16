import { useEffect, useState } from "react";
import { onDisconnect, onValue, ref, set } from "firebase/database";
import { useAuth } from "@/lib/auth";
import { realtimeDb } from "@/lib/firebase";

export function SupportPresence() {
  const { user, isAdmin } = useAuth();
  useEffect(() => {
    if (!user || !isAdmin) return;
    const presenceRef = ref(realtimeDb, "support/presence");
    void set(presenceRef, { online: true, uid: user.uid, updatedAt: Date.now() });
    void onDisconnect(presenceRef).set({ online: false, uid: user.uid, updatedAt: Date.now() });
    return () => { void set(presenceRef, { online: false, uid: user.uid, updatedAt: Date.now() }); };
  }, [isAdmin, user]);
  return null;
}

export function useSupportOnline() {
  const [online, setOnline] = useState(false);
  useEffect(() => onValue(ref(realtimeDb, "support/presence"), (snapshot) => setOnline(snapshot.val()?.online === true)), []);
  return online;
}
