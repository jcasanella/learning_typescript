import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

export class Collection<T, V> {
    private _models: T[] = [];
    private events = new Eventing();

    constructor(
        private readonly url: string, 
        private readonly deserialize: (json: V) => T
    ) {}

    get models() {
        return this._models;
    }

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    fetch(): void {
        axios.get(this.url)
            .then((resp: AxiosResponse) => {
                resp.data.array.forEach((value: V) => {
                    this._models.push(this.deserialize(value));
                });
            })

        this.trigger('change');
    }
}