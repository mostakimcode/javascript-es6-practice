/*
  Problem 2: Safe Nested Access
  Safely access deeply nested optional data using ?. and ?? without
  throwing errors.

  Example: user?.address?.city ?? "City not found" when address is undefined
  [user1:{name: "habla", age: 29, address:{houseNo: 7, roadNo: 6}},
   user2:{name: "utsho", age: 25, address:{houseNo: 10}}]
*/


let user1 ={
  name: "habla",
  age: 29,
  address:{
    city: "ctg",
    houseNo: 7,
    roadNo: 6
      }
    }
let user2 ={
  name: "utsho",
  age: 25,
  roll: 1234,
  address:{
    houseNo: 10
  }
}

const getCity =(user) =>{
  return user?.address?.city === undefined ? `address/city is not defined`: user.address.city;
}

console.log(getCity(user2))