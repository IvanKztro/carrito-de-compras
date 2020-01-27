//Funciones de la clase Carrito
let carritoEventos = new carrito();
//Div donde se muestran los productos almacenados en el carrito
let carro = $(".carritoC");
let clickAgregar = $(".agregar");

function cargarEventos (){
    
    carritoEventos.showCarrito();
    //carritoEventos.agregarCarrito();
    

    carritoEventos.aumentarTotalUnitario();
    carritoEventos.aumentar();   
    carritoEventos.disminuir();
    carritoEventos.deleteLenteCarrito();
        


    
}

cargarEventos();