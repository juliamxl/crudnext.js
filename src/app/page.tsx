import FormPost from "./Form"

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`)
  if(!res.ok){
    console.log(res)
  }
  return res.json()
}



export default async function Home() {
  const data : { id:number, title: string }[] = await getPosts()
  console.log(data)

  return (
    <main>
      <FormPost/>
      {data.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </main>
  )
}
