"use client";

import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { app } from "@/firebase"; // ajuste o caminho conforme sua estrutura

export function useAuth(protectedRoute = false) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);

      if (protectedRoute && !firebaseUser) {
        router.push("/signin");
      }
    });

    return () => unsubscribe();
  }, [protectedRoute, router]);

  return { user, loading };
}
