// Problem Statement:-
// Your app consists a form which contain 1 input tag and 1 select tag
// Note : HTML tags are already in template.
// Form will take
// Task Name
// Priority (select tag)
// On form submit, display this data in form of table (thead is already in place just append to tbody)
// Input tags already in template, just finish script part.
// Each row should have 3 columns (td)
// Task Name
// Priority
// If priority is high, it should have red background, else green background.
// In each row, there should be a Favourite column and on clicking that do nothing, we will implement this tomorrow.
// Make sure you follow all rules of forms.


let myForm=document.querySelector("form");

myForm.addEventListener("submit",function(e){
    e.preventDefault();



    let name=document.getElementById("task").value;
    let priority=document.getElementById("priority").value;
  
    let tbody=document.querySelector("tbody");
    let row=document.createElement("tr");

    let data=[name,priority]
    data.forEach((ele)=>{
        let td=document.createElement("td");
        td.innerText=ele;

        row.appendChild(td)
    })

tbody.appendChild(row)
})