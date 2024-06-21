import { Balance } from "@/components/balance";
import { ReactNode } from "react";
import { SidebarDashboard } from "./sidebar-dashboard";

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full grid grid-cols-[16rem_1fr]">
      <SidebarDashboard />
      <main>
        <div className="flex h-[65px] items-center justify-between border-b border-border px-6 py-3">
          <Balance />
        </div>

        <div className="h-full px-6 py-4">{children}</div>
      </main>
    </div>
  );
};
