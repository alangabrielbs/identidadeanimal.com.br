
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

import { UserProps } from "../types";
import { parse } from './utils';

export default async function AppMiddleware(req: NextRequest) {
  const { path, fullPath } = parse(req);
  const session = (await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  })) as {
    email?: string;
    user?: UserProps;
  };

  // if there's no session and the path isn't /login or /criar-conta, redirect to /login
  if (!session?.email && path !== "/login" && path !== "/criar-conta") {
    return NextResponse.redirect(
      new URL(
        `/login${path === "/" ? "" : `?next=${encodeURIComponent(fullPath)}`}`,
        req.url
      )
    );

    // if there's a session
  } else if (session?.email) {
    if (path === "/login" || path === "/criar-conta") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  // otherwise, rewrite the path to /app
  return NextResponse.rewrite(
    new URL(`/app.identidadeanimal.com.br${fullPath === "/" ? "" : fullPath}`, req.url)
  );
}
