export default async (request: Request, context: { next: () => Promise<Response> }) => {
  const url = new URL(request.url);
  const { pathname } = url;
  const hasExtension = /\.[a-zA-Z0-9]+$/.test(pathname);

  if (
    pathname !== "/" &&
    !pathname.endsWith("/") &&
    !hasExtension &&
    !pathname.startsWith("/.netlify/")
  ) {
    url.pathname = `${pathname}/`;
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
};

export const config = { path: "/*" };
