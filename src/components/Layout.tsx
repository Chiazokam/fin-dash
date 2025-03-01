import { ReactNode, useState, useEffect, useRef } from "react"
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { useIsMobile } from "../hooks/useIsMobile";

const MOBILE_VIEWPORT = 912;

export const Layout = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isMobile = useIsMobile(MOBILE_VIEWPORT)
  const ref = useRef<HTMLDivElement | null>(null)


  const openSidebar = () => setIsSidebarOpen(true)

  useEffect(() => {
    if (isMobile) {
        setIsSidebarOpen(false)
    } else {
        setIsSidebarOpen(true)
    }
  }, [isMobile])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
        const { target } = event;
        if (ref.current && isMobile && !ref.current.contains(target as HTMLElement)) {
        setIsSidebarOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile]);

  return (
    <div className="flex h-screen w-full">
        <Sidebar ref={ref} open={isSidebarOpen} />
        <div className="relative flex flex-col flex-1 h-full overflow-hidden">
            <Header openSidebar={openSidebar} />
            <div className="flex w-full justify-center overflow-y-auto p-6">
              {children}
            </div>
        </div>
    </div>
    )
}
