'use strict'
class carrito{
    
    
    
    //showCarrito = async() => {
   

    

    aumentar ()  {
        $(".aum").click(function(){
            let id = $(this).attr("idGlass");
            let cantidad = $("#"+id).val();
            cantidad++;
            $("#"+id).val(cantidad);
            $("#spanCU"+id).text(cantidad);

            
            let producto = JSON.parse(localStorage.getItem("carritoLentes"));

            producto.forEach( (lente)=> {
                if(lente.id == id )
                {
                    lente.cantidad = cantidad;
                    let precio = lente.precio;
                    $("#spanTotal"+id).text(precio * cantidad);
                }
            } )
            let response = JSON.stringify(producto);
            localStorage.setItem("carritoLentes", response);

        });
       
    }

    disminuir () {
        $(".dis").click(function(){
            var id = $(this).attr("idGlass");
            //console.log("ID carrito: "+id);
            var cantidad = $("#"+id).val();
            cantidad--;
            if(cantidad > 0)
            {
                $("#"+id).val(cantidad);
                $("#spanCU"+id).text(cantidad);

                let producto = JSON.parse(localStorage.getItem("carritoLentes"));

                producto.forEach( (lente)=> {
                    if(lente.id == id )
                    {
                        lente.cantidad = cantidad;
                        let precio = lente.precio;
                        $("#spanTotal"+id).text(precio * cantidad);
                    }
                } )
                let response = JSON.stringify(producto);
                localStorage.setItem("carritoLentes", response);
            }else{
                //alert("elimnandooo...");
                //let eliminar = new deleteLenteCarrito();
                $(".delete").trigger("click");
            }
            
        });
        
    }

    aumentarTotalUnitario(){
    }

    deleteLenteCarrito () {
       // console.log("WDSDSDSD");
        $(".delete").click(function(){
            const carrito = JSON.parse(localStorage.getItem("carritoLentes"));
            let index = $(this).attr("index");
            console.log("DELETING... ID: "+index);
            carrito.splice(index,1);
            //this.tareas.splice(index, 1);
            localStorage.setItem("carritoLentes",JSON.stringify(carrito));
            console.log("CARRITO ELIMANDO...");
            console.log(carrito);
            cargarEventos();
        });
        
    }
     


    showCarrito  () {
        
        $(".carritoC").empty();
        const carrito = JSON.parse(localStorage.getItem("carritoLentes"));
        console.log(carrito);
        if(carrito != null)
        {
            console.log($("#badgeCarrito").text());
            console.log("length: "+carrito.length);
            $("#badgeCarrito").text(carrito.length);
            console.log($("#badgeCarrito").text());
            
            carrito.forEach( (producto,index) =>{
            const total = producto.cantidad * producto.precio;
                //console.log(index);
                $(".carritoC").append(`
                    
                    <div idLenteCarrito="" class=" divContenedor  align-items-center text-center row">
                        <div class="col-2 col-md-3 col-lg-2 ml-4" style="background-color:;">
                            <img src="${producto.src}" alt="" style="height: 4rem;">
                            <div class="row">
                                <span>${producto.nombre}</span>
                            </div>
                        </div>
                        <div style="background-color:;" class="col-6 col-md-4 col-lg-5 divButtons">
                            <button class="btn btn-primary btn-sm dis" idGlass="${producto.id}">-</button>
                            <input id="${producto.id}" type="text" class="input_Cantidad form-control-sm" style=";" value="${producto.cantidad}">
                            <button class="btn btn-primary btn-sm aum" idGlass="${producto.id}">+</button>
                            <div>
                            <span id="spanCU${producto.id}" class="cantidadUnitaria">${producto.cantidad} </span> x <span>$${producto.precio}</span>
                            </div>
                        </div>
                        <div  class="col-3 col-md-4 col-lg-4 totalUnitaria" style="background-color:;">
                            <span id="spanTotal${producto.id}" >$${total}</span>
                            <button index="${index}" id-delete=${producto.id} class="delete btn btn-danger btn-sm">X</button>
                        </div>  
                    </div>
                    <hr>
                    
                `)
                
            } )
        //this.aumentar();
        //this.disminuir();
        }else{
            $("#badgeCarrito").text(0);
        }
            
        
    }

        
}