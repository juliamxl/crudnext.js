import { useState } from "react"

interface posts{
    nome: String,
    id: number
}


export default function Posts({nome, id }) {

    return (
        <div>
            <h1>{nome}</h1>
            <button></button>
        </div>
    )

}
