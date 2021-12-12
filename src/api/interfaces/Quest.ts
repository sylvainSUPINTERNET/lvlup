import { ITier } from "./common/Tier";
import { IItem } from "./extra/Item";

export interface IQuest extends ITier {
    id: string;
    title: string;
    reward?: IItem; 
}


/**
 * title quest
 * tier
 * reward
 * 
 */