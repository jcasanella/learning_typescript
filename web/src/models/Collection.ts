import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

export class Collection<T, V> {
    private models: T[] = [];
    private events = new Eventing();

    constructor(
        private readonly url: string, 
        private readonly deserialize: (json: V) => T
    ) {}

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
                    this.models.push(this.deserialize(value));
                });
            })

        this.trigger('change');
    }
}