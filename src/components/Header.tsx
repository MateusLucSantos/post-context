import { PostContext } from "@/contexts/PostContext";
import { useContext, useState } from "react";

export const Header = () => {
  const postCtx = useContext(PostContext);

  const [titleInput, setTitleInput] = useState("");
  const [bodyInput, setBodyInput] = useState("");

  const handleAddButton = () => {
    if (titleInput && bodyInput) {
      postCtx?.addPost(titleInput, bodyInput);
      setTitleInput("");
      setBodyInput("");
    }
  };

  return (
    <>
      <header>
        <h1 className="text-3xl">Título da página</h1>

        <div className="max-w-xl my-4 flex flex-col gap-2 border border-dotted border-gray-400 p-3">
          <input
            type="text"
            placeholder="Digite um título"
            className="border border-gray-300 p-2 text-black text-xl"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />
          <textarea
            placeholder="Digite um texto para o post"
            className="h-24 border border-gray-300 p-2 text-black text-xl"
            value={bodyInput}
            onChange={(e) => setBodyInput(e.target.value)}
          ></textarea>
          <button
            className="bg-blue-500 p-3 text-white rounded-md"
            onClick={handleAddButton}
          >
            Adicionar
          </button>
        </div>
      </header>
    </>
  );
};
