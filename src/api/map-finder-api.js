/**
 * Created by long on 4/21/17.
 */
/**
 *
 */

const Config = require('../../config');
import * as CommonApi from "./common-api";
import * as URLUtils from  '../utils/url-utils';

export function getSearchPlace(postcode, suburb, name, sport) {
    let path = Config.MAP_FINDER_SEARCH_PLACE_PATH;

    let temp = "&";
    if(postcode == ''){
        path = path.replace("postcode={postcode}&", "");
        temp = '';
    }

    if(suburb == ''){
        if(temp == ''){
            path = path.replace( "suburb={suburb}&", "");
        }else{
            path = path.replace(temp + "suburb={suburb}", "");
        }

    }

    temp = "&";
    if(name == ''){
        path = path.replace(temp + "name={name}", "");
        path = path.replace( "name={name}", "");
    }


    const param = {
        postcode: postcode,
        suburb: suburb,
        name: name,
        sport: sport,

    };

    return CommonApi.httpGet(path, param);
}

export function getSearchNearByPlace(lat, lon, cat, sport) {
    let path = Config.MAP_FINDER_SEARCH_NEAR_BY_PLACE_PATH;
    let dis = URLUtils.query().dis ?  URLUtils.query().dis : '';
    if(dis == ''){
        path = path.replace( "&dis={dis}", "");
    }

    const param = {
        lat: lat,
        lon: lon,
        cat: cat,
        sport: sport,
        dis: dis,
    };

    return CommonApi.httpGet(path, param);
}
