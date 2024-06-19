/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import Google from "@/components/ui/icons/google";
import { signIn } from "next-auth/react";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const next = searchParams?.get("next");
  const [noSuchAccount, setNoSuchAccount] = useState(false);
  const [clickedEmail, setClickedEmail] = useState(false);
  const [clickedGoogle, setClickedGoogle] = useState(false);
  const [showEmailOption, setShowEmailOption] = useState(false);

  const onSubmit = async (formData: FormData) => {
    const email = formData.get("email") as string;
    setNoSuchAccount(false);

    try {
      const response = await fetch("/api/auth/account-exists", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const { exists } = (await response.json()) as { exists: boolean };

      if (!exists) {
        toast.error("Não encontramos uma conta com esse email.");
        setNoSuchAccount(true);
        return;
      }

      const res = await signIn("email", {
        email,
        redirect: false,
        ...(next && next.length > 0 ? { callbackUrl: next } : {}),
      });

      if (res?.ok && !res?.error) {
        toast.success("Email enviado - verifique sua caixa de entrada!");
        return;
      }

      if (res?.error) {
        toast.error("Erro ao enviar email - tente novamente.");
        return;
      }
    } catch {
      toast.error("Erro ao fazer login - tente novamente.");
    }
  };

  return (
    <>
      <div className="flex space-x-2">
        <Button
          variant="outline"
          disabled={clickedEmail}
          className="w-full"
          onClick={() => {
            setClickedGoogle(true);
            signIn("google", {
              ...(next && next.length > 0 ? { callbackUrl: next } : {}),
            });
          }}
        >
          <Google className="h-4 w-4 mr-2" />
          Continue com o Google
        </Button>
      </div>

      <form action={onSubmit} className="flex flex-col space-y-3">
        {showEmailOption && (
          <div>
            <input
              id="email"
              name="email"
              type="email"
              autoFocus
              placeholder="pet@identidadeanimal.com.br"
              autoComplete="email"
              required
              className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
            />
          </div>
        )}

        <Button
          variant="outline"
          // loading={clickedEmail}
          {...(!showEmailOption && {
            type: "button",
            onClick: (e) => {
              e.preventDefault();
              setShowEmailOption(true);
            },
          })}
        >
          Entrar com email
        </Button>
      </form>
      {noSuchAccount ? (
        <p className="text-center text-sm text-red-500">
          Essa conta não existe.{" "}
          <Link href="/criar-conta" className="font-semibold text-red-600">
            Crie uma conta
          </Link>{" "}
          agora
        </p>
      ) : (
        <p className="text-center text-sm text-gray-500">
          Não tem uma conta?{" "}
          <Link
            href="/criar-conta"
            className="font-semibold text-gray-500 transition-colors hover:text-black"
          >
            Criar conta
          </Link>
        </p>
      )}
    </>
  );
}
