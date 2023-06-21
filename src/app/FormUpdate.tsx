import axios from 'axios';
import { useState } from 'react';



export default function FormUpdate() {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    updatePost(id, title);
  }

  
  async function updatePost(id: number, newTitle: string) {
    console.log(id)
    try {
      const response = await fetch(`/api/updatePosts`,{
        method: "PUT",
        body: JSON.stringify({ id, title }),
      });
      console.log(newTitle)

  
      if (response.status === 200) {
        // Atualização bem-sucedida
        // Faça algo, como exibir uma mensagem de sucesso ou atualizar a lista de posts
      } else {
        // Tratamento de erro
        console.error('Failed to update the post');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Post ID"
        value={id}
        onChange={(e) => setId(Number(e.target.value))}
      />
      <input
        type="text"
        placeholder="New Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Update Post</button>
    </form>
  );
}