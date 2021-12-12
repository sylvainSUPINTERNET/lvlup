import { ITier } from "../common/Tier";

export interface IItem extends ITier {
    id: string;
    name: string;
    media:string;
}