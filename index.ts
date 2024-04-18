#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const currency:any={////dummy data is defined in an object.

// //The term "base currency" serves as a fundamental pillar in foreign exchange markets and currency conversion. It represents the currency against which all other currencies are benchmarked or evaluated. Put simply, when you embark on a currency conversion journey, the base currency is the currency you're converting from.

// For instance, if you're converting from USD (United States Dollar) to EUR (Euro), then USD stands as the base currency. Conversely, if your conversion direction shifts from EUR to GBP (British Pound), then EUR takes on the role of the base currency.

// Within the framework of currency pairs, the base currency holds precedence by being listed first. For example, in the pair USD/EUR, USD is designated as the base currency, while EUR assumes the role of the quote currency.

USD: 1  , //United States Dollar => base currency
EUR: 0.8845  ,// Euro
GBP: 0.7623  ,// British Pound Sterling
JPY: 114.59  ,// Japanese Yen
CHF: 0.9198  ,// Swiss Franc
CAD: 1.2593  ,// Canadian Dollar
AUD: 1.3236  ,// Australian Dollar
CNY: 6.3695  ,// Chinese Yuan Renminbi
INR: 75.074  ,// Indian Rupee
BTC: 19100711.24  ,// Bitcoin

SAR: 3.7502  ,// Saudi Arabia-Saudi Riyal
AED: 3.6729  ,// United Arab Emirates-United Arab Emirates Dirham
KWD: 0.3023  ,// Kuwaiti Dinar
QAR: 3.6415  ,// Qatar-Qatari Riyal
OMR: 0.3850  ,// Oman-Omani Rial
BHD: 0.3760  ,// Bahrain-Bahraini Dinar

MYR: 4.1235  ,// Malaysia-Malaysian Ringgit
PKR: 177.1247  ,// Pakistan-Pakistani Rupee
IDR: 14022.50  ,// Indonesia-Indonesian Rupiah
TRY: 13.4910 , //// Turkey-Turkish Lira



};
let answer=await inquirer.prompt([
  { //object-1
  name:"From",
message:chalk.red("Enter Currency Which You Want To Convert..."),
type:"list",
choices: [
  "USD"  ,
  "EUR"  , 
  "GBP"  , 
  "JPY"  , 
  "CHF"  , 
  "CAD"  , 
  "AUD"  , 
  "CNY"  , 
  "INR"  , 
  "BTC"  , 
  "SAR"  , 
  "AED"  , 
  "KWD"  , 
  "QAR"  , 
  "OMR"  , 
  "BHD"  , 
  "MYR"  , 
  "PKR"  , 
  "IDR"  , 
  "TRY"   
]
},
//object 2
{
name:"To",
message:chalk.green("Enter A Desired Currency Which You Want TO Change into...."),
type:"list",
choices:[ "USD"  ,
"EUR"  , 
"GBP"  , 
"JPY"  , 
"CHF"  , 
"CAD"  , 
"AUD"  , 
"CNY"  , 
"INR"  , 
"BTC"  , 
"SAR"  , 
"AED"  , 
"KWD"  , 
"QAR"  , 
"OMR"  , 
"BHD"  , 
"MYR"  , 
"PKR"  , 
"IDR"  , 
"TRY"   ]
},
{
  //object-3
  name:"Amount",
  message:chalk.yellowBright("Enter Your Amount Which You Want To Convert?"),
  type:"number",
}])



let userFromCurrency=answer.From;//accessing an object
let userToCurrency=answer.To;//accessing an object
let fromAmount= currency[answer.From];//exchange rate
let toAmount= currency[answer.To];//exchange rate
let amount=answer.Amount;

//USD as a base currency

let baseAmount=amount/fromAmount;//first convert any currency amount to base currency.
let convertedAmount=baseAmount*toAmount;//then convert into required currency.
console.log(chalk.bgYellow.blackBright("Your converted Amount = ", convertedAmount));
//Author-Huma Mohsin



