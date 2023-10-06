type ChildrenPros = {
    children: React.ReactNode;
};

const fontStyle = {
    color: "#000",
    textAlign: "right",
    fontFamily: "Noto Sans Hebrew",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "52px" /* 162.5% */,
};

const components = {
    p: ({ children }: ChildrenPros) => {
        return <p style={{ ...{ fontStyle } }}>{children}</p>;
    },
    strong: ({ children }: ChildrenPros) => {
        return <strong style={{ fontWeight: "bold" }}>{children}</strong>;
    },
    h1: ({ children }: ChildrenPros) => (
        <h1 style={{ ...{ fontStyle } }}>{children}</h1>
    ),
    h2: ({ children }: ChildrenPros) => (
        <h1 style={{ ...{ fontStyle } }}>{children}</h1>
    ),
    h3: ({ children }: ChildrenPros) => (
        <h1 style={{ ...{ fontStyle } }}>{children}</h1>
    ),
    h4: ({ children }: ChildrenPros) => (
        <h1 style={{ color: "orange" }}>{children}</h1>
    ),
    image: ({ alt, src, title }: any) => (
        <img {...{ alt, src, title }} width={100} height={100} />
    ),
};

export function useMDXComponents(components: any) {
    return components;
}
