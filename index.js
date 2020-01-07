//https://codeburst.io/build-a-simple-weather-app-with-node-js-in-just-16-lines-of-code-32261690901d

//https://codeburst.io/build-a-weather-website-in-30-minutes-with-node-js-express-openweather-a317f904897b

const request = require('request');
const argv = require('yargs').argv;

let apiKey = '3b836641b4f00cbc4ad64f986d526481';
let city = argv.c || 'portland'; //'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
// units=metric : 섭씨 , units=imperial :회씨

request(url, function(err, response, body){
    if(err){
        console.log('error :', error);
    }else{
        //console.log('body :',body);
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} degrees in ${weather.name} !`;
        console.log(message);
    }
});