import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

export const Balance = () => {
  return (
    <div className="flex items-center gap-2 text-slate-500 ml-auto">
      <span className="text-3xl font-medium text-slate-800">10</span>
      <p className="text-[12px] max-w-20 leading-none">Créditos disponíveis</p>

      <Button variant="secondary">Comprar mais <ShoppingCart className="size-4 ml-2" /></Button>
    </div>
  );
}