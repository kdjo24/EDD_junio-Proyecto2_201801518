class nodoComentarios{
    constructor(id,usuario){
        this.id=id;
        this.usuario=usuario
        this.siguiente=null;
    }//Fin constructor
}// fin clase nodols

class lsComentarios{
    constructor(){
        this.inicio=null;
        this.tamaño=0
    }//Fin constructor

    insertar(id,usuario){
        var nuevoNodo = new nodoComentarios(id,usuario);
        if(this.inicio==null){
            this.inicio=nuevoNodo;
        }
        else{
            var auxiliar = this.inicio;
            while(auxiliar.siguiente!=null){
                auxiliar=auxiliar.siguiente;
            }
            auxiliar.siguiente=nuevoNodo
        }
        this.tamaño=this.tamaño+1
    }//Fin insertar

    retornoNumero(numero){
        var contador=0
        var auxiliar = this.inicio
        while(auxiliar!=null){
            if(contador==numero){return auxiliar}
            auxiliar=auxiliar.siguiente
            contador=contador+1
        }
    }



    
}//Fin lista simple
//--
class nodoPeliculasls{
    constructor(id,nombre_pelicula,descripcion,puntuacion_star,precio_Q){
        this.id=id;
        this.nombre_pelicula=nombre_pelicula
        this.descripcion=descripcion
        this.puntuacion_star=puntuacion_star
        this.precio_Q=precio_Q      
        this.siguiente=null;
        this.alquilada=false
        this.comentarios = new lsComentarios()
    }//Fin constructor
}// fin clase nodols

class listaSimplePeliculas{
    constructor(){
        this.inicio=null;
        this.tamaño=0
    }//Fin constructor

    insertar(id,nombre_pelicula,descripcion,puntuacion_star,precio_Q){
        var nuevoNodo = new nodoPeliculasls(id,nombre_pelicula,descripcion,puntuacion_star,precio_Q);
        if(this.inicio==null){
            this.inicio=nuevoNodo;
        }
        else{
            var auxiliar = this.inicio;
            while(auxiliar.siguiente!=null){
                auxiliar=auxiliar.siguiente;
            }
            auxiliar.siguiente=nuevoNodo
        }
        this.tamaño=this.tamaño+1
    }//Fin insertar

    retornoNumero(numero){
        var contador=0
        var auxiliar = this.inicio
        while(auxiliar!=null){
            if(contador==numero){return auxiliar}
            auxiliar=auxiliar.siguiente
            contador=contador+1
        }
    }


    ordenarAscendente(){
        for(var a=0;a<this.tamaño;a++){
            for(var b=0;b<this.tamaño;b++){
                if(b+1<this.tamaño){
                if(this.retornoNumero(b).id>this.retornoNumero(b+1).id){
                    var id = this.retornoNumero(b).id
                    var na = this.retornoNumero(b).nombre_pelicula
                    var des = this.retornoNumero(b).descripcion
                    var pun = this.retornoNumero(b).puntuacion_star
                    var prec = this.retornoNumero(b).precio_Q
                    this.retornoNumero(b).id=this.retornoNumero(b+1).id
                    this.retornoNumero(b).nombre_pelicula=this.retornoNumero(b+1).nombre_pelicula
                    this.retornoNumero(b).descripcion=this.retornoNumero(b+1).descripcion
                    this.retornoNumero(b).precio_Q=this.retornoNumero(b+1).precio_Q
                    this.retornoNumero(b+1).id=id
                    this.retornoNumero(b+1).nombre_pelicula=na
                    this.retornoNumero(b+1).descripcion=des
                    this.retornoNumero(b+1).puntuacion_star=pun 
                    this.retornoNumero(b+1).precio_Q = prec
                }}
            }
        }
    }

    
}//Fin lista simple


///////////////////////////////////////////////////////////////////////////////////////

class nodols{
    constructor(dpi,nombre_completo,nombre_usuario,correo,contrasenia,telefono){
        this.dpi=dpi
        this.nombre_completo=nombre_completo
        this.nombre_usuario=nombre_usuario
        this.correo=correo
        this.contrasenia=contrasenia
        this.telefono=telefono
        this.siguiente=null;
    }//Fin constructor
}// fin clase nodols

class listaSimple{
    constructor(){
        this.inicio=null;
    }//Fin constructor

    insertar(dpi,nombre_completo,nombre_usuario,correo,contrasenia,telefono){
        var nuevoNodo = new nodols(dpi,nombre_completo,nombre_usuario,correo,contrasenia,telefono);
        if(this.inicio==null){
            this.inicio=nuevoNodo;
        }
        else{
            var auxiliar = this.inicio;
            while(auxiliar.siguiente!=null){
                auxiliar=auxiliar.siguiente;
            }
            auxiliar.siguiente=nuevoNodo
        }
    }//Fin insertar

    retornoEncontrado(usuario,contrasenia){
        var auxiliar = this.inicio
        while(auxiliar!=null){
            if(auxiliar.nombre_usuario==usuario && contrasenia==auxiliar.contrasenia ){return auxiliar}
            auxiliar=auxiliar.siguiente
        }
        return null
    }


    grafica(){
        var strGraficaUno="digraph G { \n rankdir=\"LR\";\n"
        var nodoaux=this.inicio;
        while(nodoaux!=null){
            strGraficaUno+="cliente"+nodoaux.dpi+"[label=\""+nodoaux.dpi+"\n"+nodoaux.nombre_completo+"\n"+nodoaux.nombre_usuario+"\n"+nodoaux.correo+"\n"+nodoaux.contrasenia+"\n"+nodoaux.telefono+"\"];\n"
        nodoaux=nodoaux.siguiente
        }
        nodoaux=this.inicio
        while(nodoaux!=null){
            if(nodoaux.siguiente!=null){strGraficaUno+="cliente"+nodoaux.dpi+"->"+"cliente"+(nodoaux.siguiente.dpi)+";\n"}
        nodoaux=nodoaux.siguiente
        }
        strGraficaUno+="}"
        return strGraficaUno
    } // graficauno



}//Fin lista simple

class nodoAvl{
    constructor(id,nombre_pelicula,descripcion,puntuacion_star,precio_Q){
        this.id=id;
        this.nombre_pelicula=nombre_pelicula
        this.descripcion=descripcion
        this.puntuacion_star=puntuacion_star
        this.precio_Q=precio_Q
        ///// -- Apuntadores -- ////
        this.izquierda=null
        this.derecha=null
        this.posicion=0
        this.regreso=null
    }
}// Nodo Avl

class arbolAvl{
    
    constructor(){ 
        this.raiz=null
        this.estrGrafica=""
        this.strGrafica=""
        this.tamaño=0
        this.listaPeliculas=new listaSimplePeliculas()
    }// constructor

    
    // ------------------------------- Metodos complementarios --------------------------------------------
    
    mayordedos(primero,segundo){
        if(primero<segundo){
            return segundo
        }
        else{
            return primero
        }
    }//mayor de dos

    posMetodo(rama){
        if (rama!=null){
            return rama.posicion
        }
        else{
            return -1
        }
    }// pos Metodo

    // -------------------------------- Rotaciones simples ----------------------------------------------------

    rotiz(rama){
        var auxRI = rama.izquierda
        rama.izquierda = auxRI.derecha
        auxRI.derecha = rama
        rama.posicion=this.mayordedos(this.mayordedos(rama.izquierda),this.mayordedos(rama.derecha))+1
        auxRI.posicion=this.mayordedos(this.posMetodo(auxRI.izquierda),this.posMetodo(auxRI.derecha))+1
        return auxRI
    }// rotacion izquierda

    rotder(rama){
        var auxRD = rama.derecha
        rama.derecha = auxRD.izquierda
        auxRD.izquierda = rama
        rama.posicion = this.mayordedos(this.posMetodo(rama.izquierda),this.posMetodo(rama.derecha))+1
        auxRD.posicion=this.mayordedos(this.posMetodo(auxRD.izquierda),this.posMetodo(auxRD.derecha))+1
        return auxRD
    } // rotacion derecha


    // ----------------------------- Rotaciones dobles ---------------------------------------------------

    rotdosiz(rama){
        rama.izquierda=this.rotder(rama.izquierda)
        return this.rotiz(rama)
    }// rotacion doble por la izquierda

    rotdosder(rama){
        rama.derecha=this.rotiz(rama.derecha)
        return this.rotder(rama)
    }// rotacion doble por la derecha

    // ---------------------------------- Introducción y ordenamiento -------------------------------------

    insertar(id,nombre_pelicula,descripcion,puntuacion_star,precio_Q){ this.raiz=this.ordenamiento(id,this.raiz,nombre_pelicula,descripcion,puntuacion_star,precio_Q);
    this.tamaño=this.tamaño+1;}

    ordenamiento(id,raiz,nombre_pelicula,descripcion,puntuacion_star,precio_Q){
        if(raiz==null){return new nodoAvl(id,nombre_pelicula,descripcion,puntuacion_star,precio_Q)}
        else{
            if(id<raiz.id){
                raiz.izquierda=this.ordenamiento(id,raiz.izquierda,nombre_pelicula,descripcion,puntuacion_star,precio_Q)
                var auxposicion = this.posMetodo(raiz.derecha)-this.posMetodo(raiz.izquierda)
                if(auxposicion==-2){
                    if(id<raiz.izquierda.id){
                        raiz = this.rotiz(raiz)
                    }
                    else{raiz=this.rotdosiz(raiz)}
                }
            } // primer if dentro del else
            else if(id>raiz.id){
                raiz.derecha=this.ordenamiento(id,raiz.derecha,nombre_pelicula,descripcion,puntuacion_star,precio_Q)
                var auxposdos = this.posMetodo(raiz.derecha) - this.posMetodo(raiz.izquierda)
                if(auxposdos==2){
                    if(id>raiz.derecha.id){
                        raiz=this.rotder(raiz)
                    }
                    else{
                        raiz=this.rotdosder(raiz)
                    }
                }
            }// else if
            else{ raiz.id=id}// else
        }// else
        var posmas=this.mayordedos(this.posMetodo(raiz.izquierda),this.posMetodo(raiz.derecha))+1
        raiz.posicion=posmas
        return raiz
    }// ordenamiento


    // ------------------------------------------------------- Grafica ---------------------------------------------
    
    primerGrafica(rama){
        if(rama==this.raiz){this.strGrafica=""}
        if(rama!=null){
            this.strGrafica+=rama.id+"[label=\""+rama.id+"\n"+rama.nombre_pelicula+"\" fillcolor=\"gray38\"];"
            this.primerGrafica(rama.izquierda)
            this.primerGrafica(rama.derecha)
        }
    }// primer Grafica

    segundoGrafica(rama){
        if(rama!=null){
            if(rama.izquierda!=null){this.strGrafica+="\n"+rama.id+"->"+rama.izquierda.id+";"}
            this.segundoGrafica(rama.izquierda)
            if(rama.derecha!=null){this.strGrafica+="\n"+rama.id+"->"+rama.derecha.id+";"}
            this.segundoGrafica(rama.derecha)
        }
    }// segundo Grafica

    grafica(){
        this.estrGrafica="digraph G{ \n label=\"Arbol AVL \"; \n fontname=\"Times New Roman\" fontsize=\"20pt\""
        this.primerGrafica(this.raiz)
        this.segundoGrafica(this.raiz)
        this.estrGrafica+=this.strGrafica +" \n }"
        return this.estrGrafica
    }

}// arbol Avl


class nodolsActores{
    constructor(id,nombre_actor,correo,descripcion){
        this.id=id;
        this.nombre_actor=nombre_actor
        this.correo=correo
        this.descripcion=descripcion
        this.siguiente=null;
    }//Fin constructor
}// fin clase nodols

class lsActores{
    constructor(){
        this.inicio=null;
        this.tamaño=0
    }//Fin constructor

    insertar(id,nombre_actor,correo,descripcion){
        var nuevoNodo = new nodolsActores(id,nombre_actor,correo,descripcion);
        if(this.inicio==null){
            this.inicio=nuevoNodo;
        }
        else{
            var auxiliar = this.inicio;
            while(auxiliar.siguiente!=null){
                auxiliar=auxiliar.siguiente;
            }
            auxiliar.siguiente=nuevoNodo
        }
        this.tamaño=this.tamaño+1
    }//Fin insertar

    retornoNumero(numero){
        var contador=0
        var auxiliar = this.inicio
        while(auxiliar!=null){
            if(contador==numero){return auxiliar}
            auxiliar=auxiliar.siguiente
            contador=contador+1
        }
    }



    
}//Fin lista simple




class nodoabb{
    constructor(id,nombre_actor,correo,descripcion){
        this.nombre_actor=nombre_actor
        this.correo=correo
        this.descripcion=descripcion
        this.id=id;
        this.izquierda=null;
        this.derecha=null;
    }
}//Fin nodo abb

class abb{
    constructor(){
        this.raiz=null;
        this.strGraphviz="digraph G { \n"
        this.listaActores=new lsActores()
    }//fin constructor

    insertarInterno(id,raiz,nombre_actor,correo,descripcion){
        if(raiz==null){raiz = new nodoabb(id,nombre_actor,correo,descripcion);}
        else{
            if(id>raiz.id){raiz.derecha = this.insertarInterno(id,raiz.derecha,nombre_actor,correo,descripcion);}
            else{raiz.izquierda = this.insertarInterno(id,raiz.izquierda,nombre_actor,correo,descripcion);}
        }// fin else
        return raiz
    }// fin insertar interno

    insertar(id,nombre_actor,correo,descripcion){
        this.raiz = this.insertarInterno(id,this.raiz,nombre_actor,correo,descripcion)
    }// Fin insertar

    anidarNodosGrafica(raiz){
        if (raiz!=null){
            this.strGraphviz+=raiz.id+"[label=\""+raiz.id+"\n"+raiz.nombre_actor+"\"];\n"
            if(raiz.izquierda!=null){this.strGraphviz+=raiz.id+"->"+raiz.izquierda.id+";\n"}
            if(raiz.derecha!=null){this.strGraphviz+=raiz.id+"->"+raiz.derecha.id+";\n"}
            this.anidarNodosGrafica(raiz.izquierda);
            this.anidarNodosGrafica(raiz.derecha);
        }
    }//fin anidacion nodos grafica

    graficar(){
        this.strGraphviz="digraph G { \n";
        this.anidarNodosGrafica(this.raiz);
        this.strGraphviz+="\n}"
        //console.log(this.strGraphviz);
        return this.strGraphviz        
    }//fin graficar


    post_orden(){
        this.listaActores= new lsActores()
        this.post_orden_interno(this.raiz)
    }

    post_orden_interno(raiz){
        if(raiz!=null){
            this.post_orden_interno(raiz.izquierda)
            this.post_orden_interno(raiz.derecha)
        this.listaActores.insertar(raiz.id,raiz.nombre_actor,raiz.correo,raiz.descripcion)
        }
    }

    inorden(){
        this.listaActores= new lsActores()
        this.inordenII(this.raiz)
    }

    inordenII(raiz){
        if(raiz!=null){
            this.inordenII(raiz.izquierda)
            this.listaActores.insertar(raiz.id,raiz.nombre_actor,raiz.correo,raiz.descripcion)
            this.inordenII(raiz.derecha)
        }
    }

    preorden(){
        this.listaActores= new lsActores()
        this.preordenII(this.raiz)
    }

    preordenII(raiz){
        if(raiz!=null){
            this.listaActores.insertar(raiz.id,raiz.nombre_actor,raiz.correo,raiz.descripcion)
            this.preordenII(raiz.izquierda)
            this.preordenII(raiz.derecha)
        }
    }


}// fin abb

class hashInterno{
    constructor(){
        // ----------
        this.dato=null
        this.key=null
        // ---------- Puntero
        this.siguiente=null
    }// fin constructor
}// Hash interno

class nodoHash{
    constructor(posMax){
        // -- posicion maxima
        this.posMax = posMax
        // ---- punteros
        this.siguiente=null
        this.raiz=null
        // --- llenado
        for(var a=0;a<posMax;a++){
            this.creacion()
        }// fin llenado
    }// fin constructor

    creacion(){
        var nuevo = new hashInterno()
        if(this.raiz==null){
            this.raiz=nuevo
        }//  si esta vacio
        else{
            var auxiliar = this.raiz
            while(auxiliar.siguiente!=null){auxiliar=auxiliar.siguiente;}
            auxiliar.siguiente=nuevo
        }
    }// creacion

    insertar(dato,key){
        var aux = this.raiz;
        while(aux!=null){
            if(aux.dato==null){aux.dato=dato; aux.key=key; return;}
            aux=aux.siguiente;
        }// fin while
    }
}// fin nodo hash

class nodoCategorias{
    constructor(id,dato,datod){
        this.id=id;
        this.datod=datod
        this.dato=dato
        this.siguiente=null;
    }//Fin constructor
}// fin clase nodols

class lsCategorias{
    constructor(){
        this.inicio=null;
        this.tamaño=0
    }//Fin constructor

    insertar(id,dato,datod){
        var nuevoNodo = new nodoCategorias(id,dato,datod);
        if(this.inicio==null){
            this.inicio=nuevoNodo;
        }
        else{
            var auxiliar = this.inicio;
            while(auxiliar.siguiente!=null){
                auxiliar=auxiliar.siguiente;
            }
            auxiliar.siguiente=nuevoNodo
        }
        this.tamaño=this.tamaño+1
    }//Fin insertar

    retornoNumero(numero){
        var contador=0
        var auxiliar = this.inicio
        while(auxiliar!=null){
            if(contador==numero){return auxiliar}
            auxiliar=auxiliar.siguiente
            contador=contador+1
        }
    }
}

class tablaHash{
    constructor(posMax){
        //--posicion
        this.posMax=posMax
        //--punteros
        this.raiz=null
        this.categoriasls = new lsCategorias()
        // llenado
        for(var b=0;b<posMax;b++){
            this.creandoNodos()
        }
        // ---- 
        this.strGrafica=""
    }// posicion maxima

    creandoNodos(){
        var nuevoNodo = new nodoHash(5)
        if(this.raiz==null){this.raiz=nuevoNodo;}
        else{
            var nodoAuxiliar = this.raiz;
            while(nodoAuxiliar.siguiente!=null){nodoAuxiliar=nodoAuxiliar.siguiente}
            nodoAuxiliar.siguiente=nuevoNodo
        }
    }// creando Nodos

    retornarId(id){
        var contador=0
        var auxiliarRetorno = this.raiz
        while(auxiliarRetorno.siguiente!=null){
            if(contador==id){return auxiliarRetorno}
            auxiliarRetorno=auxiliarRetorno.siguiente
            contador=contador+1
        }
        return auxiliarRetorno
    }// retornar Id

    insertar(llave,dato){
        // aca hare la funcion hash 
        var posicionHash = llave%this.posMax
        var nodoNuevo = this.retornarId(posicionHash)
        nodoNuevo.insertar(dato,llave)
    }// insertar

   grafica(){
    this.strGrafica="digraph G{ \n rankdir =\"LR\";"
    var auxiliarUnoG = this.raiz
    var guiaPrincipales = 0; 
    while(auxiliarUnoG!=null){
        this.strGrafica+="p"+guiaPrincipales+"[label=\""+guiaPrincipales+"\"]; \n"
        if(guiaPrincipales+1<this.posMax){this.strGrafica+= "p"+guiaPrincipales+ "->"+"p"+(guiaPrincipales+1)+";\n"}
        this.strGrafica += "subgraph "+guiaPrincipales+"{ \n rank=same;\n";
        // ---- Empezamos con los secundarios o listas internas 
        var auxiliarDosG = auxiliarUnoG.raiz
        var guiaSecundarios = 0; 
        if(auxiliarDosG.dato!=null){this.strGrafica+="p"+guiaPrincipales + "-> "+"p"+guiaPrincipales+"secundario"+guiaSecundarios+";\n";}
        while(auxiliarDosG!=null){
            if(auxiliarDosG.dato!=null){
                this.strGrafica+="p"+guiaPrincipales+"secundario"+guiaSecundarios+"[label=\""+auxiliarDosG.key+"\n"+auxiliarDosG.dato+"\"];\n"
                if(auxiliarDosG.siguiente.dato!=null){this.strGrafica+="p"+guiaPrincipales+"secundario"+guiaSecundarios+"->"+"p"+guiaPrincipales+"secundario"+(guiaSecundarios+1)+";\n"}
            }
            guiaSecundarios=guiaSecundarios+1
            auxiliarDosG=auxiliarDosG.siguiente
        }
        auxiliarUnoG=auxiliarUnoG.siguiente
        guiaPrincipales=guiaPrincipales+1
        this.strGrafica+="}"
    }// Primer while
    this.strGrafica+="}"
    return this.strGrafica
   }// Grafica

   recorriendo(){
    this.categoriasls=new lsCategorias()
    var auxiliarUnoG = this.raiz
    var contador=0
    while(auxiliarUnoG!=null){
        var auxiliarDosG = auxiliarUnoG.raiz
        while(auxiliarDosG!=null){
            if(auxiliarDosG.dato!=null){
             this.categoriasls.insertar(auxiliarDosG.key,auxiliarDosG.dato,contador)
            }
            auxiliarDosG=auxiliarDosG.siguiente
        }
        contador=contador+1
        auxiliarUnoG=auxiliarUnoG.siguiente
    }// Primer while
    return null
   }// recorriendo


}// Tabla Hash

/////////////////////////////////////////////////////// ESTRUCTURAS ////////////////////////////////////////////

///////////////////////////////////////////////////// -- Iniciando estructuras -----------------------------------
var clientes= new listaSimple()
clientes.insertar("2354168452525","Wilfred Perez","EDD","sincorreo@gmail.com","123","+502 (123) 123-4567")
var peliculas = new arbolAvl()
var actores = new abb()
var categorias = new tablaHash(20)
/////////////////////////////////////////////////// --- variables de divs ------------------------------------
var barraAdmin = document.getElementById("barraAdministrador")
barraAdmin.style.display="none"
var principalAdmin = document.getElementById("principalAdmin")
principalAdmin.style.display="none"
var login=document.getElementById("login")
var barrauser = document.getElementById("barraUsuario")
barrauser.style.display="none"



////////////////////////////////// FUNCIONES



function verificarLogin(){
    userLogin = document.getElementById("userLogin").value
    passwordLogin = document.getElementById("passwordLogin").value
    // ---------------- Verificador ------------------------ /
    var verificarUser = clientes.retornoEncontrado(userLogin,passwordLogin)
    var adminnoadmin = document.getElementById("checkadmin").checked
    // --------------- Administrador ------------------------ /
    if(verificarUser!=null && adminnoadmin==true){
        login.style.display="none"
        barraAdmin.style.display="block"
        principalAdmin.style.display="block"
        document.getElementById("txtdpiadmin").innerHTML=verificarUser.dpi
        document.getElementById("txtnombreadmin").innerHTML=verificarUser.nombre_completo
        document.getElementById("txtusuarioadmin").innerHTML=verificarUser.nombre_usuario
        document.getElementById("txtcorreoadmin").innerHTML=verificarUser.correo
        document.getElementById("txtcontraseniaadmin").innerHTML=verificarUser.contrasenia
        document.getElementById("txttelefonoadmin").innerHTML=verificarUser.telefono
    }
    if(verificarUser!=null && adminnoadmin==false){
        login.style.display="none"
        barrauser.style.display="block"
        document.getElementById("txtdpiusuario").innerHTML=verificarUser.dpi
        document.getElementById("txtnombreusuario").innerHTML=verificarUser.nombre_completo
        document.getElementById("txtusuariousuario").innerHTML=verificarUser.nombre_usuario
        document.getElementById("txtcorreousuario").innerHTML=verificarUser.correo
        document.getElementById("txtcontraseniausuario").innerHTML=verificarUser.contrasenia
        document.getElementById("txttelefonousuario").innerHTML=verificarUser.telefono
        mostrarPeliculasAscendente()
    }


    
    
}// fin verificar login
/////////////////////////////////////// USUARIO

function finUsuario(){
    login.style.display="block"
    barrauser.style.display="none"
    document.getElementById("peliculasUsuario").innerHTML=""
}

function verCategorias(){
    var l=0
    var strPeliculas=""
    strPeliculas+='<hr>'
    categorias.recorriendo()
    while(l<categorias.categoriasls.tamaño){
    var retornado = categorias.categoriasls.retornoNumero(l)
    strPeliculas+='<div class="col-xl-2 col-md-6 mb-4"><div class="card border-left-primary shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="h5 mb-0 font-weight-bold text-gray-800" ><img src="https://cdn-icons-png.flaticon.com/512/2422/2422223.png" width="50" ></div><div class="h5 mb-0 font-weight-bold text-gray-800">'+retornado.datod+'<hr>'+retornado.id+'<hr>'+retornado.dato+'<hr>'
    strPeliculas+='</div></div> <div class="col-auto"><i class="fas fa-calendar fa-2x text-gray-300"></i></div></div></div></div></div>    '
    l=l+1
    }
    document.getElementById("peliculasUsuario").innerHTML=strPeliculas
}

function actoresInorden(){
    var l=0
    var strPeliculas=""
    actores.inorden()
    strPeliculas+='<hr>'
    strPeliculas+='<div class="sidebar-card d-none d-lg-flex"><button class="btn btn-success btn-sm" onclick="actoresInorden()">Inorden</button></div>'
    strPeliculas+='<div class="sidebar-card d-none d-lg-flex"><button class="btn btn-success btn-sm" onclick="actoresPreorden()">PreOrden</button></div>'
    strPeliculas+='<div class="sidebar-card d-none d-lg-flex"><button class="btn btn-success btn-sm" onclick="actoresPostorden()">PostOrden</button></div>'
    strPeliculas+='<hr>'
    while(l<actores.listaActores.tamaño){
    var retornado = actores.listaActores.retornoNumero(l)
    strPeliculas+='<div class="col-xl-2 col-md-6 mb-4"><div class="card border-left-primary shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="h5 mb-0 font-weight-bold text-gray-800" ><img src="http://www.capitalmexico.com.mx/wp-content/uploads/2017/05/autor.png" width="50" ></div><div class="h5 mb-0 font-weight-bold text-gray-800">'+retornado.id+'<hr>'+retornado.nombre_actor+'<hr>'+retornado.correo+'<hr> '+retornado.descripcion+'<hr>'
    strPeliculas+='</div></div> <div class="col-auto"><i class="fas fa-calendar fa-2x text-gray-300"></i></div></div></div></div></div>    '
    l=l+1
    }
    document.getElementById("peliculasUsuario").innerHTML=strPeliculas
}




function actoresPreorden(){
    var l=0
    var strPeliculas=""
    actores.preorden()
    strPeliculas+='<hr>'
    strPeliculas+='<div class="sidebar-card d-none d-lg-flex"><button class="btn btn-success btn-sm" onclick="actoresInorden()">Inorden</button></div>'
    strPeliculas+='<div class="sidebar-card d-none d-lg-flex"><button class="btn btn-success btn-sm" onclick="actoresPreorden()">PreOrden</button></div>'
    strPeliculas+='<div class="sidebar-card d-none d-lg-flex"><button class="btn btn-success btn-sm" onclick="actoresPostorden()">PostOrden</button></div>'
    strPeliculas+='<hr>'
    while(l<actores.listaActores.tamaño){
    var retornado = actores.listaActores.retornoNumero(l)
    
    strPeliculas+='<div class="col-xl-2 col-md-6 mb-4"><div class="card border-left-primary shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="h5 mb-0 font-weight-bold text-gray-800" ><img src="http://www.capitalmexico.com.mx/wp-content/uploads/2017/05/autor.png" width="50" ></div><div class="h5 mb-0 font-weight-bold text-gray-800">'+retornado.id+'<hr>'+retornado.nombre_actor+'<hr>'+retornado.correo+'<hr> '+retornado.descripcion+'<hr>'
    strPeliculas+='</div></div> <div class="col-auto"><i class="fas fa-calendar fa-2x text-gray-300"></i></div></div></div></div></div>    '
    l=l+1
    }
    document.getElementById("peliculasUsuario").innerHTML=strPeliculas
}

function actoresPostorden(){
    var l=0
    var strPeliculas=""
    actores.post_orden()
    strPeliculas+='<hr>'
    strPeliculas+='<div class="sidebar-card d-none d-lg-flex"><button class="btn btn-success btn-sm" onclick="actoresInorden()">Inorden</button></div>'
    strPeliculas+='<div class="sidebar-card d-none d-lg-flex"><button class="btn btn-success btn-sm" onclick="actoresPreorden()">PreOrden</button></div>'
    strPeliculas+='<div class="sidebar-card d-none d-lg-flex"><button class="btn btn-success btn-sm" onclick="actoresPostorden()">PostOrden</button></div>'
    strPeliculas+='<hr>'
    while(l<actores.listaActores.tamaño){
    var retornado = actores.listaActores.retornoNumero(l)
    strPeliculas+='<div class="col-xl-2 col-md-6 mb-4"><div class="card border-left-primary shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="h5 mb-0 font-weight-bold text-gray-800" ><img src="http://www.capitalmexico.com.mx/wp-content/uploads/2017/05/autor.png" width="50" ></div><div class="h5 mb-0 font-weight-bold text-gray-800">'+retornado.id+'<hr>'+retornado.nombre_actor+'<hr>'+retornado.correo+'<hr> '+retornado.descripcion+'<hr>'
    strPeliculas+='</div></div> <div class="col-auto"><i class="fas fa-calendar fa-2x text-gray-300"></i></div></div></div></div></div>    '
    l=l+1
    }
    document.getElementById("peliculasUsuario").innerHTML=strPeliculas
}









function mostrarPeliculasDescendente(){
    var l=0
    var strPeliculas=""
    peliculas.listaPeliculas.ordenarAscendente()
    while(l<peliculas.tamaño){
    var retornado = peliculas.listaPeliculas.retornoNumero(l)
    strPeliculas+='<div class="col-xl-2 col-md-6 mb-4"><div class="card border-left-primary shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="h5 mb-0 font-weight-bold text-gray-800" ><img src="https://images.vexels.com/media/users/3/153232/isolated/preview/c3bcb676107e330558ccc68f8e1cf7d5-icono-plano-del-reproductor-de-peliculas.png" width="50" ></div><div class="h5 mb-0 font-weight-bold text-gray-800">'+retornado.id+'<hr>'+retornado.nombre_pelicula+'<hr>'+retornado.descripcion+'<hr> Q '+retornado.precio_Q+'<hr><button  class="btn btn-success btn-sm" onclick="verDatosPelicula('+l+')">Ver datos</button><hr>'
    if (retornado.alquilada==false){strPeliculas+='<button  class="btn btn-success btn-sm" onclick="comprar('+l+')">Comprar</button>'}
    else{strPeliculas+='ALQUILADA'}
    strPeliculas+='</div></div> <div class="col-auto"><i class="fas fa-calendar fa-2x text-gray-300"></i></div></div></div></div></div>    '
    l=l+1
    }
    document.getElementById("peliculasUsuario").innerHTML=strPeliculas
}

function mostrarPeliculasAscendente(){
    var l=peliculas.tamaño-1
    var strPeliculas=""
    peliculas.listaPeliculas.ordenarAscendente()
    while(l>0){
    var retornado = peliculas.listaPeliculas.retornoNumero(l)
    strPeliculas+='<div class="col-xl-2 col-md-6 mb-4"><div class="card border-left-primary shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="h5 mb-0 font-weight-bold text-gray-800" ><img src="https://images.vexels.com/media/users/3/153232/isolated/preview/c3bcb676107e330558ccc68f8e1cf7d5-icono-plano-del-reproductor-de-peliculas.png" width="50" ></div><div class="h5 mb-0 font-weight-bold text-gray-800">'+retornado.id+'<hr>'+retornado.nombre_pelicula+'<hr>'+retornado.descripcion+'<hr> Q '+retornado.precio_Q+'<hr><button  class="btn btn-success btn-sm" onclick="verDatosPelicula('+l+')">Ver datos</button><hr>'
    if (retornado.alquilada==false){strPeliculas+='<button  class="btn btn-success btn-sm" onclick="comprar('+l+')">Comprar</button>'}
    else{strPeliculas+='ALQUILADA'}
    strPeliculas+='</div></div> <div class="col-auto"><i class="fas fa-calendar fa-2x text-gray-300"></i></div></div></div></div></div>    '
    l=l-1
    }
    document.getElementById("peliculasUsuario").innerHTML=strPeliculas
}




function comprar(l){
    peliculas.listaPeliculas.retornoNumero(l).alquilada=true
    mostrarPeliculasAscendente()
}

function verDatosPelicula(l){
    var retornado = peliculas.listaPeliculas.retornoNumero(l)
    var strPeliculas='<div class="col-xl-12 col-md-6 mb-4"><div class="card border-left-primary shadow h-100 py-2"><div class="card-body">'
    strPeliculas+= '<div class="row no-gutters align-items-center"><div class="col mr-2"><div class="h5 mb-0 font-weight-bold text-gray-800" >'
    strPeliculas+='<img src="https://images.vexels.com/media/users/3/153232/isolated/preview/c3bcb676107e330558ccc68f8e1cf7d5-icono-plano-del-reproductor-de-peliculas.png" width="50" ></div><div class="h5 mb-0 font-weight-bold text-gray-800"><hr>'+retornado.nombre_pelicula+'<hr>'+retornado.descripcion+'<hr> Q '+retornado.precio_Q+'<hr>'
    if (retornado.alquilada==false){strPeliculas+='<button  class="btn btn-success btn-sm" onclick="comprar('+l+')">Comprar</button><hr>'}
    else{strPeliculas+='ALQUILADA <hr>'}
    // ---- puntuacion
    for(var es=0;es<retornado.puntuacion_star;es++){
    strPeliculas+='<img src="https://www.pngplay.com/wp-content/uploads/8/Gold-Vector-Star-Transparent-File.png" width="30" >'    
    }
    strPeliculas+='<hr><input type="text" class="form-control form-control-user" id="puntuacionNueva" aria-describedby="emailHelp" ><hr><button  class="btn btn-primary btn-user btn-block" onclick="cambiarEstrellas('+l+')">Cambiar Estrellas</button>'
    strPeliculas+='</div></div> <div class="col-auto"><i class="fas fa-calendar fa-2x text-gray-300"></i></div></div></div></div></div>    '
    // Comentarios
    for(var x =0;x<retornado.comentarios.tamaño;x++){
    strPeliculas+='<div class="col-xl-12 col-md-6 mb-4"><div class="card border-left-primary shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="h5 mb-0 font-weight-bold text-gray-800" ><img src="http://www.capitalmexico.com.mx/wp-content/uploads/2017/05/autor.png" width="50" ></div><div class="h5 mb-0 font-weight-bold text-gray-800"><hr>'+retornado.comentarios.retornoNumero(x).usuario+'<hr>'+retornado.comentarios.retornoNumero(x).id+'</div></div> <div class="col-auto"><i class="fas fa-calendar fa-2x text-gray-300"></i></div></div></div></div></div>    '
    }
    strPeliculas+='<div class="col-xl-12 col-md-6 mb-4"><div class="card border-left-primary shadow h-100 py-2"><div class="card-body">'
    strPeliculas+= '<div class="row no-gutters align-items-center"><div class="col mr-2"><div class="h5 mb-0 font-weight-bold text-gray-800" >'
    strPeliculas+='<hr><input type="text" class="form-control form-control-user" id="comentario" aria-describedby="emailHelp" ><hr><button  class="btn btn-primary btn-user btn-block" onclick="comentar('+l+')">Comentar</button>'
    strPeliculas+='</div></div> <div class="col-auto"><i class="fas fa-calendar fa-2x text-gray-300"></i></div></div></div></div></div>    '
    document.getElementById("peliculasUsuario").innerHTML=strPeliculas
}

function cambiarEstrellas(l){
    if(document.getElementById("puntuacionNueva").value<=5 &&document.getElementById("puntuacionNueva").value>=1){ 
        peliculas.listaPeliculas.retornoNumero(l).puntuacion_star=document.getElementById("puntuacionNueva").value;
        verDatosPelicula(l) 
     }
}

function comentar(l){
    peliculas.listaPeliculas.retornoNumero(l).comentarios.insertar(document.getElementById("comentario").value,document.getElementById("txtusuariousuario").innerHTML)
    verDatosPelicula(l)
}



////////////////////////////////// ADMINISTRADOR
function lectorClientes(event){
    var archivo=event.target;
    var lector=new FileReader();
    lector.onload=function(){
        var json_contenido=lector.result
        usuariosjson=JSON.parse(json_contenido)
        usuariosjson.forEach(usuario => {
            clientes.insertar(usuario.dpi,usuario.nombre_completo,usuario.nombre_usuario,usuario.correo,usuario.contrasenia,usuario.telefono)
        });
    }
    lector.readAsText(archivo.files[0])
}
document.getElementById('fileClientes').addEventListener('change',lectorClientes,false);

function graficaClientes(){
var miau=clientes.grafica()
d3.select("#grafica").graphviz()
.width(2000)
.height(300)
.renderDot(miau)
}


function lectorPeliculas(event){
    var archivo=event.target;
    var lector=new FileReader();
    lector.onload=function(){
        var json_contenido=lector.result
        usuariosjson=JSON.parse(json_contenido)
        usuariosjson.forEach(usuario => {
            peliculas.insertar(usuario.id_pelicula,usuario.nombre_pelicula,usuario.descripcion,usuario.puntuacion_star,usuario.precio_Q)
            peliculas.listaPeliculas.insertar(usuario.id_pelicula,usuario.nombre_pelicula,usuario.descripcion,usuario.puntuacion_star,usuario.precio_Q)
        });
    }
    lector.readAsText(archivo.files[0])
}
document.getElementById('filePeliculas').addEventListener('change',lectorPeliculas,false);

function graficaPeliculas(){
var miau=peliculas.grafica()
d3.select("#grafica").graphviz()
.width(2000)
.height(500)
.renderDot(miau)
}


function lectorActores(event){
    var archivo=event.target;
    var lector=new FileReader();
    lector.onload=function(){
        var json_contenido=lector.result
        usuariosjson=JSON.parse(json_contenido)
        usuariosjson.forEach(usuario => {
            actores.insertar(usuario.dni,usuario.nombre_actor,usuario.correo,usuario.descripcion)
        });
    }
    lector.readAsText(archivo.files[0])
}
document.getElementById('fileActores').addEventListener('change',lectorActores,false);

function graficaActores(){
var miau=actores.graficar()
d3.select("#grafica").graphviz()
.width(2000)
.height(500)
.renderDot(miau)
}

function lectorCategorias(event){
    var archivo=event.target;
    var lector=new FileReader();
    lector.onload=function(){
        var json_contenido=lector.result
        usuariosjson=JSON.parse(json_contenido)
        usuariosjson.forEach(usuario => {
            categorias.insertar(usuario.id_categoria,usuario.company)
        });
    }
    lector.readAsText(archivo.files[0])
}
document.getElementById('fileCategorias').addEventListener('change',lectorCategorias,false);

function graficaCategorias(){
var miau=categorias.grafica()
d3.select("#grafica").graphviz()
.width(2000)
.height(300)
.renderDot(miau)
}


function descargarGrafo(){
    html2canvas($('#grafica')[0]).then(function (canvas) {
        return Canvas2Image.saveAsPNG(canvas);
        $(".response").append(canvas);
    });

}


function finAdmin(){
    login.style.display="block"
    barraAdmin.style.display="none"
    principalAdmin.style.display="none"
}