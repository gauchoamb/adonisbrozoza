import { type Locale } from '@/lib/i18n';
import { en } from '@/lib/content-en';
import { pt } from '@/lib/content-pt';
import { use } from 'react';

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  const L = locale as Locale;
  const data = L === 'pt' ? pt : en;

  return (
    <>
      {/* Bio */}
      <div className="bio">
        <p>
          {data.bio.short}{' '}
          <a href={data.bio.orgUrl} target="_blank" rel="noopener noreferrer">
            {data.bio.orgName}
          </a>
          {data.bio.after}
        </p>
        {data.bio.extended.map((para, i) => (
          <p key={i} style={{ marginTop: '1em' }}>{para}</p>
        ))}
      </div>

      {/* Publications */}
      <section className="section">
        <div className="section-label">{data.sections.publications}</div>
        <ul className="entry-list">
          {data.publications.map((pub, i) => (
            <li key={i} className="entry-row">
              <div>
                {pub.url ? (
                  <a
                    href={pub.url}
                    className="entry-title entry-title-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {pub.title}
                  </a>
                ) : (
                  <span className="entry-title">{pub.title}</span>
                )}{' '}
                {'note' in pub && (
                  <span className="entry-lang">*{pub.note}</span>
                )}{' '}
                <span className="entry-lang">({pub.lang})</span>
              </div>
              <span className="entry-meta">{pub.meta}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Speaking */}
      <section className="section">
        <div className="section-label">{data.sections.speaking}</div>
        <ul className="entry-list">
          {data.speaking.map((item, i) => (
            <li key={i} className="entry-row">
              <span className="entry-title">{item.title}</span>
              <span className="entry-meta">{item.meta}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Education & credentials */}
      <section className="section">
        <div className="section-label">{data.sections.education}</div>
        <ul className="cred-list">
          {data.credentials.map((cred, i) => (
            <li key={i} className="cred-item">
              {cred}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
