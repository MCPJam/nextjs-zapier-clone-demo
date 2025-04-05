export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  const response = await fetch("https://slack.com/api/oauth.v2.access", {
    method: "POST",
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.SLACK_CLIENT_ID!,
      client_secret: process.env.SLACK_CLIENT_SECRET!,
      code: code!,
      redirect_uri: process.env.SLACK_REDIRECT_URI!,
    }),
  });

  const data = await response.json();
  console.log("Slack token:", data);
  return new Response("Slack OAuth complete. Check your console.");
}