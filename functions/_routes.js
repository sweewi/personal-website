/* This file will redirect all routes to the index.html file
 * so that client-side routing can work properly on Cloudflare Pages
 */
export function onRequest(context) {
  // Get the requested URL
  const url = new URL(context.request.url);
  
  // If the request is for a file with an extension (like .js, .css, .png, etc.) 
  // or for the root path, we let Cloudflare handle it normally
  if (url.pathname === '/' || url.pathname.match(/\.[a-zA-Z0-9]{2,4}$/)) {
    return context.next();
  }
  
  // Otherwise, we redirect to index.html to let the React Router handle it
  return Response.redirect(`${url.origin}/index.html`, 200);
}
