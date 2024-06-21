import {
  DiamondPlus,
  HandCoins,
  ListVideo,
  MessageCircleQuestion,
  PawPrint,
  SlidersHorizontal,
  Wallet
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Sidebar } from "./sidebar";

export const SidebarDashboard = () => {
  return (
    <Sidebar.Root>
      <Sidebar.Header>
        <h2 className="text-sm font-medium text-slate-800">Identidade Animal</h2>
      </Sidebar.Header>

      <Sidebar.Main className="flex flex-grow flex-col">
        <Sidebar.Nav>
          <Sidebar.Link href="/pets">
            <PawPrint className="mr-2 h-4 w-4" />
            Meus Pets
          </Sidebar.Link>

          <Sidebar.Link href="/pets/novo">
            <DiamondPlus  className="mr-2 h-4 w-4" />
            Cadastrar Pet
          </Sidebar.Link>

          <Sidebar.Link href="/conteudos">
            <ListVideo className="mr-2 h-4 w-4" />
            Conteúdo
          </Sidebar.Link>

          <Sidebar.Link href="/financeiro">
            <Wallet className="mr-2 h-4 w-4" />
            Financeiro
          </Sidebar.Link>

          <Sidebar.Link href="/indique">
            <HandCoins className="mr-2 h-4 w-4" />
            <span className="flex gap-2 items-center">Indique um aumigo<Badge variant="outline">ganhe $</Badge></span>
          </Sidebar.Link>
        </Sidebar.Nav>

        <Sidebar.Nav className="mt-auto pb-5">
          <Sidebar.NavTitle>Links extras</Sidebar.NavTitle>

          <Sidebar.Link href="/help" className="mt-1 hover:bg-transparent">
            <MessageCircleQuestion className="mr-2 h-4 w-4" />
            Precisa de ajuda?
          </Sidebar.Link>
        </Sidebar.Nav>
      </Sidebar.Main>
    </Sidebar.Root>
  );
};
