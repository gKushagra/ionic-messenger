export enum MessageTypes {
    TEXT = 'text',
    FILE = 'file',
    AUDIO = 'audio',
    VIDEO = 'video'
}

export interface Message {
    messageId: string,
    from: string,
    to: string,
    type: MessageTypes,
    body: string,
    timestamp: Date
}
