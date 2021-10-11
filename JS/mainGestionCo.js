let table = []
let client1 = new Clients ( '#001', "Agro-Poulet", "Zone industriel de rennes ", "35000" ,"Rennes","AgroPoulet@gmail.com" ,'02-02-03-12-22', "Privé", "Alimentaire", "SAS", 10000000, 25)
let client2 = new Clients ('#002', "metal-urgie", "rue de brest", "29000" ,"Brest","metal_urgie@gmail.com" ,"02-02-03-12-21", "Privé", "Industrie", "Sa", 546060, 2)
let client3 = new Clients ( '#003', "medic-al", "rue du marché-noir ", "75000" ,"Paris","medic-al@gmail.com" ,'02-55-44-12-21', "Public", "Other", "sarl", 520000, 1)
let client4 = new Clients ( '#004', "Nau-tic", "Zone industriel de st quay ", "22440" ,"St Quay","nau-tic@gmail.com" ,'02-24-55-32-02', "Privé", "Industrie", "SAS", 104400, 5)
table.push(client1, client2, client3, client4)


//------formulaire-------

//-----recuparation objet----
let numbClient = ""
let clientwatch =[]
let search = document.querySelector('#searchClient')

search.addEventListener('click', ()=>{
    numbClient = document.querySelector("#numberClient").value
    clientwatch = table.find((client)=>{
    return client.numberClient === numbClient})

    document.querySelector('#name').value = clientwatch.name
    document.querySelector('#address').value = clientwatch.address
    document.querySelector('#postalCode').value = clientwatch.postalCode
    document.querySelector('#city').value = clientwatch.city
    document.querySelector('#email').value = clientwatch.email
    document.querySelector('#telephone').value = clientwatch.numberTel
    document.querySelector('#socialReason').value = clientwatch.socialReason
    document.querySelector('#turnover').value = clientwatch.turnover
    document.querySelector('#effective').value = clientwatch.effective
    document.querySelector('#fieldOfActivity').value = clientwatch.fieldOfActivity
   console.log(clientwatch.typeOfClient)
   if(clientwatch.typeOfClient === "Privé"){
        document.querySelector('#checkboxFormPrivate').checked = true
        
    }else if(clientwatch.typeOfClient === "Public"){
        
        document.querySelector('#checkboxFormPublic').checked = true 
    }

})
//------recup nouvelles valeur ----- 
  let form = document.querySelector('form')
form.addEventListener('submit', (e)=>{
    e.preventDefault()
        clientwatch.name = document.querySelector('#name').value
        clientwatch.address = document.querySelector('#address').value 
        clientwatch.postalCode = document.querySelector('#postalCode').value 
        clientwatch.city = document.querySelector('#city').value
        clientwatch.email = document.querySelector('#email').value 
        clientwatch.numberTel = document.querySelector('#telephone').value 
        clientwatch.socialReason = document.querySelector('#socialReason').value 
        clientwatch.turnover = document.querySelector('#turnover').value  
        clientwatch.effective = document.querySelector('#effective').value 
        clientwatch.fieldOfActivity =  document.querySelector('#fieldOfActivity').value
        alert("Mise à Jour client pris en compte")
        
})