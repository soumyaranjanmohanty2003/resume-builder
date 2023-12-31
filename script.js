function addNewWEField() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter Here");
    let weOb=document.getElementById("we"); 
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter Here");
    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}


function addNewPRField()
{
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("prField");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter Here");
    let prOb=document.getElementById("pr");
    let prAddButtonOb=document.getElementById("prAddButton");

    prOb.insertBefore(newNode , prAddButtonOb);
}
// generating cv

function generateCV()
{
    let NameField=document.getElementById("NameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML = NameField;
    document.getElementById("nameT2").innerHTML=NameField;
    // for contact details
     document.getElementById("contactT").innerHTML= document.getElementById("ContactField").value;
     document.getElementById("addressT").innerHTML=document.getElementById("AddressField").value;
     document.getElementById("objT").innerHTML=document.getElementById("objField").value
     document.getElementById("linkT").innerHTML=document.getElementById("LiField").value;
     document.getElementById("hackT").innerHTML=document.getElementById("HkField").value;
     document.getElementById("leetT").innerHTML=document.getElementById("LtField").value;
    
     //work experience portal----

    let wes=document.getElementsByClassName("weField");

    let str=""

    for(let e of wes)
    {
       str=str+ `<li> ${e.value} </li>` ;
    }
    document.getElementById("weT").innerHTML=str;

    // academic qualification
     
    let aqs=document.getElementsByClassName("aqField");

    let str1=""

    for(let e of aqs)
    {
       str1+= `<li> ${e.value} </li>` ;
    }
    document.getElementById("aqT").innerHTML=str1;

    // projects and internships

    let ins=document.getElementsByClassName("prField");

    let str2=""

    for(let e of ins)
    {
       str2=str2+ `<li> ${e.value} </li>` ;
    }
    document.getElementById("inT").innerHTML=str2;
}