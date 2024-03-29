import { AxiosPromise, AxiosResponse } from "axios";

interface ModelAttributes<T> {
    get<K extends keyof T>(key: K): T[K];
    set(data: T): void;
    getAll(): T;
}

interface Sync<T> {
    fetch(id: number): AxiosPromise<T>;
    save(data: T): AxiosPromise<T>;
}

interface Events {
    on(eventName: string, callback: () => void): void;
    trigger(eventName: string): void;
}

export class Model<T extends { id?: number }> {
    constructor(private attributes: ModelAttributes<T>, private events: Events, private sync: Sync<T>) {}

    on = this.events.on;

    trigger = this.events.trigger;

    get = this.attributes.get;

    set(update: T): void {
        this.attributes.set(update);
        this.events.trigger('change');
    }

    fetch(): void {
        const id = this.attributes.get('id');
        if (typeof id !== 'number') {
            throw new Error('Cannot fetch without an id');
        }

        this.sync.fetch(id)
            .then((resp: AxiosResponse): void => {
                console.log(resp.data);
                this.set(resp.data);
            });
    }

    save(): void {
        this.sync.save(this.attributes.getAll())
        .then((resp: AxiosResponse): void => {
            console.log(resp.status);
            this.trigger('save');
        })
        .catch((_) => this.trigger('error'));
    }
}