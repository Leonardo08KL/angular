export class Producto {
    ProductoID!: number;
    Nombre!: string;
    Descripcion!: string;
    Precio!: number;
    Stock!: number;

    constructor(ProductoID: number, Nombre: string, Descripcion: string, Precio: number, Stock: number) {
        this.ProductoID = ProductoID;
        this.Nombre = Nombre;
        this.Descripcion = Descripcion;
        this.Precio = Precio;
        this.Stock = Stock;
    }
    static mapParseListJson(json:[]):Array<Producto>{
        return json.map(
            (element)=>{
                return element as Producto;
            }
        );
    }
}