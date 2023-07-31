"use client";

import YogaButton from "../../public/images/yoga.png";
import CaminoRojoButton from "../../public/images/camino-rojo.jpeg";
import Image from "next/image";
import { DesktopBottomMenu } from "@/components/bottom-menu";
import { PageLink } from "@/components/page-link";
import { styled } from "styled-components";
import { usePathname } from "next/navigation";

import { RenderArticle } from "@/server-components/render-article";

interface Props {
    article: string;
}

export const ResponsiveLayout = (props: Props) => {
    const { article } = props;
    const pathname = usePathname();

    return (
        <Wrapper>
            <nav className="before-scroll">
                <header>
                    <h1>אש תמיד</h1>
                    <nav className="header-links">
                        <PageLink href={`${pathname}#content`} text="אחד" />
                        <PageLink href={`${pathname}#content`} text="שתיים" />
                        <PageLink href={`${pathname}#content`} text="שלוש" />
                        <PageLink href={`${pathname}#content`} text="ארבע" />
                        <PageLink
                            href={`${pathname}#content`}
                            text="חמש"
                            last
                        />
                    </nav>
                </header>

                <article className="announcements">
                    <marquee truespeed={600}>הודעה לקהל הרחב</marquee>
                </article>

                <nav className="navigator">
                    <div className="navigator-button">
                        <ButtonImage src={YogaButton} alt="yoga section" />
                        <h2>יוגה</h2>
                    </div>
                    <div className="navigator-button">
                        <ButtonImage src={CaminoRojoButton} alt="Camino Rojo" />
                        <h2>הדרך האדומה</h2>
                    </div>
                </nav>
            </nav>

            <hr />

            <main className="under-scroll">
                <nav className="main-nav">
                    <div className="main-nav-button">הדרך האדומה</div>
                    <div className="main-nav-button">יוגה</div>
                </nav>
                <nav className="secondary-nav">
                    <div className="secondary-nav-button">לינק 1</div>
                    <div className="secondary-nav-button">לינק 2</div>
                    <div className="secondary-nav-button">לינק 3</div>
                    <div className="secondary-nav-button">לינק 4</div>
                    <div className="secondary-nav-button">לינק 5</div>
                </nav>
                <section className="content" id="content">
                    <RenderArticle article={article} />
                </section>
            </main>
            <footer>
                <DesktopBottomMenu />
            </footer>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;

    .before-scroll {
        height: 90vh;
    }

    .before-scroll,
    .under-scroll {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 60px;
    }

    header {
        h1 {
            font-size: 36px;
        }
        display: flex;
        /* flex: 1; */
        flex-direction: column;
        /* background: orange; */
        align-items: center;
        margin-bottom: 20px;

        .header-links {
            display: flex;
            flex-flow: row-reverse;
            flex-direction: row;
            flex: 1;
        }
    }

    hr {
        color: white;
    }

    .announcements {
        background: lightgray;
        /* height: 250px; */
        padding: 10px;
        margin-bottom: 50px;
        color: black;
        width: 50%;
    }

    .navigator {
        position: relative;
        overflow: overlay;
        /* background: lightgreen; */
        display: flex;

        .firstButton {
            position: absolute;
        }

        .navigator-button {
            display: flex;
            flex-direction: column;
            gap: 20px;
            justify-content: flex-end;
            align-items: center;
            color: white;
            padding: 10px;
            flex: 1 1 100%;
            height: 400px;
            margin: 10px 70px;
        }
    }

    .main-nav {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        margin-bottom: 10px;

        .main-nav-button {
            height: 30px;
            display: flex;
            background: darkgray;
            flex: 1;
            justify-content: center;
            align-items: center;
        }
    }

    .secondary-nav {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        margin-bottom: 20px;

        .secondary-nav-button {
            display: flex;
            background: gray;
            flex: 1;
            justify-content: center;
        }
    }

    .content {
        padding: 20px;
        width: 100%;
        direction: rtl;
        background: #ffc44d;
        color: black;
        font-family: Arial, Helvetica, sans-serif;
    }

    footer {
        display: flex;
        justify-content: center;
        padding-bottom: 20px;
    }
`;

const ButtonImage = styled(Image).attrs({
    width: 100,
    height: 100,
    objectFit: "cover",
    // fill: true,
    sizes: "100vw",
    layout: "responsive",
})`
    /* width: 100%;
    height: auto; */
`;
