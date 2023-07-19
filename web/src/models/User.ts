export interface UserProps {
    name?: string;
    age?: number;
}

type Callback = () => void;

export class User {
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

    }

    trigger(eventName: string) {

    }

    // fetch(): Promise<void> {

    // }

    // save(): Promise<void> {

    // }
}