import { ApiConfiguration } from "../configuration";
import { WsMedia } from "../interfaces/media/WsMedia";
import { IResponse } from "../interfaces/response/IResponse";

export const getMedias = async () => {

    try {
        const res = await fetch(`${ApiConfiguration.URL}/stream`);
        const data = await res.json();
        let responseSuccess: IResponse = {"message": data};
        return responseSuccess;
    } catch ( e ) {
        let responseError: IResponse = {"message": e};
        return responseError;
    }
    
}

export const getEmotions = async (medias:WsMedia[]) => {
    try {
        const res = await fetch(`${ApiConfiguration.URL_EMOTIONS_API}`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify(medias)
        });
        const data = await res.json();
        let responseSuccess: IResponse = {"message": data};
        return responseSuccess;
    } catch ( e ) {
        let responseError: IResponse = {"message": e};
        return responseError;
    }
}