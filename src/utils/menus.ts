import {
    Subject,
    extractArticleTitleForLink,
    getFolderFilenames,
    getFolderPathBySubject,
    stripExtension,
} from "./files";

export const buildArticleMenu = async (subject: Subject) => {
    return extractArticleTitleForLink(subject === "" ? "main" : subject);
};

export const buildMainArticleMenu = async () => {
    return extractArticleTitleForLink();
};
