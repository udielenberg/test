"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import HelloWorld from "../app/content/hello.mdx";

type Metadata = Record<string, string>;

interface Props {
    article: string;
    metadata: Metadata;
}

type ChildrenPros = {
    children: React.ReactNode;
};

const fontFamily = "Miriam_Libre";

const components = {
    p: ({ children }: ChildrenPros) => {
        return (
            <p
                style={{
                    padding: 10,
                    lineHeight: "30px",
                    fontSize: "20px",
                    fontWeight: 100,
                }}
            >
                {children}
            </p>
        );
    },
    strong: ({ children }: ChildrenPros) => {
        return <strong style={{ fontWeight: "bold" }}>{children}</strong>;
    },
    h1: ({ children }: ChildrenPros) => (
        <h1 style={{ fontFamily }}>{children}</h1>
    ),
    h2: ({ children }: ChildrenPros) => (
        <h1 style={{ fontFamily }}>{children}</h1>
    ),
    h3: ({ children }: ChildrenPros) => (
        <h1 style={{ fontFamily }}>{children}</h1>
    ),
    h4: ({ children }: ChildrenPros) => (
        <h1 style={{ color: "orange" }}>{children}</h1>
    ),
    image: ({ alt, src, title }: any) => (
        <img {...{ alt, src, title }} width={100} height={100} />
    ),
};

interface ArticleMetadataProps {
    metadata: Metadata;
}

const ArticleMetadata = ({ metadata }: ArticleMetadataProps) => {
    return (
        <div style={{ marginBottom: 20 }}>
            {Object.entries(metadata).map(([title, value]) => (
                <div key={title}>
                    <strong>{title}</strong>: <em>{value}</em>
                </div>
            ))}
        </div>
    );
};

export const RenderArticle = ({ article, metadata }: Props) => {
    console.log("article:", article);
    return (
        <>
            {/* <ArticleMetadata metadata={metadata} /> */}
            <ReactMarkdown
                skipHtml={false}
                components={components}
                remarkPlugins={[remarkGfm]}
                className="markdown prose prose-slate"
            >
                {article}
            </ReactMarkdown>
        </>
    );
};
