/**
 * Created by long on 4/21/17.
 */
/**
 *
 */
import * as MapFinderApi from '../api/map-finder-api';

export function getSearchPlace(postcode, suburb, name, sport ){
    return MapFinderApi.getSearchPlace(postcode, suburb, name, sport );
}

export function getSearchNearByPlace(lat, lon, cat, sport ){
    return MapFinderApi.getSearchNearByPlace(lat, lon, cat, sport );
}

