import { env } from "./env";

export const APP_HOSTNAMES = new Set([
  `app.${env.NEXT_PUBLIC_APP_DOMAIN}`,
  `preview.${env.NEXT_PUBLIC_APP_DOMAIN}`,
  "localhost:3000",
  "localhost",
]);
