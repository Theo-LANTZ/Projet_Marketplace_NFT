import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class OeuvreService{
    constructor(private http: HttpClient){}

    url = 'http://192.168.1.11:3000';
    getOeuvres(){
        return this.http.get<any[]>(`${this.url}/oeuvres`);
    }

    //On récupère les informations d'un produit dont l'id est passé en paramètres
    getOeuvresById(id: string | undefined | null){
        return this.http.get<any[]>(`${this.url}/oeuvres/${id}`);
    }
}