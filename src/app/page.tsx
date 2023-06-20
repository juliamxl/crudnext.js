"use client";
import { useEffect, useState } from 'react';
import FormPost from './Form';
import FormUpdate from './FormUpdate';

type Post = {
  id: number;
  title: string;
};

export default function Home() {
  const [data, setData] = useState<Post[]>([]);

  async function getPosts() {
    try {
      const response = await fetch('/api/getPosts');
      if (response.ok) {
        const responseData: Post[] = await response.json();
        console.log(responseData);
        return responseData;
      } else {
        console.error(`Request failed with status ${response.status}`);
        return [];
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async function updatePost(id: number, newTitle: string) {
    try {
      const response = await fetch(`/api/updatePosts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title: newTitle }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
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

  useEffect(() => {
    getPosts().then((responseData) => {
      setData(responseData);
    });
  }, []);

  return (
    <main>
      <FormPost />
      <FormUpdate updatePost={updatePost}/>
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        data.map((post) => <p key={post.id}>{post.title}, {post.id}</p>)
      )}
    </main>
  );
}
