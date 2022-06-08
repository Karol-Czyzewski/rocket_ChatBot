export class ChatbotApi {
    async getSpaceXData (query: string) {
        try {
            const response = await fetch(`https://api.spacexdata.com/v4/launches/${query}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const spaceXData = await response.json();
            return spaceXData;
        } catch (err) {
            throw err;
        }
    }
}
