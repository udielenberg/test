import { join } from "path";
import fs, { readdirSync } from "fs";
import matter from "gray-matter";
import { redirect } from "next/navigation";
import { MARKDOWN_FOLDER_PATH } from "@/app/config";

export type Subject = "main" | "yoga" | "camino-rojo";

export const getArticlePath = (subject: Subject, fileName: string) => {
    return join(`${MARKDOWN_FOLDER_PATH}/${subject}`, `${fileName}.md`);
};

export const loadFile = (subject: Subject, fileName: string) => {
    const articlePath = getArticlePath(subject, fileName);
    return fs.readFileSync(articlePath, "utf8");
};

export const loadFileMetadata = (subject: Subject, fileName: string) => {
    const articlePath = getArticlePath(subject, fileName);
    const article = fs.readFileSync(articlePath, "utf8");
    const metadata = matter(article);

    //@ts-ignore
    if (metadata.isEmpty) {
        redirect("/");
    }

    return metadata.data;
};

export const loadArticle = async (subject: Subject, fileName: string) => {
    return {
        article: loadFile(subject, fileName),
        metadata: loadFileMetadata(subject, fileName),
    };
};

export const getFolderFilenames = (folderPath: string) => {
    return readdirSync(folderPath);
};

export const getFolderPathBySubject = (subject: Subject = "main") =>
    join(`${MARKDOWN_FOLDER_PATH}`, `${subject}`);

export function stripExtension(filename: string) {
    return filename.substring(0, filename.lastIndexOf(".")) || filename;
}

export const extractArticleTitleForLink = (subject: Subject = "main") => {
    const folderPath = getFolderPathBySubject(subject);
    const files = getFolderFilenames(folderPath);

    return files.map((file) => {
        const fileName = stripExtension(file);
        const metadata = loadFileMetadata(subject, fileName);

        if (metadata.isEmpty) {
            throw new Error("cant extract title for link");
        }

        return {
            href: `/${metadata.subject}/${fileName}`,
            title: metadata.title,
        };
    });
};
