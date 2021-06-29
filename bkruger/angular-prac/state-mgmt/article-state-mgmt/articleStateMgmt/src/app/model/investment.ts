// export interface Investment {
//     investmentAmount: number,
//     ProfitBeforeSellAllow: number,
//     riskTakerProfit: number,
// }

export class Investment {
    constructor( 
        public investmentAmount: number,
        public ProfitBeforeSellAllow: number,
        public riskTakerProfit: number)
    {}
}