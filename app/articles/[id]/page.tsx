import MarkdownRender from "@/components/markdownRender";
import { getPostData } from "@/lib/post";

interface IdPageProps {
  params: {
    id: string;
  };
}

const Id: React.FC<IdPageProps> = ({ params }) => {
  console.log(params.id);
  const posts = getPostData(params.id);

  return (
    <>
      <MarkdownRender content={posts.content} />
    </>
  );
};
export default Id;
