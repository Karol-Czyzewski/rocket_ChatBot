import { AvaibleWriters, Message} from './types';

export class ChatbotStorage {
    messagesList: Message[];

    constructor() {
        const messagesData = localStorage.getItem("messages");
        this.messagesList = messagesData === null ? [] : JSON.parse(messagesData);
    }

    setMessageInStorage(value: string, type: AvaibleWriters) {
        this.messagesList.push({value: value, type: type})
        localStorage.setItem('messages', JSON.stringify(this.messagesList));
    }

    removeMessagesFromStorage() {
        this.messagesList.splice(0);
        localStorage.removeItem('messages');
    }
}
