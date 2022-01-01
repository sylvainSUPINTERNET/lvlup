export interface WsMedia {
    channelId: string
    name: string
    publishedAt: string
    title: string
    description: string
    /**
     * When you get response from emotion this field is filled
     */
    emotions?: any
}