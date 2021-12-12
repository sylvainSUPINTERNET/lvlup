import { IItem } from "../api/interfaces/extra/Item";
import { IQuest } from "../api/interfaces/Quest";


/**
 * Tier colors for item / quest ...
 */
export const TIER_COLORS =  {
    "poor": "#9d9d9d",
    "common": "#ffffff",
    "uncommon" : "#1eff00",
    "rare": "#0070dd",
    "epic" : "#a335ee",
    "legendary": "#ff8000"
}
/**
 * Return code color for tier given
 * @param object 
 * @param tier 
 * @returns 
 */
export const getColorForTier = (object:IQuest | IItem): string => {
    return TIER_COLORS[object.tier];
}
