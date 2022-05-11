import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Likes } from "../interfaces/likes.interface";

@Injectable()
export class ActionService{
    constructor(private http: HttpClient){}

    url = 'http://192.168.1.11:3000';
    getLikesForNFT(id:number){
        return this.http.get<any[]>(`${this.url}/likes/${id}`);
    }
    getDislikes(id:number){
        return this.http.get<any[]>(`${this.url}/dislikes/${id}`)
    }
    createLikes(data: Likes){
        this.http.post(`${this.url}/Likes`, data)
        .subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.log('error occured :', err);
            }
        );
    }
    
}