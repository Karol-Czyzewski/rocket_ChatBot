import { ChatbotController } from './ChatbotController';
import { Message } from './types';
export class Chatbot {
    messagesList: Message[];
    chatbotController: ChatbotController;

    constructor() {
        const messagesData = localStorage.getItem("messages");
        this.messagesList = messagesData === null ? [] : JSON.parse(messagesData);
        this.chatbotController = new ChatbotController(this.messagesList);
    }
}
