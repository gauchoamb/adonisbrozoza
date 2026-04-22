import Link from 'next/link';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import { getContent } from '@/lib/content';

export default async function NowPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const L = locale as Locale;
  const data = getContent(L);

  return (
    <article>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '22px',
        fontWeight: 400,
        marginBottom: '1.5rem',
        color: 'var(--color-ink)',
      }}>
        {data.now.title}
      </h1>
      <div style={{
        fontFamily: 'var(--font-body)',
        fontSize: '16px',
        lineHeight: 1.7,
        color: 'var(--color-ink)',
      }}>
        {data.now.content ? (
          <p>{data.now.content}</p>
        ) : (
          <p style={{ fontStyle: 'italic' }}>
            {L === 'pt' ? 'Em breve.' : 'Coming soon.'}
          </p>
        )}
      </div>
      <div style={{ marginTop: '2rem' }}>
        <Link
          href={`/${L}`}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            fontStyle: 'italic',
            color: 'var(--color-ink)',
            textDecoration: 'none',
          }}
        >
          ← {L === 'pt' ? 'Voltar' : 'Back'}
        </Link>
      </div>
    </article>
  );
}
