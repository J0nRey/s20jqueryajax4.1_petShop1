$(document).ready( function(){
    $(".content-wrapper").load("./views/home.html")
    loadView("/s20jqueryajax4.1_petShop1/views/home.html", "home")
})




$(".navbar-nav a").click( event => {
    event.preventDefault()

  let view = event.target.dataset.viewTarget
  console.log(view)

    let url = `/s20jqueryajax4.1_petShop1/views/${view}.html`
    console.log(url)

    console.log(event.target) // = a
    $(".nav-item").removeClass("active") 
    $(event.target).closest(".nav-item").addClass("active")
    loadView(url, view)

})


const loadView = (url, view) => {

  $('.content-wrapper').load(url, () => {
    console.log(view)
    switch ( view ){

        case "home" :
        alert("cargando home")
        break
        
        case "pets" :
        alert("cargando pets")
        getPets()
        break
        
        case "users" :
        alert("cargando users")
        break
        
        default:
        alert("cargando home...")
    }
  })

}


// llamada de data de pet y user

const getPets = () => {
  $.ajax({
      method:"GET",
      url:"https://ajaxclass-1ca34-91895-default-rtdb.firebaseio.com/11g/jonathan/pets/.json",
      success: response => {
          console.log( response )
      },
      error: error => {
          console.log(error)
      } 
  })
}

$(".content-wrapper").on("click", ".add-user", () => {
  console.log("Agregando Nuevo Usuario")
})


const getDataOwners = () => {
  $.ajax({
      method:"GET",
      url:"https://ajaxclass-1ca34-91895-default-rtdb.firebaseio.com/11g/jonathan/owners/.json",
      success: response => {
          console.log(response)
      },
      error: error => {
          console.log(error)
      }
  })
  console.log("getDataOwners")
}

getDataOwners()

const getDataPets = () => {
  $.ajax({
      method:"GET",
      url:"https://ajaxclass-1ca34-91895-default-rtdb.firebaseio.com/11g/jonathan/owners/.json",
      success: response => {
          console.log(response)
      },
      error: error => {
          console.log(error)
      }
  })
  console.log("getDataPets")
}

getDataPets()

const saveDatUser = () => {
  $.ajax({
      method:"POST",
      url:"https://ajaxclass-1ca34-91895-default-rtdb.firebaseio.com/11g/jonathan/owners/.json",
      data: JSON.stringify({
          name:"Juan Pérez",
          url:"https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
          owenId:"1234567890",
      }),
      success: response => {
          console.log(response)
      },    
      error: error => {
          console.log(error)
      }
  })
}


const saveDataPet = () => {
  $.ajax({
      method:"POST",
      url:"https://ajaxclass-1ca34-91895-default-rtdb.firebaseio.com/11g/jonathan/pets/.json",
      data: JSON.stringify({
          name:"Nombre de la mascota",
          description:"Perro macho joven grande",
          owen:"Juan Pérez",
          url:"https://picsum.photos/id/237/200/300",
          owenId:"1234567890",
      }),
      success: response => {
          console.log(response)
      },    
      error: error => {
          console.log(error)
      }
  })
}

$("#save-user").click(saveDatUser())
$("#save-pet").click(saveDataPet())