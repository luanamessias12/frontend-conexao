"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase"; // certifique-se que está exportando corretamente
import { useAuth } from "@/hooks/useAuth";
import { ProfileFeed } from "@/components/profile/profile-feed";
import { Button } from "@/components/ui/button";
import { GeneralHeader } from "@/components/ui/general-header";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Page() {
  const { user: currentUser } = useAuth();
  const params = useParams();
  const slug = params?.slug as string;

  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (!slug) return;
      const docRef = doc(db, "users", slug);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserData(docSnap.data());
      }
      setLoading(false);
    };
    fetchUser();
  }, [slug]);

  if (loading) return <div className="p-4">Carregando perfil...</div>;
  if (!userData) return <div className="p-4">Usuário não encontrado.</div>;

  const isMe = currentUser?.uid === userData.uid;

  return (
    <div>
      <GeneralHeader backHref="/home">
        <div className="font-bold text-lg">{userData.name}</div>
        <div className="text-xs text-gray-500">{userData.postCount || 0} posts</div>
      </GeneralHeader>

      <section className="border-b-2 border-gray-900">
        <div
          className="bg-gray-500 h-28 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${userData.cover || ""})` }}
        ></div>

        <div className="-mt-12 flex justify-between items-end px-6">
          <img
            src={userData.avatar || "/default-avatar.png"}
            alt={userData.name}
            className="size-24 rounded-full"
          />
          <div className="w-30"></div>
          {isMe ? (
            <Link href={`/${slug}/edit`}>
              <Button label="Editar Perfil" size={2} />
            </Link>
          ) : (
            <Button label="Seguir" size={2} />
          )}
        </div>

        <div className="px-6 mt-4">
          <div className="text-xl font-bold">{userData.name}</div>
          <div className="text-gray-500">@{userData.slug}</div>
          <div className="py-5 text-lg text-gray-500">{userData.bio || ""}</div>

          {userData.link && (
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faLink} className="size-5" />
              <Link href={userData.link} target="_blank" className="text-blue-300">
                {userData.link}
              </Link>
            </div>
          )}

          <div className="my-5 flex gap-6">
            <div className="text-xl text-gray-500">
              <span className="text-white">99</span> Seguindo
            </div>
            <div className="text-xl text-gray-500">
              <span className="text-white">99</span> Seguidores
            </div>
          </div>
        </div>
      </section>

      <ProfileFeed />
    </div>
  );
}
