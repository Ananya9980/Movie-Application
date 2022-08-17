import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Movielist } from '../movielist';
import { MovielistService } from '../movielist.service';
import { Movieuser } from '../movieuser';

@Component({
selector: 'app-add-movie',
templateUrl: './add-movie.component.html',
styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

movie = new Movielist();

movieuser =new Movieuser();
constructor(private _router : Router, private _service : MovielistService) { }

ngOnInit(): void {
  // setInterval(()=>console.log(this.movie.movieName),1000);
}

addMovieFormSubmit(){
  // console.log(this.movieuser.email)
  // console.log(this.movie)
  this._service.addMovieToRemote(this.movie).subscribe(
  
    data =>{
      console.log(data)
    
      console.log("Data added succesfully")
    }
  )
}

goToList(){
  this._router.navigate(['/crud']);
}


}
