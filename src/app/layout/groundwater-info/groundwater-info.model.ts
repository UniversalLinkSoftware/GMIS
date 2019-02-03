export class Groundwater {
    constructor (
        public noOfWells: number,
        // public typeOfWells: string,
        public wellDepth: number,
        public tubeWellSpacing: number,
        public sizeOfTubewells: number,
        public hydrologicalDescription: string,
        public aquiferType: string,
        public aquiferMaterials: string,
        // public openChannelSystem: string,
        public noOfBranchChannel: number,
        // public buriedPipeSystem: string,
        public mainChannelLength: number,
        public outlets: number ) {}
}
