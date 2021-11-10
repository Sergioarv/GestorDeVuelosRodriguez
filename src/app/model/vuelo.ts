import { Aerolinea } from './aerolinea';
import { Ruta } from './ruta';

export class Vuelo {
    idVuelo = '';
    fecha_vuelo: Date = new Date();
    Aerolinea_idAerolinea: Aerolinea = new Aerolinea;
    Ruta_idRuta: Ruta = new Ruta;
}
