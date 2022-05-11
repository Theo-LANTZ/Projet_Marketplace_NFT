export class Oeuvre {
    id: Number|any;
    type!:String;
    valeur!:String;
    id_user: Number|any;
    afficher!: Boolean;
    envente!:Boolean;

    constructor(id: number, type:string, valeur:string,id_user:string, afficher:boolean, envente:Boolean){
        this.id=id;
        this.type=type;
        this.valeur=valeur;
        this.id_user=id_user;
        this.afficher=afficher;
        this.envente=envente;
    }
}
