import { ChatbotRender } from './ChatbotRender';
import { ChatbotStorage } from './ChatbotStorage';
import { ChatbotApi } from './ChatbotApi';

export class ChatbotController {
    chatbotRender: ChatbotRender;
    chatbotStorage: ChatbotStorage;
    chatbotApi: ChatbotApi;

    constructor() {
        this.chatbotStorage = new ChatbotStorage();
        this.chatbotApi = new ChatbotApi();
        this.chatbotRender = new ChatbotRender(this.chatbotStorage, this.chatbotApi);

        this.init();
    }

    init() {
        this.chatbotRender.createChatbot();
        this.getMessageFromStorage();
        this.chatbotRender.createGreetings();
    }

    getMessageFromStorage() {
        this.chatbotStorage.messagesList.forEach(item => this.chatbotRender.renderMessage(item.value, item.type))
    }
}
