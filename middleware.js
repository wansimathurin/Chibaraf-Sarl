import createMiddleware from "next-intl/middleware";
import { localePrefix } from "./src/i18n/navigation";

// Get the user's preferred locale from header
function getLocale(request) {
  const acceptLanguage = request.headers.get("accept-language") ?? "en";
  return acceptLanguage.split(",")[0].split("-")[0];
}

export default createMiddleware({
  locales: ["en", "fr"],
  defaultLocale: "en",
  localePrefix,
});

export const config = {
  matcher: [
    // Match all pathnames except for
    // - /api routes
    // - /_next (Next.js internals)
    // - /images, /favicon.ico, etc.
    "/((?!api|_next|.*\\..*).*)",
  ],
};
