class Producto {
    // constructor(obj) // otra opcion
    constructor(id, marca, precio){
        this.id = id;
        this.marca = marca;
        this.precio = precio;
    }

    valorMasIva() {
        return this.precio * 1.21;
    }

    getHTML() {
        return "<h1>" + this.marca + ": $" + this.precio +"</h1>" 
    }
    
}