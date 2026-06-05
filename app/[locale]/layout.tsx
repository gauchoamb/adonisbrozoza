import Link from 'next/link';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import { getContent } from '@/lib/content';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const L = locale as Locale;
  const data = getContent(L);

  return (
    <html lang={L}>
      <body>
        <div className="page">
          <header className="header">
            <Link href={`/${L}`} className="header-name">
              Adonis M. Brozoza
            </Link>
            <nav className="header-nav">
              <span className="locale-switch">
                <Link href="/en" className={L === 'en' ? 'active' : 'inactive'}>
                  EN
                </Link>
                {' '}
                <Link href="/pt" className={L === 'pt' ? 'active' : 'inactive'}>
                  PT
                </Link>
              </span>
            </nav>
          </header>

          <main>{children}</main>

          <div className="social">
            {data.social.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </div>

          <footer className="footer">
            <span>© {new Date().getFullYear()}</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
