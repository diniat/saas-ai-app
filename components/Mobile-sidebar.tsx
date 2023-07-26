"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";

const MobileSidebar = (/* {
  apiLimitCount = 0,
  isPro = false,
}: {
  apiLimitCount: number;
  isPro: boolean;
} */) => {
  //This fixes components that cause hyration errors by the way they are rendered
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        {/* <Button variant="ghost" size="icon" className="md:hidden"> */}
        <Menu />
        {/* </Button> */}
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar /* isPro={isPro} apiLimitCount={apiLimitCount} */ />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
