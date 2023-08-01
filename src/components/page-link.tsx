"use client";

import Link from "next/link";
import React from "react";
import { styled } from "styled-components";

interface PageLinkProps {
    href: string;
    text: string;
    last?: boolean;
}

export const PageLink = ({ href, text, last }: PageLinkProps) => {
    const handleClick = () => {
        window.scrollTo({
            behavior: "smooth",
            top: document.getElementById("content")?.offsetTop! - 60,
        });
    };

    if (last) {
        return (
            <div onClick={handleClick}>
                |<StyledLink {...{ href }}>{text}</StyledLink>|
            </div>
        );
    }
    return (
        <div onClick={handleClick}>
            <StyledLink {...{ href }}>{text}</StyledLink>|
        </div>
    );
};

const StyledLink = styled(Link).attrs({ scroll: true })`
    font-weight: bold;
    font-size: 0.8rem;
    display: inline-block;
    margin: 0 10px;
`;
