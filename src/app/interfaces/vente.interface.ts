export class Vente {
    id_oeuvre: Number|any;
    id_user: Number|any;
    prix:Number|any;

    constructor(id_oeuvre:number, id_user:number, prix:number){
        this.id_oeuvre= id_oeuvre;
        this.id_user = id_user;
        this.prix = prix;
    }
}
