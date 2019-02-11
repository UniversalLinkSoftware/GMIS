export class Location {
    constructor(public  ecologicalRegion: string,
        public nearestRoad: string,
        public distance: Date,
        public nearestAirport: string,
        public airportDistance: number,
        public nearestMarket: string,
        public marketDistance: number,
        public localRiverBasin: string,
        public majorRiverBasin: string,
        public riverSource: string,
        public province: number,
        public distict: string,
        public metroCity: string,
        public subMetroCity: string,
        public municipality: string,
        public ruralMunicipality: number,
         ) {}
}
