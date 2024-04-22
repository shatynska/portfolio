import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales } from './navigation';

export default createMiddleware({
  defaultLocale: 'en',
  localePrefix,
  locales,
});

export const config = {
  matcher: ['/', '/(ua|en)/:path*'],
};
