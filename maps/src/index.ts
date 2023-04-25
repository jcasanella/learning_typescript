import { Company } from './Company';
import { User } from './User';
import { Map } from './Map';

const el: HTMLElement | null = document.getElementById('map');
if (el) {
    const company = new Company();
    const user = new User();

    const map = new Map(el);
    map.addMarker(user);
    map.addMarker(company);
}


 