class Collab {
    constructor(name, firstName, dateBirth, adress, contractType, school, agency, reasonMission, functions, qualifications, salary, contractStartDate, contractEndDate){
        this.name = name;
        this.firstName = firstName;
        this.dateBirth = dateBirth;
        this.adress = adress;
        this.photography ='';
        this.contractType = contractType;
        this.school = school;
        this.agency = agency;
        this.reasonMission = reasonMission;
        this.functions = functions;
        this.qualifications = qualifications;
        this.salary = salary;
        this.contractStartDate = contractStartDate;
        this.contractEndDate = contractEndDate;
    }

    collab(){

    document.querySelector("#name").value = this.name;
    document.querySelector("#firstName").value = this.firstName;
    document.querySelector("#dateBirth").value = this.dateBirth;
    document.querySelector('#adress').value = this.adress;
    
    if (this.contractType === "internship"){
        document.querySelector("#internship").checked = true;
    }
    else if (this.contractType === "interim"){
        document.querySelector("#interim").checked = true;
    }
    else if (this.contractType === "CDD"){
        document.querySelector("#CDD").checked = true;
    }
    else {
        document.querySelector("#CDI").checked = true;
    }

    document.querySelector("#school").value = this.school;
    document.querySelector("#agency").value = this.agency;
    document.querySelector("#reasonMission").value = this.reasonMission;
    document.querySelector("#functions").value = this.functions;
    document.querySelector("#qualifications").value = this.qualifications;
    document.querySelector("#salary").value = this.salary;
    document.querySelector("#contractStartDate").value = this.contractStartDate;
    document.querySelector("#contractEndDate").value = this.contractEndDate;

    index = this;
}
}