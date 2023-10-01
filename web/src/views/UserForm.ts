import { User } from "../models/User";

export class UserForm {
    constructor(private readonly parent: Element, private readonly user: User) {
        this.user.on('change', () => {
            this.render();
        });
    }

    onSetAgeClick = (): void => {
        console.log('Set Age Clicked');
        this.user.setRandomAge();
    }

    onSetNameClick = (): void => {
        const input = this.parent.querySelector('input');
        const name = input?.value;
        this.user.set({ name });
    }

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick
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
                <div>User Name: ${this.user.get('name')}</div>
                <div>User Age: ${this.user.get('age')}</div>
                <input />
                <button class="set-name">Change Name</button>
                <button class="set-age">Set Random Age</button>
            </div>
        `;
    }

    render(): void {
        this.parent.innerHTML = '';

        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content);

        this.parent.append(templateElement.content);
    }
}