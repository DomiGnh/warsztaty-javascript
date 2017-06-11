'use strict';

//var text = {
//    "pracownicy":[
//        {"firstName": "Krystian", "lastName": "Dziopa"},
//        {"firstName": "Anna", "lastName": "Szapiel"},
//        {"firstName": "Piotr", "lastName": "Żmuda"}
//    ]
//}; 
//
//console.log(text);


var jsonpracownicy= {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"},
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}; 

console.log(jsonpracownicy);

jsonpracownicy.pracownicy.forEach(function(el, i){  console.log("imie i nazwisko:"  + el.firstName, el.lastName, i );
                                  
  })






















    