let form = document.querySelector("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let codeProject = form.codeProject.value;
    let shortWording = form.shortWording.value;
    let name = form.name.value;
    let type = form.type.value;
    let sector = form.sector.value;
    let start = form.start.value;
    let end = form.end.value;
    let overallLoad = form.overallLoad.value;
    let time = form.time.value;
    let note = form.note.value;
    let size = form.size.value;
    let assosiation = form.assosiation.value;

    let newProjects = new Project(codeProject, shortWording, name, type, sector, start, end , overallLoad, time, size, assosiation);
    newProjects.note = note;
    
    console.log(newProjects);
    form.style.display = "none";
})