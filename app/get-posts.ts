import postsData from "./posts.json";
import commaNumber from "comma-number";

export type Post = {
  id: string;
  date: string;
  title: string;
};

// shape of the HSET in redis
type Views = {
  [key: string]: string;
};

export const getPosts = async () => {
  const posts = postsData.posts.map((post): Post => {
    return {
      ...post,
    };
  });
  return posts;
};
