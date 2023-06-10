export class AffiliateSearch {
    public latitude: Number = null;
    public longitude: Number = null;
    public maxDistanceInKilometers: Number= null;

    constructor(){

    }

    public init(
        latitude,
        longitude,
        maxDistanceInKilometers
    ){
        this.latitude = latitude;
        this.longitude = longitude;
        this.maxDistanceInKilometers = maxDistanceInKilometers;
    }

    public static initWith(
        latitude,
        longitude,
        maxDistanceInKilometers
    ){
        const affiliateSearch = new AffiliateSearch();
        affiliateSearch.latitude = latitude;
        affiliateSearch.longitude = longitude;
        affiliateSearch.maxDistanceInKilometers = maxDistanceInKilometers;
        return affiliateSearch;
    }

    public static initWithDistanceInKilometers(maxDistanceInKilometers){
        const affiliateSearch = new AffiliateSearch();
        affiliateSearch.maxDistanceInKilometers = maxDistanceInKilometers;
        return affiliateSearch;
    }
}