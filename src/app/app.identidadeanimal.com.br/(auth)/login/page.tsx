import { Metadata } from "next";
import { Suspense } from "react";

import { Button } from "@/components/ui/button";
import LoginForm from "./form";

export const metadata: Metadata = {
  title: `Faça login na Identidade Animal`,
};

export default function LoginPage() {
  return (
    <div className="relative z-10 mt-[calc(30vh)] h-fit w-full max-w-md overflow-hidden border-y border-gray-200 sm:rounded-2xl sm:border sm:shadow-xl">
      <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
        <h3 className="text-xl font-semibold">Faça login na Identidade Animal</h3>
        <p className="text-sm text-gray-500">
        Seu Pet registrado e com documentos personalizados!
        </p>
      </div>
      <div className="flex flex-col space-y-3 bg-gray-50 px-4 py-8 sm:px-16">
        <Suspense
          fallback={
            <>
              <Button disabled={true} variant="secondary" />
              <Button disabled={true} variant="secondary" />
              <Button disabled={true} variant="secondary" />
              <div className="mx-auto h-5 w-3/4 rounded-lg bg-gray-100" />
            </>
          }
        >
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
