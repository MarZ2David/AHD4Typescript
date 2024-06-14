// Definir la clase Task
export class Tarea{
    descripcion: string;
    completado: boolean;

    //constructor de la clase 
    constructor(descripcion: string){
        this.descripcion = descripcion;
        this.completado = false;
    }

    //Método para marcar una tarea como completada
    tareaCompletada(){
        this.completado = !this.completado;
    }
}