export interface Team {
    _id: string;
    name: string;
    played: number;
    won: number;
    drawn: number;
    lost: number;
    goalDifference: number;
    points: number;
}