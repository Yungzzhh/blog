import { getSortedPostsData } from "@/lib/post";

interface Post {
  id: string;
  title?: string;
  date?: string;
  content?: string;
  category?: string;
}

export default async function Home() {
  const res = getSortedPostsData();
  console.log(res);

  return (
    <>
      {res.map((post: Post) => {
        return (
          <div key={post.id}>
            <h1>{post.title ? post.title : "title"}</h1>
            <p>{post.date ? post.date : "date"}</p>
            {/* {} */}
          </div>
        );
      })}
    </>
  );
}
