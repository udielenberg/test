import Link from "next/link";
import { styled } from "styled-components";

interface PageLinkProps {
    href: string;
    text: string;
    last?: boolean;
}

export const PageLink = ({ href, text, last }: PageLinkProps) => {
    if (last) {
        return (
            <div>
                |<StyledLink {...{ href }}>{text}</StyledLink>|
            </div>
        );
    }
    return (
        <div>
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
