"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "fr" : "en";
    router.push(`/${newLocale}${window.location.pathname.substring(3)}`);
  };

  return (
    <div className="relative group">
      <button
        onClick={toggleLocale}
        className="flex items-center gap-2 px-4 py-2 rounded-full 
          bg-white/5 hover:bg-white/10 border border-white/10 
          backdrop-blur-sm transition-all duration-300 
          group-hover:shadow-lg group-hover:border-white/20"
        aria-label={`Switch to ${locale === "en" ? "French" : "English"}`}
      >
        <Globe className="w-4 h-4" />
        <span className="font-medium">
          {locale === "en" ? (
            <span className="flex items-center gap-1">
              EN <span className="text-white/50">|</span>{" "}
              <span className="text-white/50 hover:text-white">FR</span>
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <span className="text-white/50 hover:text-white">EN</span>{" "}
              <span className="text-white/50">|</span> FR
            </span>
          )}
        </span>
      </button>

      <div
        className="absolute top-full mt-2 right-0 p-1 
        bg-black/90 backdrop-blur-md rounded-lg border border-white/10 
        opacity-0 translate-y-2 invisible 
        group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible
        transition-all duration-300"
      >
        <div className="text-xs text-white/70 px-3 py-2 whitespace-nowrap">
          {locale === "en" ? "Changer en Français" : "Switch to English"}
        </div>
      </div>
    </div>
  );
}
