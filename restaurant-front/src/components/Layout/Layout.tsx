import type { ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { PageWrapper, Main } from "./Layout.styles";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <PageWrapper>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </PageWrapper>
  );
}

export default Layout;
