const appUser = new Object() // Singleton Object

appUser.id = "123abc"
appUser.name = "suman"
appUser.isLoggedIn = false

//console.log(appUser);

// Non SingleTon user
const appUsers = {
    Email : "suman@gmail.com" ,
    fullname: {
        userfullname: {
            firstname: "Suman",
            lastname: "Chakraborty"
        }
    }
} 

// console.log(appUsers);
// console.log(appUsers.fullname);
// console.log(appUsers.fullname.userfullname.firstname);
// console.log(appUsers.fullname.userfullname.lastname);



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign ({}, obj1, obj2) // {}-> this is useing for assgin a empty obj where we store the new value

const obj4 = {...obj1, ...obj2}  // another way to do this marge fo two objects

console.log(obj3);
console.log(obj4);

// object in the array 
const user = [
    {
        id: 1,
        Email: "s@gmail.com"
    },
    {
        id: 2,
        Email: "b@gmail.com"
    },
    {
        id: 3,
        Email: "a@gmail.com"
    }
]

console.log(user[1].Email)

console.log(Object.keys(appUser));
console.log(Object.values(appUser));

// object always store the values and key in array, we can use every array function in object 

console.log(Object.keys(appUser)[1] ,"=", Object.values(appUser)[1]); // in this way we can acess the data from any object 

console.log(Object.entries(appUser)); // for individual 

console.log(appUser.hasOwnProperty('isLoggedIn'));




const course = {
    courseName:  "Java Script Basics",
    price: 999,
    courseInstructor: "Suman"
}

//deStructureing
const {courseInstructor: Cname} = course
console.log(Cname);





