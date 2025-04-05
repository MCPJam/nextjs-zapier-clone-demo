export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  const response = await fetch("https://app.asana.com/-/oauth_token", {
    method: "POST",
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      client_id: process.env.ASANA_CLIENT_ID!,
      client_secret: process.env.ASANA_CLIENT_SECRET!,
      redirect_uri: process.env.ASANA_REDIRECT_URI!,
      code: code!,
    }),
  });

  const data = await response.json();
  console.log("Asana token:", data);
  return new Response("Asana OAuth complete. Check your console.");
}