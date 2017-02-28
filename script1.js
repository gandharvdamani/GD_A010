var company = new Object();
company.name = "Google";
company.ceo = new Object();
company.ceo.firstName = "Sundar";
console.log(company);
console.log("Company CEO name is: " 
  + company.ceo.firstName);

console.log(company["name"]);
var stockPropName = "stock of company";
company[stockPropName] = 100;

console.log("Stock price is: " + 
  company[stockPropName]);
