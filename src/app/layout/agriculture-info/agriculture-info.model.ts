export class ExistingAgriculture {
    constructor (
        public existingCropName: string,
        public existingPlantingDate: string,
        public existingPlantingWeek: string,
        public existingCropArea: number,
        public existingHarvestingDate: string,
        public existingHarvestingWeek: string,
        public existingAverageCropYield: number,
        public existingAvgSeed: number,
        public existingAvgDAP: number,
        public existingAvgHumanLabour: number,
        public existingAvgOrganicManure: number,
        public existingAvgPotash: number,
        public existingAvgAnimalLabour: number,
        public existingAvgUrea: number,
        public existingAvgMachineLabour: number,
        ) {}
}
export class ProposedAgriculture {
    constructor (
        public proposedCropName: string,
        public proposedPlantingDate: string,
        public proposedPlantingWeek: string,
        public proposedCropArea: number,
        public proposedHarvestingDate: string,
        public proposedHarvestingWeek: string,
        public proposedAverageCropYield: number,
        public proposedAvgSeed: string,
        public proposedAvgDap: number,
        public proposedAvgHumanLabour: number,
        public proposedAvgOrganicManure: number,
        public proposedAvgPotash: number,
        public proposedAvgAnimalLabour: number,
        public proposedAvgUrea: number,
        public proposedAvgMachineLabour: number,
        ) {}
}
export class Office {
    constructor (
        public NeareastAgricultureExtensionOffice: string,
        public extensionOfficeDistance: number,
        public neareastAgrovetOffice: string,
        public agrovetOfficeDistance: number,
         ) {}
}
