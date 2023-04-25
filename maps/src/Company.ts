import { faker } from '@faker-js/faker';
import { Mappable } from './Map';

export class Company implements Mappable {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }

    color = 'red';

    constructor() {
        this.name = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: Number(faker.address.latitude()),
            lng: Number(faker.address.longitude())
        };
    }

    markerContent() {
        return `<div>
            <h1>The comapny name is ${this.name}</h1>  
            <h3>catchPhrase ${this.catchPhrase}</h3>
            </div>`;
    }
} 