import { buildArticleMenu } from "@/utils/menus";
import { use } from "react";
import { headers } from "next/headers";
import { extractPathFromHeader } from "@/utils/headers";
import { Links } from "./links";

export const ContentNavigation = ({}) => {
    const headersList = headers();
    const pathnameAsSubject = extractPathFromHeader(headersList);

    // @TODO: load it not staticly
    const subjectLinks = [
        { title: "הדרך האדומה", href: "/camino-rojo" },
        { title: "יוגה", href: "/yoga" },
    ];
    const articleLinks = use(buildArticleMenu(pathnameAsSubject));

    return <Links articles={articleLinks} subjects={subjectLinks} />;
};
