import { Aerolinea } from "./aerolinea";
import { Ruta } from "./ruta";

export class Vuelo {
    idVuelo: string = '';
    fecha_vuelo: Date = new Date();
    Aerolinea_idAerolinea: Aerolinea = new Aerolinea;
    Ruta_idRuta: Ruta = new Ruta;
}
