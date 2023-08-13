import Pusher from 'pusher'
import ClientPusher from 'pusher-js'

export const serverPusher = new Pusher({
    appId:process.env.PUSHER_APP_ID!,
    key:process.env.PUSHER_KEY!,
    secret:process.env.PUSHER_SECRER!,
    cluster:'ap2'
});

export const clientPusher = new ClientPusher('82a2020b2f97069b7be4', {
    cluster: 'ap2'
})