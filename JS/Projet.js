class Project{
    constructor(codeProject, shortWording, name, type, sector, start, end , overallLoad,time, size, assosiation){
        this.codeProject = codeProject;
        this.shortWording = shortWording;
        this.name = name;
        this.type = type;
        this.sector = sector;
        this.start = start;
        this.end = end;
        this.overallLoad = overallLoad;
        this.time = time;
        this.size = size;
        this.assosiation = assosiation;
        this.note = "";
        this.realStart = "aaaa-mm-jj"
        this.realEnd = "aaaa-mm-jj"
        this.history = "";
        this.data = "";
        this.info = "";
    }

    // Méthode utilisé lors du click sur le boutton sélectionné approprié
    project(){
        document.querySelector("#codeProject").value = this.codeProject;
        document.querySelector("#shortWording").value = this.shortWording;
        document.querySelector("#name").value = this.name;

        if (this.type === "Forfait"){
            document.querySelector("#typeF").checked = true;
        }
        else if (this.type === "Régie"){
            document.querySelector("#typeR").checked = true;
        }
        else{
            document.querySelector("#typeA").checked = true;
        }

        document.querySelector("#sector").value = this.sector;
        document.querySelector("#start").value = this.start;
        document.querySelector("#end").value = this.end;
        document.querySelector("#realStart").value = this.realStart;
        document.querySelector("#realEnd").value = this.realEnd;
        document.querySelector("#overallLoad").value = this.overallLoad;
        document.querySelector("#time").value = this.time;
        document.querySelector("#note").value = this.note;
        document.querySelector("#size").value = this.size;

        if (this.assosiation === "Commercial"){
            document.querySelector("#commercial").checked = true;
        }
        else if (this.assosiation === "ProductOwner"){
            document.querySelector("#productOwner").checked = true;
        }
        else{
            document.querySelector("#scrumMaster").checked = true;
        }

        document.querySelector("#history").value = this.history;
        document.querySelector("#data").value = this.data;
        document.querySelector("#info").value = this.info;

        index = this;
    }
}