import { Aerolinea } from './aerolinea';
import { Ruta } from './ruta';

export class Vuelo {
    idVuelo = '';
    fecha_vuelo: Date = new Date();
    aerolinea_idAerolinea: Aerolinea = new Aerolinea();
    ruta_idRuta: Ruta = new Ruta();
}
