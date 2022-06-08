import { ChatbotController } from './ChatbotController';
import { ChatbotStorage } from './ChatbotStorage';
import { Message } from './types';
export class Chatbot {
    messagesList: Message[];
    chatbotController: ChatbotController;
    // chatbotStorage: ChatbotStorage;

    constructor() {
        const messagesData = localStorage.getItem("messages");
        this.messagesList = messagesData === null ? [] : JSON.parse(messagesData);
        this.chatbotController = new ChatbotController(this.messagesList);
        // this.chatbotStorage = new ChatbotStorage(this.messagesList, this.chatbotController.messageContainer);
    }
}
