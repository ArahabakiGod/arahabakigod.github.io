import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { HexagonBackground } from "./components/background";
import type { FC, ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <HexagonBackground
        hexagonSize={25}
        effectRadius={180}
        fadeSpeed={0.02}
        enableRandomAnimation={true}
        randomPointsCount={0}
        randomAnimationSpeed={1.2}
        //L
        backgroundColor="transparent"
        baseColor="#e5e7eb"
        activeColor="#3b82f6"
        //D
        darkTheme={{
          backgroundColor: "transparent",
          baseColor: "#374151",
          activeColor: "#8b5cf6",
        }}
      />

      <div className="z-10">
        <Header />
        <div className="mt-12">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
