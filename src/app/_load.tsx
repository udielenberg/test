import { ResponsiveLayout } from "@/layouts/_responsive-layout";
import { loadFile } from "@/utils/files";
import { use } from "react";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

// export default function Page() {
//     const article: string = use(loadFile());
//     use(loadArticlesPerDomain());
//     return <ResponsiveLayout domain="main" article={article} />;
// }

// function prepareString(str: string) {
//     return str.split("").reverse().join("");
// }

// const loadArticlesPerDomain = async () => {
//     const folderPath = path.resolve("public", "markdowns", "yoga");
//     const files = fs.readdirSync(folderPath);
//     // console.log("files:", files);
//     const markdownPosts = files.filter((file) => file.endsWith(".md"));
//     const posts = markdownPosts.map((fileName) => {
//         const fileContent = fs.readFileSync(
//             `${folderPath}/${fileName}`,
//             "utf8"
//         );

//         const matterResult = matter(fileContent);
//         return {
//             title: prepareString(matterResult.data.title),
//         };
//     });

//     console.log("posts:", posts[0].title);
// };
