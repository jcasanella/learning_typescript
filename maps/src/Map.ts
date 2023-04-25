export interface Mappable {
    location: {
        lat: number,
        lng: number
    };

    markerContent(): string;
    color: string;
};

export class Map {
    private googleMap: google.maps.Map;

    constructor(el: HTMLElement) {
        this.googleMap = new google.maps.Map(el, 
            { 
                backgroundColor: 'blue', 
                zoom: 1, 
                center:  { 
                    lat: 0, 
                    lng: 0
                }  
            }
        );
    }

    addMarker(loc: Mappable) {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: loc.location.lat,
                lng: loc.location.lng
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({ content: loc.markerContent() });
            infoWindow.open(this.googleMap, marker);
        });
    }
};
