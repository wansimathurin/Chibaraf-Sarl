import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "fr"];
export const defaultLocale = "en";
export const localePrefix = "always";

export const routing = { locales, defaultLocale, localePrefix };
