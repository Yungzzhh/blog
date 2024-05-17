// "use client";
import ReactMarkdown from "react-markdown";

interface MarkdownRenderProps {
  content?: string;
}
const MarkdownRender: React.FC<MarkdownRenderProps> = ({ content }) => {
  return content ? <ReactMarkdown>{content}</ReactMarkdown> : <>内容爲空</>;
};
export default MarkdownRender;
