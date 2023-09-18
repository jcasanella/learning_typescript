export class Attributes<T extends { [key: string]: string|number|undefined }> {
    constructor(private data: T) {}

    get(propName: string): string|number|undefined {
        const keys = Object.keys(this.data);
        if (keys.filter((_) => _ === propName).length !== 1) {
            throw new Error(`Not valid key: ${propName}`);
        }

        type  ValidProps = keyof typeof this.data;
        const keyProp = propName as ValidProps;
        return this.data[keyProp];
    }

    set(data: T) {
        Object.assign(this.data, data);
    }
}