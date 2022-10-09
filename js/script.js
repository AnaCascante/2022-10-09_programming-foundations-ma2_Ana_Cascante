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

function loggIn (number){
  if (number){
    console.log (number)
  } else { 
    console.log ("Please pass a boolean value in")
  }
}

loggIn (0)

// Question 3       

var heading = document.querySelector ("h2"); 
var button = document.querySelector ("button");


function changeheading (){
    heading.innerHTML = "Updated subheading";
    heading.style.color = "blue";
  }
   button.onclick = changeheading;
  
    





