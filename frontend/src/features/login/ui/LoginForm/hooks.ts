export default function useCorrectCookies() {
  const isCorrectCookiesURL =
    import.meta.env.VITE_API_URL === globalThis.location.origin;

  return { isCorrectCookiesURL };
}
