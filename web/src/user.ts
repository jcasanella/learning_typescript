export interface UserProps {
    name?: string;
    age?: number;
}

export class User {
    constructor(private readonly data: UserProps) {}

    get(propName: string): string|number {
        const keys = Object.keys(this.data);
        if (keys.filter((_) => _ === propName).length != 1) {
            throw new Exception("Not valid key");
        }

        return this.data[propName];
    }

    set(data: UserProps) {

    }

    on(eventName: string, callback() => {}) {

    }

    trigger(eventName: string) {

    }

    fetch(): Promise<void> {

    }

    save(): Promise<void> {

    }
}