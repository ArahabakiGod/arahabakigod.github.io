import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import type { FC, ReactNode } from "react";

interface LayoutProps {
    children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="mt-12">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
