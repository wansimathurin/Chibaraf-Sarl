import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = locale ?? defaultLocale ?? "en";
  const useLocale = locales.includes(resolvedLocale)
    ? resolvedLocale
    : defaultLocale ?? "en";

  try {
    const messages = (await import(`../../messages/${useLocale}.json`)).default;
    return { messages, locale: useLocale };
  } catch (err) {
    console.error(
      `next-intl: could not load messages for locale "${useLocale}"`,
      err
    );
    return { messages: {}, locale: useLocale };
  }
});
