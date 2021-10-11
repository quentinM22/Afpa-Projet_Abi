const Projects = [];
let index = [];
let form = document.querySelector("form");

Projects.push(new Project("#0001", "aze", "project1", "Forfait", "production céréale", "2020-12-14", "2021-01-14" , "42", "j", "20", "Commercial"));
Projects.push(new Project("#0002", "qsd", "project2", "Régie", "Coopérative", "2020-12-14", "2021-03-14" , "78", "h", "15", "ProductOwner"));
Projects.push(new Project("#0003", "wxc", "project3", "Assistance", "Négoce en gros", "2020-12-14", "2021-04-14", "32", "h", "10", "Commercial"));
Projects.push(new Project("#0004", "iop", "project4", "Forfait", "Négoce en gros", "2020-12-14", "2021-08-14" , "65", "j", "20", "ScrumMaster"));

// Fonction ajout excecuter au chargement de la page HTML
const ajout = () => {
    let lister = "";
    for(let i=0; i<Projects.length;i++){
        lister += `<li id="project${i}">N° du project : ${Projects[i].codeProject}  <button class="slection" onclick="Projects[${i}].project()">Selectionner</button></li>`
    }
    document.querySelector('#liste').innerHTML = lister;
}

// Récupération des données du formulaire
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    index.codeProject = form.codeProject.value;
    index.shortWording = form.shortWording.value;
    index.name = form.name.value;
    index.type = form.type.value;
    index.sector = form.sector.value;
    index.start = form.start.value;
    index.end = form.end.value;
    index.realStart = form.realStart.value;
    index.realEnd = form.realEnd.value;
    index.overallLoad = form.overallLoad.value;
    index.time = form.time.value;
    index.note = form.note.value;
    index.size = form.size.value;
    index.assosiation = form.assosiation.value;
    index.history = form.history.value;
    index.data = form.data.value;
    index.info = form.info.value;
    
    let id = Projects.indexOf(index);
    document.querySelector(`#project${id}`).innerHTML = `N° du project : ${Projects[id].codeProject}    <button class="slection" onclick="Projects[${id}].project()">Selectionner</button>`;
    
    console.log(Projects);
})