// Question 1  

var pets = [
  {
    type: "cat",
    age: 5.5,
  },
  {
    type: "dog",
    age: 3.8,
  },
  {
    type: "parrot",
    age: 4.0,
  },
];

for (var i=0; i <pets.length; i++){
    var age = pets[i].age; 
    var type = pets[i]; 
    if (age >=4){
        console.log (type);
    }
}

// Question 2 
// Create a function with one argument. done

function loggIn (word){
    console.log (word)
}
 loggIn("name");

// Inside the function check the type of the value being passed in.

// If it is a boolean value, log the value.

// If it is not a boolean value, log the message “Please pass a boolean value in”.

// Call the function and pass a value in.


// Question 3       

var heading = document.querySelector ("h2"); 
var button = document.querySelector ("button");


function changeheading (){
    heading.innerHTML = "Updated subheading";
    heading.style.color = "blue";
  }
   button.onclick = changeheading;
  
    





