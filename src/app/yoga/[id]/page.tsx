import { loadArticle } from "@/utils/files";
import { use } from "react";
import { RenderArticle } from "@/components/render-article";

interface PageWithParamsProps {
    params: { id: string };
}
export default function Page({ params }: PageWithParamsProps) {
    const { article, metadata } = use(loadArticle("yoga", params.id));
    return <RenderArticle {...{ article, metadata }} />;
}
