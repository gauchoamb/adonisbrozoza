import { en } from './content-en';
import { pt } from './content-pt';
import type { Locale } from './i18n';

export function getContent(locale: Locale) {
  return locale === 'pt' ? pt : en;
}
