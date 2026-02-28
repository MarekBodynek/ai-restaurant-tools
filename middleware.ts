import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all pathnames except for
    // - /api (API routes)
    // - /_next (Next.js internals)
    // - /_vercel (Vercel internals)
    // - /monitoring (Sentry)
    // - Static files (e.g. /favicon.ico, /og-image.png)
    "/((?!api|_next|_vercel|monitoring|.*\\..*).*)",
  ],
};
