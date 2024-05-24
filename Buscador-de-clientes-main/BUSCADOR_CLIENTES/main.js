$(document).ready(function () {
    let lista = [
        { id:1, nombre: "Agustín", apellido: "Alonso", descripcion: "Experto en resolución de problemas y trabajo en equipo.", imagen: "1.png" },
        { id:2, nombre: "David", apellido: "Priego", descripcion: "Hábil para resolver problemas y colaborar en equipo.", imagen: "3.png" },
        { id:3, nombre: "Eder", apellido: "Alonso", descripcion: "Destacado en resolver problemas y trabajo colaborativo.", imagen: "4.png" },
        { id:4, nombre: "Iván", apellido: "López", descripcion: "Experto en resolución de problemas y trabajo en equipo.", imagen: "2.png" },
        { id:5, nombre: "Ángel", apellido: "Fernández", descripcion: "Hábil para resolver problemas y colaborar en equipo.", imagen: "5.png" },
        { id:6, nombre: "Messi", apellido: "Mola", descripcion: "Experto en resolución de problemas y trabajo en equipo.", imagen: "6.png" },
        { id:7, nombre: "Diego", apellido: "Gallu", descripcion: "Experto en resolución de problemas y trabajo en equipo.", imagen: "7.png" },
        { id:8, nombre: "Messi", apellido: "Panadero", descripcion: "Experto en resolución de problemas y trabajo en equipo.", imagen: "8.png" },
    ];

   
    function filtrarLista(nombreUsuario) {
        //limpia el contenedor de cartas antes de agregar nuevas cartas
        $(".contenedorCartas").empty();

        for (const persona of lista) {
            //comprueba el texto ingresado con el nombre del usuario
            if (persona.nombre.toLowerCase().includes(nombreUsuario.toLowerCase())) {
                let nuevaCarta = `
                    <div class="carta" data-id="${persona.id}">
                        <div class="imagenNombre">
                            <div class="imagen"><img src="${persona.imagen}" alt=""></div>
                            <div class="nombreYapellido">
                                <div class="nombre">${persona.nombre}</div>
                                <div class="apellido">${persona.apellido}</div>
                            </div>
                        </div>
                        <div class="descripción">${persona.descripcion}</div>
                        <div class="ContenedorBotonBorrar"><button class="botonBorrar">Eliminar</button></div>
                    </div>
                `;
                //agrega la nueva carta al contenedor
                $(".contenedorCartas").append(nuevaCarta);
            }
        }
    }

    //
    $(".contenedorCartas").on("click", ".botonBorrar", function(){
        let carta = $(this).closest('.carta');
        let idCarta = carta.data('id');
        
        lista = lista.filter(persona => persona.id !== idCarta);
        
        carta.remove();
    });
    

    //llamada a la función para que carguen las cartas al inicio
    filtrarLista("");
    
    $(".input[type='text']").on("input", function () {
        //valor de lo que va introduciendo el usuario
        let nombreUsuario = $(this).val();
        //función de filtrar
        filtrarLista(nombreUsuario);
    });

    $(".formularioContenedor").hide();
    //Crear contacto 
    $(".crearContacto").on("click", function (event) {
        event.preventDefault();
        $(".formularioContenedor").show();
    });

    $(".crear").on("click", function (event) {
        event.preventDefault();
           
            let nombre = $(".nombre").val();
            let apellido = $(".apellido").val();
            let descripcion = $(".descripcion").val();
            let imagen = $(".imagen")[0].files[0];
        
        if (imagen) {
            //Convertir archivo a URL
            let imagenURL = URL.createObjectURL(imagen); 
            
            let nuevoContacto = {
                id: lista.length + 1,
                nombre: nombre,
                apellido: apellido,
                descripcion: descripcion,
                imagen: imagenURL
            };
    
            lista.push(nuevoContacto);
            filtrarLista("");
            $(".formularioContacto")[0].reset();
            $(".formularioContenedor").hide();
        }
    });
    
});
