import { User } from "../models/User";

export abstract class View {
    constructor(protected readonly parent: Element, protected readonly model: User) {
        this.model.on('change', () => {
            this.render();
        });
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();

        for (const eventKey in eventsMap) {
            const [event, selector] = eventKey.split(":");

            fragment.querySelectorAll(selector).forEach((_) => {
                _.addEventListener(event, eventsMap[eventKey])
            });
        }
    }

    abstract eventsMap(): { [key: string]: () => void };

    abstract template(): string;

    render(): void {
        this.parent.innerHTML = '';

        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content);

        this.parent.append(templateElement.content);
    } 
}