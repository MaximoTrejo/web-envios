export class User {

	id: number;
	usuario: string;
	clave: string;
    rol: 'admin' | 'empleado';
    estado: 'activo' | 'deshabilitado';

    constructor( id: number , usuario: string, clave: string, rol: 'admin' | 'empleado', estado: 'activo' | 'deshabilitado') {
		this.id = id;
		this.usuario = usuario;
		this.clave = clave;
		this.rol = rol;
		this.estado = estado;
	}
}
