import { NextApiResponse, NextApiRequest } from "next";
import prisma from "../../prisma/client";

type postProps = {
    title: string
}

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
){
    try{
        const post : postProps =  JSON.parse(req.body)
        if(req.method === 'POST'){
            try{
                const data = await prisma.post.create({
                    data: {
                        title: post.title
                    }
                })
                res.status(200).json(data)
            }catch(error){
                return res.status(500).json({message: "Error creating a new post"})
            }
        }else {
            return res.status(405).json({ message: "Method Not Allowed" });
          }
    }catch(error){
        return res.status(500).json(error)
    }
}