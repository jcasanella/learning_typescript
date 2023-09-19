export type Callback = () => void;

export class Eventing {
    private events: { [key: string]: Callback[] } = {};
    
    on = (eventName: string, callback: Callback) => {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    };

    trigger = (eventName: string) => {
        const callbacks = this.events[eventName];
        if (!callbacks || callbacks.length === 0) {
            throw new Error(`Not existing eventName: ${eventName}`);
        }

        callbacks.forEach(callback => { callback() });

    };
}
