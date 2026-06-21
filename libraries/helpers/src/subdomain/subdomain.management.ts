export function getCookieUrlFromDomain(_domain: string): string | undefined {
  // Host-only cookies for single-instance self-hosting.
  //
  // The previous implementation derived a cookie Domain attribute from FRONTEND_URL
  // via tldts. On hosts under a public suffix that tldts doesn't treat as private
  // (e.g. *.up.railway.app -> registrable domain "railway.app"), this produced
  // `Domain=.railway.app`, which browsers reject because railway.app is a public
  // suffix. The auth cookie was silently dropped, causing an infinite login loop.
  //
  // Returning undefined omits the Domain attribute, making cookies host-only. They
  // are scoped to the exact host and always accepted — correct for a single instance.
  return undefined;
}
