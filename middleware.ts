import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales } from './src/navigation';

export default createMiddleware({
  defaultLocale: 'en',
  localePrefix,
  locales,
});

export const config = {
  matcher: ['/', '/(ua|en)/:path*'],
};
