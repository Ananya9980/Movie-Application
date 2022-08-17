import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Movielist } from './movielist';
import { Movieuser } from './movieuser';

@Injectable({
  providedIn: 'root'
})
export class MovielistService {

  movie: any
  constructor(private _http : HttpClient) { }


  getMovieListFromRemote():Observable<any>{
    return this._http.get<any>("http://localhost:9000/api/u1/user/movies/"+this.email);
  }
  email:any;
  retriveemail(email:any)
  {
        this.email=email;
  }

  addMovieToRemote(  movie: Movielist):Observable<any>{
    console.log("hello"+movie);
    return this._http.post<any>("http://localhost:9000/api/u1/addmovie/"+this.email,movie);
  }

 updateMovieByEmail(movie: Movielist):Observable<any>{
    return this._http.put<any>("http://localhost:9000/api/u1/user/update/"+this.email, movie);
  }


  deleteMovieByIdFromRemote(movieId: number):Observable<any>{

    return this._http.delete<any>("http://localhost:9000/api/u1/user/remove/"+this.email+"?movieId="+movieId);
  }

}
