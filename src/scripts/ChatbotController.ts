import { commandRegExp} from './ChatbotHelpers';
import { ChatbotRender } from './ChatbotRender';
import { ChatbotStorage } from './ChatbotStorage';

import { ChatbotApi } from './ChatbotApi';
import {AvaibleCommands, Message} from './types';

export class ChatbotController {
    chatbotRender: ChatbotRender;
    chatbotStorage: ChatbotStorage;
    chatbotApi: ChatbotApi;
    messagesList: Message[];

    constructor(messagesList: Message[]) {
        this.chatbotStorage = new ChatbotStorage(messagesList);
        this.chatbotRender = new ChatbotRender(this.chatbotStorage, this);
        this.chatbotApi = new ChatbotApi();
        this.messagesList = messagesList;

        this.init();
    }

    init() {
        this.chatbotRender.createChatbot();
        this.getMessageFromStorage();
        this.chatbotRender.createGreetings();
    }

    getMessageFromStorage() {
        this.messagesList.forEach(item => this.chatbotRender.renderMessage(item.value, item.type))
    }

    runCommand(inputValue: AvaibleCommands) {
        if(!(commandRegExp.test(inputValue))) return;
        this.chatbotRender.createMessage('Loading data...', "bot");
        switch (inputValue) {
            case "@next":
                this.renderSpaceXData("next");
                break;
            case "@latest":
                this.renderSpaceXData("latest");
                break;
            default:
                this.chatbotRender.createMessage("Uncorrect command, please check -> Info launch", "bot");
        }
    }

    async renderSpaceXData(query: string) {
        const data = await this.chatbotApi.getSpaceXData(query);
        this.chatbotRender.createMessage(`${query} rocket launch:
        rocket name: ${data.name}
        launch date: ${data.date_utc}`,
        "bot");
    }
}
