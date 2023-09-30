export class UserForm {
    constructor(private readonly parent: Element) {}

    onButtonClick(): void {
        console.log('Hi button!!!');
    }

    onHeaderHover(): void {
        console.log('Hi from Header!!!');
    }

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:button': this.onButtonClick,
            'mouseenter:h1': this.onHeaderHover
        };
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

    template(): string {
        return `
            <div>
                <h1>User Form</h1>
                <input />
                <button>Click Me</button>
            </div>
        `;
    }

    render(): void {
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content);

        this.parent.append(templateElement.content);
    }
}