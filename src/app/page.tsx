"use client";
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import FormPost from './Form';

type Post = {
  id: number;
  title: string;
};

export default function Home() {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((responseData) => {
      setData(responseData);
    });
  }, [setData]);

  async function getPosts() {
    try {
      const response: AxiosResponse<Post[]> = await axios.get('/api/getPosts');
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  return (
    <main>
      <FormPost />
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        data.map((post) => <p key={post.id}>{post.title}</p>)
      )}
    </main>
  );
}