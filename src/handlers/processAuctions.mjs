import createError from "http-errors";
import {getEndedAuctions} from "../lib/getEndedAuctions.mjs";
import {closeAuction} from "../lib/closeAuction.mjs";

async function processAuctions() {
    try {
        const auctionsToClose = await getEndedAuctions();
        const closePromises = auctionsToClose.map(auction => closeAuction(auction));
        await Promise.any(closePromises);

        return { closed: closePromises.length };
    } catch ( error ) {
        console.error(error);
        throw new createError.InternalServerError(error);
    }
}

export const handler = processAuctions;