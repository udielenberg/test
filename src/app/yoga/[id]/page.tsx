import { loadArticle } from "@/utils/files";
import { use } from "react";
import path from "path";
import fs from "fs";
import { RenderArticle } from "@/components/render-article";

interface PageWithParamsProps {
    params: { id: string };
}
export default function Page({ params }: PageWithParamsProps) {
    const { article, metadata } = use(loadArticle("yoga", params.id));
    return <RenderArticle {...{ article, metadata }} />;
}

function prepareString(str: string) {
    return str.split("").reverse().join("");
}

// const loadArticlesPerDomain = async () => {
// const folderPath = path.resolve("public", "markdowns", "yoga");
// const files = fs.readdirSync(folderPath);
// console.log("files:", files);
// const markdownPosts = files.filter((file) => file.endsWith(".md"));
// const posts = markdownPosts.map((fileName) => {
//     const fileContent = fs.readFileSync(
//         `${folderPath}/${fileName}`,
//         "utf8"
//     );

//     const matterResult = matter(fileContent);
//     return {
//         title: prepareString(matterResult.data.title),
//     };
// });
// const fileContent = fs.readFileSync(`${folderPath}/${params.id}`, "utf8");

// console.log("posts:", posts[0].title);
// };
