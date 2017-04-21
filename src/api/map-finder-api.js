/**
 * Created by long on 4/21/17.
 */
/**
 *
 */

const Config = require('../../config');
import * as CommonApi from "./common-api";

export function getSearchPlace(postcode, suburb, name, sport) {
    const path = Config.MAP_FINDER_SEARCH_PLACE_PATH;
    const param = {
        postcode: postcode,
        suburb: suburb,
        name: name,
        sport: sport
    };

    return CommonApi.httpGet(path, param);
}

export function getSearchNearByPlace(lat, lon, cat, sport) {
    const path = Config.MAP_FINDER_SEARCH_NEAR_BY_PLACE_PATH;
    const param = {
        lat: lat,
        lon: lon,
        cat: cat,
        sport: sport
    };

    return CommonApi.httpGet(path, param);
}
