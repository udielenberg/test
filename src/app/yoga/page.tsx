import { loadArticle } from "@/utils/files";
import { use } from "react";
import { RenderArticle } from "@/components/render-article";

interface PageWithParamsProps {
    params: { id: string };
}
export default function Page({ params }: PageWithParamsProps) {
    const { article, metadata } = use(loadArticle("yoga", "01-yoga-in-manof"));
    return <RenderArticle {...{ article, metadata }} />;
}
