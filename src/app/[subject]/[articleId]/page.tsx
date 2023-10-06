import { Subject, loadArticle } from "@/utils/files";
import { use } from "react";
import { RenderArticle } from "@/components/render-article";

interface PageWithParamsProps {
    params: { articleId: string; subject: Subject };
}
export default function ArticlePage({ params }: PageWithParamsProps) {
    const { article, metadata } = use(
        loadArticle(params.subject, params.articleId)
    );
    return <RenderArticle {...{ article, metadata }} />;
}
