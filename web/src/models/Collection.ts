import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";
import { User, UserProps } from "./User";

export class Collection {
    private models: User[] = [];
    private events = new Eventing();

    constructor(private readonly url: string) {}

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    fetch(): void {
        axios.get(this.url)
            .then((resp: AxiosResponse) => {
                resp.data.array.forEach((value: UserProps) => {
                    this.models.push(User.build(value));
                });
            })

        this.trigger('change');
    }
}