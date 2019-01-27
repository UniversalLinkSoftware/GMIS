export class ExistingAgriculture {
    constructor (
        public existingCropName: string,
        public existingPlantingDate: Date,
        public existingPlantingWeek: string,
        public existingCropArea: number,
        public existingHarvestingDate: Date,
        public existingHarvestingWeek: string,
        public existingAverageCropYield: number,
        public existingAvgCropName: string,
        public existingAvgPlantingDate: Date,
        public existingAvgPlantingWeek: string,
        public existingAvgOrganicManure: number,
        public existingAvgPotash: number,
        public existingAvgAnimalLabour: number,
        public existingAvgUrea: number,
        public existingAvgMachineLabour: number ) {}
}

    export class ProposedAgriculture {
        constructor (
        public proposedCropName: string,
        public proposedPlantingDate: Date,
        public proposedPlantingWeek: string,
        public proposedCropArea: number,
        public proposedHarvestingDate: Date,
        public proposedHarvestingWeek: string,
        public proposedAverageCropYield: number,
        public proposedAvgCropName: string,
        public proposedAvgPlantingDate: Date,
        public proposedAvgPlantingWeek: string,
        public proposedAvgOrganicManure: number,
        public proposedAvgPotash: number,
        public proposedAvgAnimalLabour: number,
        public proposedAvgUrea: number,
        public proposedAvgMachineLabour: number,
         ) {}
}
