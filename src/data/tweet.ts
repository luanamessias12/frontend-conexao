import { Tweet } from "@/types/tweet";
import { user } from "@/data/user"; 

export const tweet: Tweet = {
  id: 123,
  user: user,
  body: "Outro dia mágico",
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60", 
  likeCount: 523,
  commentCount: 61,
  retweetCount: 0,
  liked: true,
  retweeted: false,
  dataPost: new Date(2025, 0, 1, 10, 0, 0),
};
