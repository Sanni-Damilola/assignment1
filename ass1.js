let company_details = [];

1;
company_details.push({
  company_name: "Finance",
  income_per_month: 89900,
  start: 1820,
});

2;
company_details.push({
    company_name: "food",
    income_per_month: 20001,
    start: 2000,
});


// 3
company_details.push({
  company_name: "shop-rite",
  income_per_month: 50333,
  start: 2004,
});

// 4
company_details.push({
  company_name: "cham Hotel",
  income_per_month: 10333,
  start: 1998,
});

// 5
  company_details.push({
    company_name: "Retail",
    income_per_month: 23440,
    start: 1999,
  });

// 6
company_details.push({
  company_name: "Auto",
  income_per_month: 35000,
  start: 1888,
});

// 7
company_details.push({
  company_name: "Tech",
  income_per_month: 18930,
  start: 1890,
});

// 8
company_details.push({
  company_name: "Codelab",
  income_per_month: 12332,
  start: 2014,
});

// 9
company_details.push({
  company_name: "cloth-suit",
  income_per_month: 34440,
  start: 2014,
});

// 10
company_details.push({
  company_name: "water",
  income_per_month: 34000,
  start: 1838,
});







// Age
console.log("compaines age".toUpperCase());
let Age = company_details.forEach(function (company) {
  console.log(`Name: ${company.company_name}; Age: ${2022 - company.start};`);
});

// income
console.log("income".toUpperCase());
company_details.forEach(function (company) {
  console.log(
    `Name: ${company.company_name}; Income: $${company.income_per_month};`
  );
});

let all_company_income = company_details.map((info) => info.income_per_month);
let company_name = company_details.map((a) => a.company_name);
// console.log(all_company_income);

console.log("total income of all companies".toUpperCase());
let total_income_of_all_company = all_company_income.reduce((a, b) => a + b);
console.log("total income of all companies:", total_income_of_all_company);


// // income from start
let age = company_details.map((a) => a.start);
// console.log(age);



// all_income_from_start
console.log("total income from start till date".toUpperCase());
company_details.forEach(function (company) {
    function cal(a, b) {
      let c = 2022;
      let ca = c - a;
      return ca * b;
    }
    console.log(
      `Name: ${company.company_name}; Total income from start till date: $${cal(
        company.start,
        company.income_per_month
      )}`
    );
});



// sort
console.log("SORTING");
const sortinfo = (x) => {
  return (a, b) => {
    if (a[x] < b[x]) {
      return a[x];
    } else if (a[x] > b[x]) {
      return -1;
    }
    return 0;
  };
};


console.log("company that exited first".toUpperCase());
console.log("company that exited first",company_details.sort(sortinfo("start")));

console.log("company that with the highest income".toUpperCase());
console.log("company that with the highest income", company_details.sort(sortinfo("income_per_month")));

console.log("best company in terms of income".toUpperCase());
console.log(
  "best company in terms of income",
  company_details.sort(sortinfo("income_per_month"))[0]);



