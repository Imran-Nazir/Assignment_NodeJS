let axios = require('axios');
let URL = "https://restcountries.com/v3.1/all/ah";
axios.get(URL).then(function(res){
    let CountryList = res.data;
    let statusCode = res.status;
    console.log(CountryList);
    console.log(statusCode);
}).catch(function (error){
    console.log(error);
})