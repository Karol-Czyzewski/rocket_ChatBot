import { AvaibleWriters, AvaibleCommands} from './types';
import { createElement, getHtmlElement} from './ChatbotHelpers';
import { ChatbotStorage } from './ChatbotStorage';
import { questions } from './questions';
import { ChatbotApi } from './ChatbotApi';

export class ChatbotRender {
    chatbotStorage: ChatbotStorage;
    chatbotApi: ChatbotApi;

    chatbotOpenButton: HTMLElement;
    chatbotCloseButton: HTMLElement;
    chatbotContainer: HTMLElement;
    messageContainer: HTMLElement;

    constructor(chatbotStorage: ChatbotStorage, chatbotApi: ChatbotApi) {
        this.chatbotStorage = chatbotStorage;
        this.chatbotApi = chatbotApi;

        this.chatbotOpenButton = createElement('button', 'chatbotOpenButton');
        this.chatbotCloseButton = createElement('button', 'chatbotCloseButton');
        this.chatbotContainer = createElement('div', 'chatbotContainer');
        this.messageContainer = createElement('div', 'msgArea');
    }

    createChatbot() {
        this.renderBotHeading();
        this.renderMessageArea();
        this.createInputField();

        this.chatbotOpenButton.addEventListener('click', () => this.chatbotContainer.classList.add("open"));
        this.chatbotCloseButton.addEventListener('click', () => this.chatbotContainer.classList.remove("open"));

        const body = getHtmlElement('body');
        body.appendChild(this.chatbotOpenButton);
        body.appendChild(this.chatbotContainer);
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

        const formElement = createElement('form', 'form');
        formContainer.appendChild(formElement);

        const label = createElement('label', 'label');
        formElement.appendChild(label);

        const input = createElement('input', 'input') as HTMLInputElement;

        const inputSubmit = createElement('input', 'input') as HTMLInputElement;
        inputSubmit.type = "submit";
        inputSubmit.value = "";

        const btnContainer = createElement('div', "buttons-container");
        formContainer.appendChild(btnContainer);

        const clearStorageBtn = createElement('button', 'cta-form' ,'Clear');

        clearStorageBtn.addEventListener('click', () => {
            this.chatbotStorage.removeMessagesFromStorage();
            this.messageContainer.textContent = "";
            this.createGreetings();
        });

        const aboutBtn = createElement('button', 'cta-form', 'Info launch');
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

    createMessage(text: string, user: AvaibleWriters) {
        this.renderMessage(text, user);
        this.chatbotStorage.setMessageInStorage(text, user);
    }

    renderMessage(text: string, writer: AvaibleWriters) {
        const msg = createElement('div', 'message', text);
        msg.classList.add(`message--${writer}`);
        this.messageContainer.appendChild(msg);
    }

    runCommand(inputValue: string) {
        switch (inputValue) {
            case "@next":
                this.createMessage('Loading data with next launch...', "bot");
                this.renderSpaceXData("next");
                break;
            case "@latest":
                this.createMessage('Loading data with latest launch...', "bot");
                this.renderSpaceXData("latest");
                break;
            default:
        }
    }

    logSubmit(e: Event, input: HTMLInputElement) {
        e.preventDefault();

        if (input.value === '') return;
        this.createMessage(input.value, "user");

        const command = input.value as AvaibleCommands;
        this.runCommand(command);

        input.value = "";
    }

    async renderSpaceXData(query: string) {
        const data = await this.chatbotApi.getSpaceXData(query);
        this.createMessage(`${query} rocket launch:
        rocket name: ${data.name}
        launch date: ${data.date_utc}`,
        "bot");
    }
}
