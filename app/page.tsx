import { getSortedPostsData } from "@/lib/post";
import "./page.css";
import { Model_Article } from "@/model";
import Image from "next/image";

export default function Home() {
  const res = getSortedPostsData();
  const titleList = res.map((post: Model_Article.Post) => {
    return {
      title: post.title,
      date: post.date,
      id: post.id,
    };
  });

  return (
    <>
      {/* Introduce */}
      <div className=" h-80 m-auto bg-landing bg-cover bg-center backdrop-blur-xl">
        <h1 className=" text-4xl">Welcome to my blog!</h1>
        <div className=" text-500">12312313123</div>
      </div>

      <div className=" h-[60vh] m-auto">
        <h2>Recent Posts</h2>
        <div className="flex gap-4 w-[1440px]">
          {titleList.length > 0 ? (
            titleList.map((post) => {
              return (
                <div
                  key={post.id}
                  className="flex flex-col items-start max-w-[500px]"
                >
                  <div className="w-full">
                    {/* <Image
                      src={"/posts/default.png"}
                      width={200}
                      height={100}
                      alt=""
                      className="object-cover w-full"
                    ></Image> */}
                    <div className="p-4 shadow-lg drop-shadow-lg overflow-auto">
                      <h3>{post.title}</h3>
                      <p>{post.date}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>There is no post yet.</div>
          )}
        </div>
      </div>
      {/* Photo Posts */}
      <div className=" h-[60vh]">
        <div>imgs</div>
      </div>
      {/* Trick list */}
      <div className=" h-[60vh]">
        <div>TrickList</div>
      </div>
    </>
  );
}
