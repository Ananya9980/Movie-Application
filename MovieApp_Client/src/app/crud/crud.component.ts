import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Movielist } from '../movielist';
import { MovielistService } from '../movielist.service';
import { Movieuser } from '../movieuser';



@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private movieList_:MovielistService, private _route : Router) { }

  movie !: any ;
  movieuser ! : any;
  ngOnInit(): void 
  { 
    this.movieList_.getMovieListFromRemote().subscribe(
      data => {
        console.log("Movie details received");
       // console.log("DATA: "+JSON.stringify(data));
        this.movie=data;
        console.log(this.movie);
      },
      error => console.log("Error occured")
    )
   
  }

  goToAddMovie(){
    this._route.navigate(['/addMovie']);
  }

  goToEditMovie(movie : Movielist){
    console.log("Movie : "+movie);
    this.movieList_.movie=movie;
    this._route.navigate(['editMovie']);
  }

  goToViewMovie(id : number){
    console.log("ID : "+id);
    this._route.navigate(['/viewMovie',id]);
  }

  deleteMovie(id : number){
          this.movieList_.deleteMovieByIdFromRemote(id).subscribe(
           data => this.ngOnInit() )
  }
  
  refreshPage(){
    window.location.reload();
} 

logout(){
  console.log("Before Logout : "+sessionStorage.getItem('token'));
  sessionStorage.clear();
  console.log("After Logout : "+sessionStorage.getItem('token'));
  this._route.navigate(['login']);
}

  

}
