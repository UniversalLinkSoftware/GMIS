export class Implementation {
    constructor(
        public id: string,
        public  gonShare: number,
         public wuaShare: number,
         public physicalProgress: string,
         public physicalProgressDate: Date,
         public finiancialProgress: string,
         public finiancialProgressDate: Date,
         public wuaDevelopmentOffice: string,
         public wuaRegistrarionDate: Date,
         public trainingName: string,
         public trainingDate: Date,
         public trainingPeriod: number,
         public numberOfParticipants: number,
         ) {}
}
