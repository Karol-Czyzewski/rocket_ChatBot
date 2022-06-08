export interface Message {
    value: string;
    type: AvaibleWriters;
};

export type AvaibleWriters = 'user' | 'bot' | 'bot-welcome';
export type AvaibleCommands = '@next' | '@latest';
