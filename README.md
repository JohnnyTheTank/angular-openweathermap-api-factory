**angular-openweathermap-api-factory** is an angularjs module with a [OpenWeatherMap](http://openweathermap.org/) API promise factory.

[![npm version](https://badge.fury.io/js/angular-openweathermap-api-factory.svg)](https://badge.fury.io/js/angular-openweathermap-api-factory)
[![Bower version](https://badge.fury.io/bo/angular-openweathermap-api-factory.svg)](https://badge.fury.io/bo/angular-openweathermap-api-factory)

Author: Jonathan Hornung ([JohnnyTheTank](https://github.com/JohnnyTheTank))

## Usage

1. Install via either [bower](http://bower.io/), [npm](https://www.npmjs.com/) or downloaded files:
    1. `bower install --save angular-openweathermap-api-factory`
    2. `npm install --save angular-openweathermap-api-factory`
    3. download [angular-openweathermap-api-factory.zip](https://github.com/JohnnyTheTank/angular-openweathermap-api-factory/zipball/master)
2. Add **`jtt_openweathermap`** to your application's module dependencies.
3. Include dependencies in your HTML.
    1. When using bower:
    ```html
    <script src="bower_components/angular-openweathermap-api-factory/dist/angular-openweathermap-api-factory.min.js"></script>
    ```
    2. When using npm:
    ```html
    <script src="node_modules/angular-openweathermap-api-factory/dist/angular-openweathermap-api-factory.min.js"></script>
    ```
    3. when using downloaded files
    ```html
    <script src="angular-openweathermap-api-factory.min.js"></script>
    ```
4. Use the factory `openweathermapFactory`


## factory methods

### current weather

#### current weather from city by name
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

#### current weather from city by id
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

#### current weather from group of cities by id
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

#### current weather from location by coordinates
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

#### current weather from location by zipcode
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

### 5-day-forecast

#### 5-day-forecast from city by name
```js
// docs: http://openweathermap.org/forecast5#name5
openweathermapFactory.cityForecast5SearchByName({
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

#### 5-day-forecast from city by id
```js
// docs: http://openweathermap.org/forecast5#cityid5
openweathermapFactory.getForecast5FromCityById({
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

#### 5-day-forecast from location by coordinates
```js
// docs: http://openweathermap.org/forecast5#geo5
openweathermapFactory.getForecast5FromLocationByCoordinates({
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


## OpenWeatherMap JSON API
* docs: http://openweathermap.org/api

## More angular-api-factories
[bandsintown](https://github.com/JohnnyTheTank/angular-bandsintown-api-factory) - [dailymotion](https://github.com/JohnnyTheTank/angular-dailymotion-api-factory) - [facebook](https://github.com/JohnnyTheTank/angular-facebook-api-factory) - [flickr](https://github.com/JohnnyTheTank/angular-flickr-api-factory) - [footballdata](https://github.com/JohnnyTheTank/angular-footballdata-api-factory) - [github](https://github.com/JohnnyTheTank/angular-github-api-factory) - **openweathermap** - [tumblr](https://github.com/JohnnyTheTank/angular-tumblr-api-factory) - [vimeo](https://github.com/JohnnyTheTank/angular-vimeo-api-factory) - [wikipedia](https://github.com/JohnnyTheTank/angular-wikipedia-api-factory) - [youtube](https://github.com/JohnnyTheTank/angular-youtube-api-factory)

## License

MIT