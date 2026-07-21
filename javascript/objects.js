
const students = {

    firstname: "Srikanth",
    lastname: "Reddy",
    course: "Playwright",
    City: "Hyderabad"
};

// console.log(students);

console.log(students.firstname)

students[("course")] = "JavaScript"; //updating the value of course property

console.log(students);

students.mobile = 9390932445;
students.email = "srikanth.reddy@example.com"

console.log("After adding gender, email, and phone:"); //adding new properties to the object
console.log(students);

delete students.mobile  

console.log("After deleting mobile number:");
console.log(students);

students.address = {

street: "",
pincode : 0

}
students.address.street = "Nandini Layout";
students.address.pincode = 560073;

console.log("Street is:");
console.log(students.address.street);

console.log("Pincode is:");
console.log(students.address.pincode);

console.log("Final student object:");
console.log(students);

const courses = {

    course1: "Playwright",
    course2: "JavaScript",
    course3: "Python",
    course4: "Java" 
};

for (let key in courses) {
  console.log("Loop starts here");

  console.log("Key is: " + key);
  console.log("Value is: " + courses[key]);
  console.log(key + " : " + courses[key]);

  console.log("Loop ends here");
}


console.log(students);