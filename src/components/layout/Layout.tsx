
import { Outlet, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import MobileHeader from "./MobileHeader";
import Footer from "./Footer";

const Layout = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50">
      {!isMobile && !isAuthPage && <DesktopNavbar />}
      {isMobile && !isAuthPage && <MobileHeader />}
      
      <main className={cn(
        "flex-grow",
        isMobile && !isAuthPage && "pt-16 pb-20",
        "px-4 md:px-8"
      )}>
        <Outlet />
      </main>
      
      {!isAuthPage && <Footer />}
      
      {isMobile && !isAuthPage && <MobileNavbar />}
    </div>
  );
};

export default Layout;
