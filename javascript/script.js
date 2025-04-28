console.log("Hello world");

// This is a comment

/*
multiline comment
*/

//variables

//let name * value

let username = "Jane Doe"
console.log(username); //Jane Doe

/*
 -Cannot be named after a key world if,else
 -Be meaningfi]ul
 -cannot start with a number
 -canot contain space or hyphen (camelcase)
 -are case sentitive
 */

 //CONST
 const user = "John";

 // Data types
 // .primitive
 //  .non-primitive (References)


 /*
 PRIMITIVE DATA TYPES
 */

 let user1= "Max"; //string literal
 let age = 18; // Number literal
 let isApproved = true; //Boolean
 let password = null; //empty value. null
 let useremail = undefined; //undefined

 /*
   non-primitive
    -objective
    -arrays

   */
  
    let user2 = {
        name:'Jane',
        role:'SE',
        country:'Kenya',
    }
    let user3 ={
        name:'Alice',
        age:18,
        city:'Nairobi',
        
    }
    console.log(user2.role)
    console.log(user3.city)
    console.log(user2.name)

    //Arrays - like a special list

    let students = ['Jane','John','Alice']

    student[3] = "Joe"
    console.log(students)

 //strings
 //concatanation  -joining 2 strings

 let fName ='Jane';
 let lName ='Doe';
 let fullName = fname +''+ lName;
 console.log(fullName);
 //length
 let js = 'javascript';
 let py = 'python'
 console.log(js.length)
 console.log(py.length)
//indexing -start at 0
console.log(js[4])
 
//uppercase - .toUppercase
  console.log(js.toUpperCase())

  //lowercase - tolowercase()
  console.log(js.toLowerCase())
  //split() -method to split a string at a space
  let string = 'Myname is Jane';
  console.log(string.split(''))//split at

  let contries = 'kenya,Tanzania,Uganda';
  console.log(contries.split(','))

  //changing Data type (casting)

 // string to number

//Number(), parseint

let num ='19';
let numInt= parseint(num)




