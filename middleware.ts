import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const spanishSpeakingCountries = [
  'AR',
  'BO',
  'CL',
  'CO',
  'CR',
  'CU',
  'DO',
  'EC',
  'SV',
  'GQ',
  'GT',
  'HN',
  'MX',
  'NI',
  'PA',
  'PY',
  'PE',
  'PR',
  'ES',
  'UY',
  'VE',
];

export function middleware(request: NextRequest): NextResponse<unknown> {
  // Step 1: Get locale from cookie or Accept-Language header
  const acceptLang = request.headers.get('accept-language') || '';
  const country = request.geo?.country || 'US';
  const geoLocale = spanishSpeakingCountries.includes(country)
    ? 'es-ES'
    : 'en-US';

  const preferredLang = acceptLang.split(',')[0]; // e.g., "es-ES"

  // Step 2: Determine if it's a supported locale
  const supportedLocales = ['es-ES', 'en-US', 'es-419'];

  const selectedLocale = supportedLocales.includes(preferredLang)
    ? preferredLang
    : geoLocale;

  // Step 3: Clone and modify the request URL
  const url = request.nextUrl.clone();
  url.searchParams.set(
    'locale',
    selectedLocale.startsWith('es') ? 'es-ES' : 'en-US'
  );

  return NextResponse.rewrite(url); // Forward modified URL to the handler
}

export const config = {
  matcher: ['/virtue-in-motion', '/virtue-in-motion/:path*'], // apply only to /blog routes
};
