"use client";

import { styled } from "styled-components";
import { PageLink } from "./page-link";

const main = [
    { text: "בית", href: "/main/home" },
    { text: "אש תמיד", href: "/main/esh-tamid" },
    { text: "מיכל ולנסי", href: "/main/michal-valensi" },
    { text: "לינקים", href: "/main/articles" },
    { text: "יצירת קשור", href: "/main/contact" },
    { text: "קישורים", href: "/main/links" },
];
export const DesktopTopMenu = () => {
    return (
        <Wrapper>
            <h1>אש תמיד</h1>
            <div className="links">
                {main.map(({ text, href }, index) => {
                    return (
                        <PageLink
                            key={href}
                            href={href}
                            text={text}
                            last={index === main.length - 1}
                        />
                    );
                })}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    color: #f8b70e;
    text-align: center;

    .links {
        display: flex;
        justify-content: center;
        flex-direction: row-reverse;
    }
`;
