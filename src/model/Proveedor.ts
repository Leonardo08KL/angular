export class Proveedor {
    ProveedorID!: number;
    Nombre!: string;
    Contacto!: string;
    Telefono!: string;
    Direccion!: string;

    constructor(ProveedorID: number, Nombre: string, Contacto: string, Telefono: string, Direccion: string) {
        this.ProveedorID = ProveedorID;
        this.Nombre = Nombre;
        this.Contacto = Contacto;
        this.Telefono = Telefono;
        this.Direccion = Direccion;
    }
    static mapParseListJson(json:[]):Array<Proveedor>{
        return json.map(
            (element)=>{
                return element as Proveedor;
            }
        );
    }
} 