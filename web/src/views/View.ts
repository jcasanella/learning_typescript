import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K extends { id?: number }> {
    private _regions: { [key: string]: Element } = {};

    constructor(protected readonly parent: Element, protected readonly model: T) {
        this.model.on('change', () => {
            this.render();
        });
    }

    get regions() {
        return this._regions;
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

    abstract template(): string;

    eventsMap(): { [key: string]: () => void } {
        return {};
    }

    regionsMap(): { [key: string]: string } {
        return {};
    }

    mapRegions(fragment: DocumentFragment): void {
        const regionsMap = this.regionsMap();

        for (const key in regionsMap) {
            const selector = regionsMap[key];
            const element = fragment.querySelector(selector);
            if (element) {
                this._regions[key] = element;
            }
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onRender(): void {}

    render(): void {
        this.parent.innerHTML = '';

        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content);
        this.mapRegions(templateElement.content);

        this.onRender();

        this.parent.append(templateElement.content);
    } 
}