let myForm=document.querySelector("form");

myForm.addEventListener("submit",function(e){
    // here using prevent default because we just printing console.log('submit) that time our data atomatically refreshed 
    // from the 
    e.preventDefault();

    let name=document.getElementById("name").value;
    let employeeID=document.getElementById("employeeID").value;
    let department=document.getElementById("department").value;
    let experience=document.getElementById("exp").value;
    let email=document.getElementById("email").value;
    let mobile=document.getElementById("mbl").value;
    // console.log(name +" "+ department+" " + employeeID+ " " +experience+ " " + email+ " "+ mobile)

    let role;
    if(experience > 5){
        role="Senior";
    }else if(experience >=2 && experience <=5){
        role="Junior";
    }
    else{
        role="Fresher"
    }

    // capturing tdody
    let tbody=document.querySelector("tbody");
    // creating table rows for inseting data

    let row=document.createElement("tr")

    // creating array because want to attration on a array with help of loop

    let data=[name,employeeID,department,experience,email,mobile,role];

    data.forEach((ele) => {
        
        // creating td 
        let td=document.createElement("td")
        td.innerText=ele;
        row.appendChild(td)
    })

    // delete function 
    let deleteTd=document.createElement("td");
    let deleteBtn=document.createElement("button");
    deleteBtn.innerText="Delete";


    deleteBtn.addEventListener("click",function(){
          tbody.removeChild(row)
    })

    deleteTd.appendChild(deleteBtn);
    row.appendChild(deleteTd)

    

    tbody.appendChild(row)
})



function  yes (){
    console.log("ookk")
}
yes();