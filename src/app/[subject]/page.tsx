import { Subject, loadArticle } from "@/utils/files";
import { use } from "react";
import { RenderArticle } from "@/components/render-article";

interface PageWithParamsProps {
    params: { subject: Subject; articleId: string };
}

export default function SubjectPage({ params }: PageWithParamsProps) {
    const { subject, articleId } = params;
    const { article, metadata } = use(loadArticle(subject, articleId));

    return <RenderArticle {...{ article, metadata }} />;
}
