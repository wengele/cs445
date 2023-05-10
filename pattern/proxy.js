class GeoCoder {
    getLatLng(address) {
        if (address === "Fairfield") {
            return "41.006630 Latitude, -91.965050 Longitude";
        } else if (address === "London") {
            return "51.5171° N, 0.1062° W";
        } else {
            return ""
        }
    };
}


class Proxy {
    constructor() {

    }
}