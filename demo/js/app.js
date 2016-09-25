var app = angular.module("app", ['jtt_openweathermap']);
app.controller('controller', ['$scope', 'openweathermapFactory', function($scope, openweathermapFactory) {

    var _appid = "<YOUR_OPENWEATHERMAP_APP_ID";

    openweathermapFactory.getWeatherFromCitySearchByName({
        q:"munich",
        appid:_appid
    }).then(function(_data){
        console.info("weather from city by name", _data);
    });

    openweathermapFactory.getWeatherFromCityById({
        id:"3220838",
        appid:_appid
    }).then(function(_data){
        console.info("weather from city by id", _data);
    });

    openweathermapFactory.getWeatherFromGroupOfCitiesById({
        id:"3220838,524901",
        appid:_appid
    }).then(function(_data){
        console.info("weather from group of cities by id", _data);
    });

    openweathermapFactory.getWeatherFromLocationByCoordinates({
        lat:"48.1",
        lon:"11.63",
        appid:_appid
    }).then(function(_data){
        console.info("weather from location by coordinates", _data);
    });

    openweathermapFactory.getWeatherFromLocationByZipcode({
        zip:"81539,de",
        appid:_appid
    }).then(function(_data){
        console.info("weather from location by zipcode", _data);
    });

    openweathermapFactory.getForecast5FromCitySearchByName({
        q:"munich",
        appid:_appid
    }).then(function(_data){
        console.info("5 day forecast from city by name", _data);
    });

    openweathermapFactory.getForecast5FromCityById({
        id:"3220838",
        appid:_appid
    }).then(function(_data){
        console.info("5 day forecast from city by id", _data);
    });

    openweathermapFactory.getForecast5FromLocationByCoordinates({
        lat:"48.1",
        lon:"11.63",
        appid:_appid
    }).then(function(_data){
        console.info("5 day forecast from location by coordinates", _data);
    });

}]);
