import { AxiosPromise } from "axios";

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

export class Model {

}