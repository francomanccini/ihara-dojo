/* 
 /* datos del usuario */
   
/*  function usuario(){

    let nombre = prompt("bienvenido ingrese su nombre").toLocaleLowerCase();
    console.log(nombre);
    
    let apellido = prompt("ingrese su apellido")
    console.log(apellido);
    
    let edad = parseInt(prompt("ingrese su edad")) ;
    let permiso = edad >=16 ;
    
    if(permiso){
        alert("puedes concurrir al evento solo ");
        console.log("puede venir solo");
    }else{
        alert("tienes que venir acompañado de un adulto,sino no lo dejaran ingresar");
        console.log("tiene que ingresar con un adulto");
    }
    
    let dni = parseInt(prompt("ingrese su dni"));
    console.log(dni);
    
    }
    usuario();  */
    /* entradas */
/*     
    const tickets = [
        { nombre:"tribuna", precio:1000 },
        { nombre:"platea" , precio:2000 },
        { nombre:"ringside" , precio:3000 }
    ]
      
    console.log(tickets);
    
    const nombres = tickets.map(elemento => elemento.nombre);
    console.log(nombres);
    
    const precios = tickets.map(elemento => elemento.precio);
    console.log(precios);
    
    
    
    alert(`tiene esto tres tipos de tickest ${nombres} de estos  precios ${precios} podra abonar en cuotas de hasta 3 , 6 y 12 `);
    
    
     */
    
    
    
    
    /* cotizacion  */
    
     /*  
    function cotizacion(){
    let costodeentrada = parseInt(prompt("ingrese el valor de su entrada"));
    let cuotas = parseInt(prompt("ingrese el numero de cuotas"));
    let resultado = costodeentrada / cuotas; 
    
    console.log(resultado); 
    
    alert(`debera pagar en ${cuotas} un total de ${resultado}`);
    console.log(`el usuario debera abonar en ${cuotas} un total de ${resultado}`);
    }
    cotizacion(); 
    */
   // FORMULARIO

    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", validarformulario );
    
    function validarformulario(e){
        e.preventDefault();

        console.log(formulario.nombre.value);
        console.log(formulario.edad.value);
        console.log(formulario.dni.value);

        alert("sus datos fueron guardados")

    }


    function guardardatos (e){
        e.preventDefault();
        let nombre = Document.getElementById("idnombre");
    let edad = Document.getElementById("idedad");
    let dni = Document.getElementById("iddni");

    localStorage.setItem(" el nombre es ",nombre);    
    localStorage.setItem(" la edad  es ",edad);   
    localStorage.setItem(" el dni es ",dni);
    
    }
    //HTML JAVA SCRIPT*
    
    let contenedor = document.getElementById("container"); 
    let productos = [
        {clase: 1 , nombre: "tribuna" , precio: 1000 } ,
        {clase: 2 , nombre: "platea" , precio: 2000 } ,
        {clase: 3 , nombre: "ringside", precio: 3000 } ,
    ];
    
    for (const producto of productos){
        let li = document.createElement("li");
        li.innerHTML = `<h3>CLASE: ${producto.clase}</h3>
                      <p>Producto: ${producto.nombre}</p>
                      <b>$ ${producto.precio}</b>
                      <button id="btn">comprar</button>               
                      `;
        li.className = "violeta";
        contenedor.append(li);
    }
    let boton = document.getElementById("btn");
    boton.addEventListener("click",respuestaClick);
    function respuestaClick() {
    let cuotas = parseInt(prompt("ingrese el numero de cuotas"));
    console.log(cuotas);



    } 
    