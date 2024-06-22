// Student Management System
// This project is a simple console based Student Management System. In this project you will be learning how to add new students, how to generate a 5 digit unique studentID for each student, how to enroll students in the given courses. Also, you will be implementing the following operations enroll, view balance, pay tuition fees, show status, etc. The status will show all the details of the student including name, id, courses enrolled and balance.This is one of the best projects to implement the Object Oriented Programming concepts.
import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter student name:",
        validate: function (value) {
            if (value.trim() != "") {
                return true;
            }
            return "Please enter a non-empty value";
        }
    },
    {
        name: "courses",
        type: "list",
        message: "Select the course to enrolled",
        choices: ["HTML", "CSS", "Java", "PHP", "Python", "Typescript"]
    }
]);
const tuitionFee = {
    "HTML": 2000,
    "CSS": 2500,
    "Java": 3000,
    "PHP": 4000,
    "Python": 5000,
    "Typescript": 5500,
};
console.log(`\n Tuition fees: ${tuitionFee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Bank transfer", "Jazzcash", "Easypaisa"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer money:",
        validate: function (value) {
            if (value.trim() != "") {
                return true;
            }
            ;
            return "Please enter a non-empty value";
        }
    }
]);
console.log(`\n You select payment method ${paymentType.payment}`);
const tuitionFees = tuitionFee[answer.courses];
//parseFloat is a function that convert string into number
const paymentAmount = parseFloat(paymentType.amount);
if (tuitionFees === paymentAmount) {
    console.log(`Congratulations, you have successfully enrolled in ${answer.courses}.\n`);
    //
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["view status", "Exit"]
        }
    ]);
    if (ans.select === "view status") {
        console.log("\n *******status*******\n");
        console.log(`Student Name: ${answer.students}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`Course: ${answer.courses}`);
        console.log(`Tuition fees paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount} `);
    }
    else {
        console.log("\n Exiting Student Management System");
    }
}
else {
    console.log("Invalid amount due to course\n");
}
