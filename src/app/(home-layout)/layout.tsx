import { ReactNode } from "react";

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="w-dvw h-auto min-h-dvh relative">
      <div className="w-dvw h-dvh fixed z-0">
        <div className="w-dvw h-auto min-h-[400px] bg-gradient-head" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
};

export default HomeLayout;
