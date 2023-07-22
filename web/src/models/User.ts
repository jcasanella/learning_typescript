export interface UserProps {
    name?: string;
    age?: number;
}

type Callback = () => void;

export class User {
    private events: { [key: string]: Callback[] } = {};

    constructor(private readonly data: UserProps) {}

    get(propName: string): string|number|undefined {
        const keys = Object.keys(this.data);
        if (keys.filter((_) => _ === propName).length !== 1) {
            throw new Error(`Not valid key: ${propName}`);
        }

        const keyProp = propName as keyof UserProps;
        return this.data[keyProp];
    }

    set(data: UserProps) {
        Object.assign(this.data, data);
    }

    on(eventName: string, callback: Callback) {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger(eventName: string) {
        const callbacks = this.events[eventName];
        if (!callbacks || callbacks.length === 0) {
            throw new Error(`Not existing eventName: ${eventName}`);
        }

        callbacks.forEach(callback => { callback() });

    }

    // fetch(): Promise<void> {

    // }

    // save(): Promise<void> {

    // }
}