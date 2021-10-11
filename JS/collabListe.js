const Collabs = [];
let index = [];
let form = document.querySelector("form");

Collabs.push(new Collab('Dupont', 'Eric', '1978-11-12', 'avenue de la Gare' , 'CDI', '', '', '', 'studyLeader' , 'headOfDepartment', '3540€', '2005-08-25', ''))
Collabs.push(new Collab('Moreau', 'Martin', '1982-04-12', 'rue Blanche', 'CDD', '', '', 'Aide projet 224', 'scrumMaster', 'devBdd', '1890€', '2020-10-01', '2021-04-01'))
Collabs.push(new Collab('Ferry', 'Bernard', '1980-04-13', 'rue du Général-Merlin', 'CDI', '', '' , '', 'secretary', 'bilingualSecretary', '1628€', '2010-06-10', ''))
Collabs.push(new Collab('Petit', 'Robert', '1983-10-22', 'rue de la Paix', 'interim', '', 'Adecco' ,'Agent Commercial' , 'commercial' , 'commercialAgent', '1890€', '2020-11-15', '2020-06-15'))
Collabs.push(new Collab('Maillard', 'Pierre', '2002-04-01', 'Avenue Pasteur', 'internship', 'Gustave Eiffel', '', 'Stage Scrum Master', 'scrumMaster' , '', '', '2020-12-11', '2020-12-19'))


const ajout = () => {
    let lister = "";
    for(let i=0; i<Collabs.length;i++){
        lister += `<li>${Collabs[i].name} ${Collabs[i].firstName} : <button onclick='Collabs[${i}].collab()'>Selectionner</button></li>`
    }
    document.querySelector('#liste').innerHTML = lister;
}


form.addEventListener("submit", (e)=>{
    e.preventDefault();

    index.name = form.name.value;
    index.firstname = form.firstName.value;
    index.dateBirth = form.dateBirth.value;
    index.adress = form.adress.value;
    index.contractType = form.contractType.value;
    index.school = form.school.value;
    index.agency = form.agency.value;
    index.reasonMission = form.reasonMission.value;
    index.functions = form.functions.value;
    index.qualifications = form.qualifications.value;
    index.salary = form.salary.value;
    index.contractStartDate = form.contractStartDate.value;
    index.contractEndDate = form.contractEndDate.value;
})