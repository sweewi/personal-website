// Ensure the root path serves index.html
export function onRequest(context) {
  return context.next();
}
