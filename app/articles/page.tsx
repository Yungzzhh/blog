import { getSortedPostsData } from "@/lib/post";
import { Model_Article } from "@/model";
import Link from "next/link";

export default async function Home() {
  const res = getSortedPostsData();
  console.log(res);
  const titleList = res.map((post: Model_Article.Post) => {
    return {
      title: post.title,
      date: post.date,
      id: post.id,
    };
  });

  return (
    <>
      <div className="flex gap-6">
        {res.map((post: Model_Article.Post) => {
          return (
            <Link href={`/articles/${post.id}`} key={post.id}>
              {post.title}
            </Link>
          );
        })}
      </div>
    </>
  );
}
