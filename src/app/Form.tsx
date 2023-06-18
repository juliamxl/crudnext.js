import { useState } from "react"


export default function FormPost() {
    const [title, setTitle] = useState("")

    async function submitPost(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const data = await fetch(`/api/createPosts`, {
            method: "POST",
            body: JSON.stringify({ title }),
        })
        const res = await data.json()
        if (!res.ok) console.log(res)
    }

    return(
        <form onSubmit={submitPost}>
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
            />
            <button>Make a new Post</button>
        </form>
    )

}

