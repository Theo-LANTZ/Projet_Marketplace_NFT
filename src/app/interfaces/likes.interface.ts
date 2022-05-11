export class Likes {
    id: Number|any;
    id_oeuvre: Number|any;
    id_user: Number|any;

    constructor(id: number, id_oeuvre:number, id_user:number){
        this.id=id;
        this.id_oeuvre= id_oeuvre;
        this.id_user = id_user;
    }
}
