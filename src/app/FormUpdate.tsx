import { useState } from 'react';

type FormPostProps = {
  updatePost: (id: number, newTitle: string) => void;
};

export default function FormUpdate({ updatePost }: FormPostProps) {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    updatePost(id, title);
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