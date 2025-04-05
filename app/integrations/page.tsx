import "react";

export default function Integrations() {
  return (
    <div>
      <h1>Integrations</h1>
      <a
        href={`https://slack.com/oauth/v2/authorize?client_id=${process.env.NEXT_PUBLIC_SLACK_CLIENT_ID}&scope=commands,users:read&redirect_uri=${process.env.NEXT_PUBLIC_SLACK_REDIRECT_URI}`}
      >
        Connect Slack
      </a>
      <br />
      <a
        href={`https://app.asana.com/-/oauth_authorize?client_id=${process.env.NEXT_PUBLIC_ASANA_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_ASANA_REDIRECT_URI}`}
      >
        Connect Asana
      </a>
      <br />
      <a
        href={`https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI}&scope=user-read-email`}
      >
        Connect Spotify
      </a>
    </div>
  );
}
