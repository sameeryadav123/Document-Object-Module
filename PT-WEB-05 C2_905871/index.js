
// Problem Statement:-
// Your app consists a form which contain 5 input tags and 1 select tag
// Note : HTML tags are already in template.
// Form will take
// Name of the Doctor
// Doctor ID
// Specialization (Dermatologist, ENT, Dentist, Gynecologist,COVID) (select tag)
// Experience in years
// Email address
// Mobile Number
// On form submit, display this data in form of table (thead is already in place just append to tbody)
// Input tags already in template, just finish script part.
// Each row should have 8 columns (td)
// Name
// Doctor ID
// Specialization
// Experience in years
// Email address
// Mobile Number
// Role
// Delete
// Role should be given dynamically based on input (make sure role is written in same format, it is case sensitive)
// Senior, if experience > 5 years
// Junior, if experience is between 2 and 5 years
// Trainee, if experience is less than or equal to 1 year
// In each row, there should be a delete column and on clicking that delete, that particular row should be deleted.
// Make sure you follow all rules of forms.
// Your Output should look like

let myForm=document.querySelector("form");

myForm.addEventListener("submit",function(e){
    e.preventDefault()
    
    let name=document.getElementById("name").value;
    let doctorID=document.getElementById("docID").value;
    let department=document.getElementById("dept").value;
    let experience=document.getElementById("exp").value;
    let email=document.getElementById("email").value;
    let mobile=document.getElementById("mbl").value;

    let role;
    if(experience > 5){
        role="Senior";
    }
    else if(experience >= 2 && experience <= 5){
        role="Junior";
    }
    else{
        role="Trainee";
    }



let tbody=document.querySelector("tbody");

    
let row=document.createElement("tr");

let data=[name,doctorID,department,experience,email,mobile,role];

   data.forEach((ele) =>{

   let td=document.createElement("td")
    td.innerText=ele;

  
    row.appendChild(td)


   })

//    creating delete button
let deleteTd=document.createElement("td");
let deleteBtn=document.createElement("button");

// style for button
deleteBtn.style.backgroundColor="red"
deleteBtn.style.color="black";
deleteBtn.style.padding="5px"
deleteBtn.style.borderRadius='10px'

deleteBtn.innerText="Delete";

deleteBtn.addEventListener("click",function(){
    tbody.removeChild(row)
})

deleteTd.appendChild(deleteBtn);
row.appendChild(deleteTd)

   tbody.appendChild(row);

})



