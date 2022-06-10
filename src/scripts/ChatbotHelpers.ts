export const createElement = (type: string, cssClass: string, textContent?: string) => {
    const element = document.createElement(type);
    element.textContent = textContent || '';
    element.classList.add(cssClass);
    return element;
};

export const getHtmlElement = (element: string) => {
    const htmlElement = document.querySelector(element);
    if(htmlElement === null) throw new Error(`${element} HTML element dosent exist`);
    return htmlElement;
}
