import { Eventing } from "./Eventing";
import { User } from "./User";

export class Collection {
    private models: User[] = [];
    private events = new Eventing();

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }
}