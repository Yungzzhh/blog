export default function Home() {
  return (
    <>
      {/* Introduce */}
      <div className=" w-[425px] m-auto">
        {/* <h1 id="font3">Michael&apos;s Blog</h1> */}
        <h1 id="font3" className=" text-4xl">
          Welcome to my blog!
        </h1>
      </div>

      <div className=" h-[60vh]">
        <h2>Recent Posts</h2>
        <ul>
          <li>Post 1</li>
          <li>Post 2</li>
          <li>Post 3</li>
        </ul>
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
