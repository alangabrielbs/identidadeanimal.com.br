
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
    // if the user was created in the last 10s
    // (this is a workaround because the `isNewUser` flag is triggered when a user does `dangerousEmailAccountLinking`)
    if (
      session?.user?.createdAt &&
      new Date(session?.user?.createdAt).getTime() > Date.now() - 10000 &&
      // here we include the root page + /new (since they're going through welcome flow already)
      (path === "/" || path === "/new")
    ) {
      return NextResponse.redirect(new URL("/welcome", req.url));

      // if the path is /login or /criar-conta, redirect to "/"
    } else if (path === "/login" || path === "/criar-conta") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  // otherwise, rewrite the path to /app
  return NextResponse.rewrite(
    new URL(`/app.identidadeanimal.com.br${fullPath === "/" ? "" : fullPath}`, req.url)
  );
}
