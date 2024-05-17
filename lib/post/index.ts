import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 获取所有的博客文章目录
const postsDirectories = fs
  .readdirSync(path.join(process.cwd(), "posts"))
  .map((dir) => path.join(process.cwd(), "posts", dir));

export function getSortedPostsData() {
  // 获取所有的博客文章
  const allPostsData = postsDirectories.flatMap((directory) => {
    const fileNames = fs.readdirSync(directory);
    return fileNames.map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(directory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        id,
        category: path.basename(directory),
        ...matterResult.data,
        content: matterResult.content,
      };
    });
  });

  // Sort posts by date
  return allPostsData.sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostData(id: string) {
  const directory = postsDirectories.find((directory) =>
    fs.readdirSync(directory).includes(`${id}.md`)
  );
  const fullPath = path.join(directory!, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id,
    category: path.basename(directory!),
    ...matterResult.data,
    content: matterResult.content,
  };
}
