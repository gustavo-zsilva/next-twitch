import axios from 'axios'
import { getToken } from './token/getToken'

type ChannelProps = {
    name: string,
    clientId: string,
}

export async function getChannel({ name, clientId }: ChannelProps) {
    const token = getToken()

    await axios.get(`https://api.twitch.tv/helix/search/channels?query=${name}`, {
        headers: {
            'client-id': clientId,
            'Authorization': `Bearer ${token}`,
        }
    })
}