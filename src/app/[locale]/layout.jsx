import "../globals.css";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import NavBar from "@/components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

// Metadata with translations
export async function generateMetadata({ params }) {
  // params is a Promise in Next 14+; await before reading properties
  const { locale } = await params;

  try {
    const messages = (await import(`../../../messages/${locale}.json`)).default;

    return {
      title: messages.metadata?.title || "Chibaraf",
      description:
        messages.metadata?.description || "Sustainable Agriculture Solutions",
      openGraph: {
        title:
          messages.metadata?.ogTitle || messages.metadata?.title || "Chibaraf",
        description:
          messages.metadata?.ogDescription || messages.metadata?.description,
      },
    };
  } catch (err) {
    return {
      title: "Chibaraf",
      description: "Sustainable Agriculture Solutions",
    };
  }
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
}

export default async function LocaleLayout({ children, params }) {
  // unwrap params promise
  const { locale } = await params;

  // validate locale
  if (!hasLocale(routing.locales, locale)) {
    return notFound();
  }

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (err) {
    return notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
         <NavBar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
