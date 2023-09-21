export class Attributes<T extends object> {
    constructor(readonly data: T) {}

    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key];
    };

    set(data: T) {
        Object.assign(this.data, data);
    }
}