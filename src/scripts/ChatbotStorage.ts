import { AvaibleWriters, Message} from './types';

export class ChatbotStorage {
    messagesList: Message[];
    messageContainer: HTMLElement;

    constructor(messagesList: Message[], messageContainer: HTMLElement) {
        this.messagesList = messagesList;
        this.messageContainer = messageContainer;
    }

    setMessageInStorage(value: string, type: AvaibleWriters) {
        this.messagesList.push({value: value, type: type})
        localStorage.setItem('messages', JSON.stringify(this.messagesList));
    }

    removeMessagesFromStorage() {
        this.messagesList.splice(0);
        localStorage.removeItem('messages');
        this.messageContainer.textContent = "";
    }
}
