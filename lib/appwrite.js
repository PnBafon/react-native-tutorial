import {Client, Account,Avatars} from 'react-native-appwrite'

const client = new Client()
    .setProject('6aeb4b6b001c0ebdf28c') // Your project ID
    .setPlatform('dev.pn.sheilf') // Your platform (react-native, flutter, etc.)

export const account = new Account(client)
export const avatars = new Avatars(client)