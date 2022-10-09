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

function loggIn (name){
    var loggIn = name;
    console.log (name)
    
    if (name) {
        return true; 
    }
    else {
        return "Please pass a boolean value in";
    } 

    
}
    loggIn (""); 

// Inside the function check the type of the value being passed in.

// If it is a boolean value, log the value.

// If it is not a boolean value, log the message “Please pass a boolean value in”.

// Call the function and pass a value in.


// Question 3 Write code that does the following: When the button in the HTML is clicked, change the colour of the h2 element to “blue” and change it to read “Updated subheading”        

/*button.onclick = function changecolour (){}
function changecolour (colour){
    document.button.style.colour = colour; 
    changeTitle ("blue");
}*/
var button = document.querySelector ("button")
button.onclick = function changeTitle(){
    var button = document.querySelector ("h2");
    button.innerHTML = "Updated subheading";

}

    





