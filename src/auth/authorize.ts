// Register app
// Get token
// Send Token

// The domain dedicated to Twitch authentication is https://id.twitch.tv.

// https://id.twitch.tv/oauth2/authorize
//     ?client_id=<your client ID>
//     &redirect_uri=<your registered redirect URI>
//     &response_type=code
//     &scope=<space-separated list of scopes>

// Mandar request para pegar token
// Autorizar
// Pegar o token

import axios from 'axios'

type AuthProps = {
    clientId: string,
    redirectUri: string,
    scope: string[],
}

export async function auth({
    clientId,
    redirectUri,
    scope,
}: AuthProps) {
    // const scopeString = scope.join(' ')

    // location.href = `https://id.twitch.tv/oauth2/authorize
    // ?client_id=${clientId}
    // &redirect_uri=${redirectUri}
    // &response_type=token
    // &scope=${scope}`
}

auth({
    clientId: 'xd',
    redirectUri: 'localhost:3000',
    scope: [
        'momento:dou',
        'xd:moment',
    ]
})