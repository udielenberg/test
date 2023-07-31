import Link from "next/link";
import { styled } from "styled-components";

interface Props {
  title: string;
  items: { title: string; href: string }[];
}
export const SideMenuDesktop = ({ title, items }: Props) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <ul>
        {items.map(({ title, href }) => (
          <li key={title}>
            <StyledLink href={href}>{title}</StyledLink>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

const StyledLink = styled(Link)``;

const Wrapper = styled.div`
  color: #f8b70e;
`;
