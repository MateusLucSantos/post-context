import { PostContext } from "@/contexts/PostContext";
import { useContext } from "react";

export const Footer = () => {
  const postCtx = useContext(PostContext);
  return (
    <>
      <p>Total de posts: {postCtx?.posts.length}</p>
    </>
  );
};
