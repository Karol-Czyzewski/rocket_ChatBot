import { createElement, getHtmlElement, commandRegExp} from './ChatbotHelpers';
import { ChatbotStorage } from './ChatbotStorage';
import { ChatbotApi } from './ChatbotApi';
import { AvaibleWriters, AvaibleCommands, Message} from './types';
import { questions } from './questions';



export class ChatbotController {
    chatbotOpenButton: HTMLElement;
    chatbotCloseButton: HTMLElement;
    chatbotContainer: HTMLElement;
    messageContainer: HTMLElement;

    chatbotStorage: ChatbotStorage;
    chatbotApi: ChatbotApi;
    messagesList: Message[];

    constructor(messagesList: Message[]) {
        this.chatbotOpenButton = createElement('button');
        this.chatbotCloseButton = createElement('button');
        this.chatbotContainer = createElement('div');
        this.messageContainer = createElement('div', 'msgArea');

        this.chatbotStorage = new ChatbotStorage(messagesList, this.messageContainer);
        this.chatbotApi = new ChatbotApi();
        this.messagesList = messagesList;

        this.init();
    }

    init() {
        this.getMessageFromStorage();
        this.createChatbot();
        this.createGreetings();
    }

    createChatbot() {
        this.renderBotHeading();
        this.renderMessageArea();
        this.createInputField();

        this.chatbotContainer.classList.add("chatbotContainer");
        this.chatbotOpenButton.classList.add("chatbotOpenButton");

        this.chatbotOpenButton.addEventListener('click', () => this.chatbotContainer.classList.add("open"));
        this.chatbotCloseButton.addEventListener('click', () => this.chatbotContainer.classList.remove("open"));

        const body = getHtmlElement('body');
        body.appendChild(this.chatbotOpenButton);
        body.appendChild(this.chatbotContainer);
    }

    getMessageFromStorage() {
        this.messagesList.forEach(item => this.renderMessage(item.value, item.type))
    }

    createGreetings() {
        this.createMessage("Helllo in rocket_Bot! There are some info about SpaceX Corporation.", "bot-welcome");
        const questionsList = createElement('ul', 'list');
        this.messageContainer.appendChild(questionsList);

        questions.forEach(item => {
            const li = createElement('li', 'list-element', item.question);
            questionsList.appendChild(li);
            li.addEventListener('click', () => this.createMessage(item.anwser, "bot"))
        });
    }

    renderMessageArea() {
        this.chatbotContainer.appendChild(this.messageContainer);
    }

    renderBotHeading() {
        const headingOfBot = createElement('div', 'headingOfBot');
        const welcomeHeader = createElement('div', 'welcomeHeader', 'rocket_Bot');
        headingOfBot.appendChild(welcomeHeader);
        headingOfBot.appendChild(this.chatbotCloseButton);
        this.chatbotContainer.appendChild(headingOfBot);
    }

    createInputField() {
        const formContainer = createElement('div', 'formContainer');
        this.chatbotContainer.appendChild(formContainer);

        const formElement = createElement('form');
        formContainer.appendChild(formElement);

        const label = createElement('label');
        formElement.appendChild(label);

        const input = createElement('input') as HTMLInputElement;

        const inputSubmit = createElement('input') as HTMLInputElement;
        inputSubmit.type = "submit";
        inputSubmit.value = "";

        const btnContainer = createElement('div', "buttons-container");
        formContainer.appendChild(btnContainer);

        const clearStorageBtn = createElement('button', "null" ,'Clear');

        clearStorageBtn.addEventListener('click', () => {
            this.chatbotStorage.removeMessagesFromStorage();
            this.createGreetings();
        });

        const aboutBtn = createElement('button');
        aboutBtn.textContent = "Info launch";
        aboutBtn.addEventListener('click', () => this.createMessage(
            `List of commands:
            1. @next - next launch
            2. @latest - latest launch`
            , "bot"));

        btnContainer.appendChild(clearStorageBtn);
        btnContainer.appendChild(aboutBtn);

        label.appendChild(input);

        formElement.appendChild(inputSubmit);
        formElement.addEventListener('submit', (e) => this.logSubmit(e, input))
    }

    logSubmit(e: Event, input: HTMLInputElement) {
        e.preventDefault();

        if (input.value === '') return;
        this.createMessage(input.value, "user");

        const command = input.value as AvaibleCommands;
        this.runCommand(command);

        input.value = "";
    }

    createMessage(text: string, user: AvaibleWriters) {
        this.renderMessage(text, user);
        this.chatbotStorage.setMessageInStorage(text, user);
    }

    renderMessage(text: string, writer: AvaibleWriters) {
        const msg = createElement('div', 'message', text);
        msg.classList.add(`message--${writer}`);
        this.messageContainer.appendChild(msg);
    }

    runCommand(inputValue: AvaibleCommands) {
        if(!commandRegExp.test(inputValue)) return;
        this.createMessage('Loading data...', "bot");
        switch (inputValue) {
            case "@next":
                this.renderSpaceXData("next");
                break;
            case "@latest":
                this.renderSpaceXData("latest");
                break;
            default:
                this.createMessage("Uncorrect command, please check -> Info launch", "bot");
        }
    }

    async renderSpaceXData(query: string) {
        const data = await this.chatbotApi.getSpaceXData(query);
        this.createMessage(`${query} rocket launch:
        rocket name: ${data.name}
        launch date: ${data.date_utc}`,
        "bot");
    }
}
