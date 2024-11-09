import type { PropsWithChildren } from "react";

import  Sidebar  from "@/components/sidebar";
import MobileHeader from "@/components/mobile-header";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
    <MobileHeader />
    
      <Sidebar className="hidden lg:flex" />
      <main className="pl-[256px] h-full">
        <div className=" h-full">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;