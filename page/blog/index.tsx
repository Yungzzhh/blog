import App from "@/components/article";
import { getSortedPostsData } from "@/lib/post";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: any) {
  return <App allPostsData={allPostsData} />; // Provide the correct props to the App component
}
