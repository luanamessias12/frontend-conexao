"use client";

import { HomeFeed } from "@/components/home/home-feed";
import { HomeHeader } from "@/components/home/home-header";
import { TweetPost } from "@/components/tweet/tweet-post";
import { useAuth } from "@/hooks/useAuth";

export default function Page() {
  const { user, loading } = useAuth(true); // true = rota protegida

  if (loading) {
    return <p className="text-center mt-10">Carregando...</p>;
  }

  return (
    <div>
      <HomeHeader />
      <TweetPost />
      <HomeFeed />
    </div>
  );
}
