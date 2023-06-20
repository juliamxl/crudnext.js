import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma/client';

type PostProps = {
  id: number;
  title: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'PUT') {
      const post: PostProps = JSON.parse(req.body);

      const updatedPost = await prisma.post.update({
        where: { id: post.id },
        data: { title: post.title },
      });

      res.status(200).json(updatedPost);
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating the post', error });
  }
}
