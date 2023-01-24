export interface Message {
  text: string
  sender: string
}

export interface WebSocketMessage {
  type: string
  content: Record<string, any>
}
