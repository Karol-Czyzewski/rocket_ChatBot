import { ChatbotController } from './ChatbotController';
export class Chatbot {
    chatbotController: ChatbotController;

    constructor() {
        this.chatbotController = new ChatbotController();
    }
}
