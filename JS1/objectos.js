console.log("Funcionando")


// estas llaves representan un objecto {}
let personaje1 = {
    nombre : "Goku" ,
    raza : "Sayayin" ,
    personalidad : "Alegre" ,
    contextura : "Musculoso",
    Imagen : "https://i.blogs.es/aee3d3/gawu1m5wsaafdop/1366_2000.jpeg"


 }

 console.log(personaje1)


 let mascota = {
    nombre : "Azul",
    raza : "Zaguate",
    Personalidad : "Juguetona",
    imagen : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvnB1KrTfqjdhyOcG2-MxUprx_1KdX6gPiyg&s"



 }

 console.log(mascota)

 document.getElementById("IDtarjeta1").innerHTML = `
     <div class="card">
            <img class="card-img-top" src="holder.js/100x180/" alt="">
            <div class="card-body">
                <h4 class="card-title">${personaje1.nombre}</h4>
                <p class="card-text">${personaje1.contextura}</p>
            </div>
        </div>
  
  `

  document.getElementById("IDJumbotron1").innerHTML = `
     <div class="jumbotron">
                <h1 class="display-3">Jumbo heading</h1>
                <p class="lead">Jumbo helper text</p>
                <hr class="my-2">
                <p>More info</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
                </p>
            </div>
  
  `


  document.getElementById("IDnavbar1").innerHTML = `
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownId">
                                <a class="dropdown-item" href="#">Action 1</a>
                                <a class="dropdown-item" href="#">Action 2</a>
                            </div>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
  
  `

