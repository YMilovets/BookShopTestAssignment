export default function getApiURL() {
  return new URL(
    import.meta.env.VITE_API_PATH,
    import.meta.env.VITE_API_URL,
  ).toString();
}
