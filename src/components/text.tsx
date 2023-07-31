import { styled } from "styled-components";

export const Text = ({ value }: { value: string }) => {
    return <Wrapper>{value}</Wrapper>;
};

const Wrapper = styled.span`
    font-weight: bold;
    font-size: 0.8rem;
    display: inline-block;
    margin: 0 10px;
`;
