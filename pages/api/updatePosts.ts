import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma/client';

type PostProps = {
    id: number;
    title: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        console.log("asdas")
        if (req.method === 'PUT') {
            console.log("aaaaaaaaaa")
            const post: PostProps = JSON.parse(req.body);
            console.log(post)


            const updatedPost = await prisma.post.update({
                where: {
                    id: post.id
                },
                data: {
                    title: post.title
                },
            });

            console.log(updatedPost)

            res.status(200).json(updatedPost);
        } else {
            res.status(405).json({ message: 'Method Not Allowed' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating the post', error });
    }
}
