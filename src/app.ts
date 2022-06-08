// - [ ] Głównym zadaniem jest stworzenie gotowego elementu UI (buttona), który po kliknięciu ma otwierać okno chatbota

// * Okno ma nie zajmować więcej niż 25% ekranu +
// * Kliknięcie poza obszar chatbota powoduje jego zamknięcie

// - [ ] Po otwarciu okna ma pojawic się kilka opcji predefiniowanych, po kliknięciu w które pojawia się odpowiedź w dymku, a zaraz poniżej po raz kolejny wszystkie opcje predefiniowane

// - [ ] Pole tekstowe ma być aktywne, a bot ma przeszukiwać wpisany tekst pod względem słowa-kluczy i zwracać prawdopodobne odpowiedzi z opcji predefiniowanych

// - [ ] Jeśli żadne ze słów-kluczy nie pasuje, bot informuje że żaden z konsultantów nie jest podłączony, nie może odpowiedzieć na pytanie, i pokazuje opcje predefiniowane

import './style.scss';
import { Chatbot } from './scripts/Chatbot';

// import { Chatbot } from './scripts/ChatbotAll';

const chatbot = new Chatbot();
