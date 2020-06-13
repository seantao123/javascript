const baseUrl = 
    //"https://cors-anywhere.herokuapp.com/https://www.metaweather.com/";
    "https://www.metaweather.com/";

export default class WeatherModel {
    static async getTemperature(cityName) {
        let data = await fetch(baseUrl + "api/location/search/?query=" + encodeURIComponent(cityName));
        let locations = await data.json();
        if (locations.length > 0) {
            let data = await fetch(baseUrl + "api/location/" + locations[0].woeid.toString());
            return await data.json(); 
        }
    }
}