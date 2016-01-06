**angular-openweathermap-api-factory** is an angularjs module with a [OpenWeatherMap](http://openweathermap.org/) API promise factory.

Author: Jonathan Hornung ([JohnnyTheTank](https://github.com/JohnnyTheTank))

## Usage

1. Install via [bower](http://bower.io/) :
    1. `bower install --save angular-openweathermap-api-factory`
2. Add `jtt_openweathermap` to your application's module dependencies.
3. Include dependencies in your HTML.
    1. When using bower:

    ```html
    <script src="bower_components/angular/angular.js"></script>
    <script src="bower_components/angular-openweathermap-api-factory/src/angular-openweathermap-api-factory.js"></script>
    ```

4. Use the factory `openweathermapFactory`.


### factory methods

#### weather from city by name
```js
// docs: http://openweathermap.org/current#name
openweathermapFactory.getWeatherFromCitySearchByName({
    q:"<CITY_NAME>,<COUNTRY_CODE>", //city name and country code divided by comma, use ISO 3166 country codes eg "London,uk"
    lang:"<LANGUAGE>", // (optional) http://openweathermap.org/current#multi
    units:"<UNITS>", // (optinal) http://openweathermap.org/current#data
    type:"<TYPE>", // (optional) 'like' = close result, 'accurate' = accurate result
    appid:"<APP_ID>"
}).then(function(_data){
    //on success
}).catch(function (_data) {
    //on error
});
```

#### weather from city by id
```js
// docs: http://openweathermap.org/current#cityid
openweathermapFactory.getWeatherFromCityById({
    id:"<CITY_ID>", //List of city ID can be downloaded here http://bulk.openweathermap.org/sample/city.list.json.gz
    lang:"<LANGUAGE>", // (optional) http://openweathermap.org/current#multi
    units:"<UNITS>", // (optinal) http://openweathermap.org/current#data
    appid:"<APP_ID>"
}).then(function(_data){
    //on success
}).catch(function (_data) {
    //on error
});
```

#### weather from group of cities by id
```js
// docs: http://openweathermap.org/current#severalid
openweathermapFactory.getWeatherFromGroupOfCitiesById({
    id:"<CITY_ID>,<CITY_ID>,<CITY_ID>,...", //List of city ID can be downloaded here http://bulk.openweathermap.org/sample/city.list.json.gz
    lang:"<LANGUAGE>", // (optional) http://openweathermap.org/current#multi
    units:"<UNITS>", // (optinal) http://openweathermap.org/current#data
    appid:"<APP_ID>"
}).then(function(_data){
    //on success
}).catch(function (_data) {
    //on error
});
```

#### weather from location by coordinates
```js
// docs: http://openweathermap.org/current#geo
openweathermapFactory.getWeatherFromLocationByCoordinates({
    lat:"<LAT>",
    lon:"<LONG>",
    lang:"<LANGUAGE>", // (optional) http://openweathermap.org/current#multi
    units:"<UNITS>", // (optinal) http://openweathermap.org/current#data
    appid:"<APP_ID>"
}).then(function(_data){
    //on success
}).catch(function (_data) {
    //on error
});
```

#### weather from location by zipcode
```js
// docs: http://openweathermap.org/current#zip
openweathermapFactory.getWeatherFromLocationByCoordinates({
    zip:"<ZIPCODE>,<COUNTRY_CODE>", //use ISO 3166 country codes
    lang:"<LANGUAGE>", // http://openweathermap.org/current#multi
    units:"<UNITS>", // (optinal) http://openweathermap.org/current#data
    appid:"<APP_ID>"
}).then(function(_data){
    //on success
}).catch(function (_data) {
    //on error
});
```

## OpenWeatherMap JSON API

* docs: http://openweathermap.org/api

## License

MIT