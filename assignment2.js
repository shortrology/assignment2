//objects => {} => { firstnameiskey: bilalisvalue}  pair 
//example 1 {[]}
var user = {
    firstName: "bilal",
    lastName: "anwar",
    age: "25",
    hobbies: ["criket", "football", "gaming"]
};
console.log(user);
//example 2 {[{}]}     /const is fix value 
var customer = {
    name: "bilal anwar",
    contact: 9245667888,
    item: ["bags", "shoes", "dresses", "makeup",],
    address: {
        country: "pakistan",
        city: "karachi",
        area: "aiwan-e-sadar",
    }
};
console.log(customer.name);
//example 3 {{}}
var seller = {
    name: "umer",
    emailaddress: "umer anwar gamil.com ",
    itemNo: 1234,
    password: true,
    parcel: null,
    address: {
        country: "pakistan",
        city: "karachi",
    },
};
console.log(seller.address.country);
// arrrays => [] =>      example 4 [{}]
var taecherName = [
    " bial answer", "idName",
    {
        workingDays: 30,
        overTime: "2 hour",
        offDays: 3,
        totalSalary: 15000,
        payable: 14000,
    }
];
console.log(taecherName);
