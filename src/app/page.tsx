"use client";
import { useEffect, useState } from 'react';
import FormPost from './Form';
import FormUpdate from './FormUpdate';
import axios from 'axios';

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



  useEffect(() => {
    getPosts().then((responseData) => {
      setData(responseData);
    });
  }, []);

  return (
    <main>
      <FormPost />
      <FormUpdate/>
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        data.map((post) => <p key={post.id}>{post.title}, {post.id}</p>)
      )}
    </main>
  );
}
