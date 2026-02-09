import type { ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { LayoutMain, LayoutPageWrapper } from "./Layout.styles";

type Props = {
    children: ReactNode;
};

function Layout({ children }: Props) {
    return (
        <LayoutPageWrapper>
            <Header />
            <LayoutMain>
                {children}
            </LayoutMain>
            <Footer />
        </LayoutPageWrapper>
    );
}

export default Layout;
