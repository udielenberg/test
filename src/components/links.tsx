"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LinkProps } from "@/utils/files";
import { useMemo } from "react";

interface Props {
    articles: LinkProps[];
    subjects: LinkProps[];
}

export const Links = ({ articles, subjects }: Props) => {
    const pathname = usePathname();
    const subjs = useMemo(() => subjects.reverse(), [subjects]);
    const arts = useMemo(() => articles.reverse(), [articles]);
    return (
        <>
            <nav className="main-nav">
                {subjs.map(({ title, href }) => (
                    <Link
                        key={title}
                        href={href}
                        className={
                            pathname.includes(href)
                                ? "main-nav-button active-link"
                                : "main-nav-button"
                        }
                    >
                        {title}
                    </Link>
                ))}
            </nav>
            <nav className="secondary-nav">
                {arts.map(({ title, href }) => (
                    <div className="secondary-nav-button" key={title}>
                        <Link
                            key={title}
                            href={href}
                            className={
                                pathname.includes(href)
                                    ? "secondary-nav-button active-link"
                                    : "secondary-nav-button"
                            }
                        >
                            {title}
                        </Link>
                    </div>
                ))}
            </nav>
        </>
    );
};

const activeStyle = `
    font-weight: bold;
    outline: 1px solid white;
`;
