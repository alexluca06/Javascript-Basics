/*
*  Object creation: using new Object(); 
*/

var company = new Object();

company.name = "Facebook"; //this property will be created automatic by JS engine
// Both are the same
console.log(company.name);
console.log(company["name"]);

company.ceo = new Object();
// Properties creating by JS engine: firstName and favColor
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";

console.log(company);

var stockPropName = "stock of company";
company[stockPropName] = 110;
console.log("Stock price is: " + company[stockPropName]);

/*
*  Object creation: using Literal Syntax(better way); 
*/

var facebook = {
    name: "Facebook",
    ceo: {
        firstName: "Mark Zucky",
        favColor: "blue"
    },
    $stock: 110,
    "stock of company": 100 
};

console.log(facebook);


