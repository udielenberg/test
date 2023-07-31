"use client";
// @ts-nocheck

import { loadFile } from "@/async/loadFile";
import { use } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
    article: string;
}

type ChildrenPros = {
    children: React.ReactNode;
};
const components = {
    p: ({ children }: ChildrenPros) => {
        return <p style={{ padding: 10 }}>{children}</p>;
    },
    h1: ({ children }: ChildrenPros) => (
        <h1 style={{ color: "blue" }}>{children}</h1>
    ),
    h2: ({ children }: ChildrenPros) => (
        <h1 style={{ color: "green" }}>{children}</h1>
    ),
    h3: ({ children }: ChildrenPros) => (
        <h1 style={{ color: "red" }}>{children}</h1>
    ),
    h4: ({ children }: ChildrenPros) => (
        <h1 style={{ color: "orange" }}>{children}</h1>
    ),
    image: ({ alt, src, title }: any) => (
        <img
            {...{ alt, src, title }}
            width={100}
            height={100}
            // style={{ maxWidth: 100 }}
        />
    ),
};

export const RenderArticle = ({ article }: Props) => {
    return (
        <ReactMarkdown
            skipHtml={false}
            components={components}
            remarkPlugins={[remarkGfm]}
        >
            {article}
        </ReactMarkdown>
    );
};
