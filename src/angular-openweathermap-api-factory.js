"use strict";

/**
 @author Jonathan Hornung (https://openweathermap.com/JohnnyTheTank)
 @url https://openweathermap.com/JohnnyTheTank/angular-openweathermap-api-factory
 @licence MIT
 */

angular.module("jtt_openweathermap", [])
    .factory('openweathermapFactory', ['$http', 'openweathermapSearchDataService', function ($http, openweathermapSearchDataService) {

        var openweathermapFactory = {};

        openweathermapFactory.getWeatherFromCitySearchByName = function (_params) {
            var searchData = openweathermapSearchDataService.getNew("citySearchByName", _params);
            return $http({
                method: 'GET',
                url: searchData.url,
                params: searchData.object,
            });
        };

        openweathermapFactory.getWeatherFromCityById = function (_params) {
            var searchData = openweathermapSearchDataService.getNew("cityById", _params);
            return $http({
                method: 'GET',
                url: searchData.url,
                params: searchData.object,
            });
        };

        openweathermapFactory.getWeatherFromGroupOfCitiesById = function (_params) {
            var searchData = openweathermapSearchDataService.getNew("citiesById", _params);
            return $http({
                method: 'GET',
                url: searchData.url,
                params: searchData.object,
            });
        };

        openweathermapFactory.getWeatherFromLocationByCoordinates = function (_params) {
            var searchData = openweathermapSearchDataService.getNew("locationByCoordinates", _params);
            return $http({
                method: 'GET',
                url: searchData.url,
                params: searchData.object,
            });
        };

        openweathermapFactory.getWeatherFromLocationByZipcode = function (_params) {
            var searchData = openweathermapSearchDataService.getNew("locationByZipcode", _params);
            return $http({
                method: 'GET',
                url: searchData.url,
                params: searchData.object,
            });
        };

        return openweathermapFactory;
    }])
    .service('openweathermapSearchDataService', function () {
        this.getApiBaseUrl = function (_params) {
            return "http://api.openweathermap.org/data/2.5/";
        };

        this.fillDataInObjectByList = function (_object, _params, _list) {
            angular.forEach(_list, function (value, key) {
                if (typeof _params[value] !== "undefined") {
                    _object.object[value] = _params[value];
                }
            });
            return _object;
        };

        this.getNew = function (_type, _params) {

            var openweathermapSearchData = {
                object: {
                    appid: _params.appid,
                },
                url: "",
            };

            switch (_type) {
                case "citySearchByName":
                    openweathermapSearchData = this.fillDataInObjectByList(openweathermapSearchData, _params, [
                        'q', 'lang', 'type', "units",
                    ]);
                    openweathermapSearchData.url = this.getApiBaseUrl() + "weather";
                    break;

                case "cityById":
                    openweathermapSearchData = this.fillDataInObjectByList(openweathermapSearchData, _params, [
                        'id', 'lang', "units",
                    ]);
                    openweathermapSearchData.url = this.getApiBaseUrl() + "weather";
                    break;

                case "citiesById":
                    openweathermapSearchData = this.fillDataInObjectByList(openweathermapSearchData, _params, [
                        'id', 'lang', "units",
                    ]);
                    openweathermapSearchData.url = this.getApiBaseUrl() + "group";
                    break;

                case "locationByCoordinates":
                    openweathermapSearchData = this.fillDataInObjectByList(openweathermapSearchData, _params, [
                        'lat', 'lon', 'lang', "units",
                    ]);
                    openweathermapSearchData.url = this.getApiBaseUrl() + "weather";
                    break;

                case "locationByZipcode":
                    openweathermapSearchData = this.fillDataInObjectByList(openweathermapSearchData, _params, [
                        'zip', 'lang', "units",
                    ]);
                    openweathermapSearchData.url = this.getApiBaseUrl() + "weather";
                    break;
            }
            return openweathermapSearchData;
        };
    });