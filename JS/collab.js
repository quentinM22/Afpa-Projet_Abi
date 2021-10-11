const Collabs = [];


let form = document.querySelector("form");

form.addEventListener("submit", (e)=>{
    let school = "";
    let agency = "";
    let reasonMission = "";

    if (form.contractType.value === "internShip"){
        school = form.school.value;
    }
    else if (form.contractType.value === "interim"){
        agency = form.agency.value;
        reasonMission = form.reasonMission.value;
    }
    else if (form.contractType.value === "CDD"){
        reasonMission = form.reasonMission.value;
    }

    let name = form.name.value;
    let firstName = form.firstName.value;
    let dateBirth = form.dateBirth.value;
    let adress = form.adress.value;
    let photography = form.photography.value;
    let contractType = form.contractType.value;
    let functions = form.functions.value;
    let qualifications = form.qualifications.value;
    let salary = form.salary.value;
    let contractStartDate = form.contractStartDate.value;
    let contractEndDate = form.contractEndDate.value;

    let newCollabs = new Collab(name, firstName, dateBirth, adress, contractType, school, agency ,reasonMission , functions , qualifications, salary, contractStartDate, contractEndDate);
    Collabs.push(newCollabs);
    e.preventDefault();
    console.log(Collabs);


})


