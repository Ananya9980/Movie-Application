import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { MovielistService } from '../movielist.service';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movielist } from '../movielist';
import { Movieuser } from '../movieuser';
@Component({
selector: 'app-edit-movie',
templateUrl: './edit-movie.component.html',
styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
@Input()
movie = new Movielist();
movieuser= new Movieuser();
constructor(private _router : Router, private _service : MovielistService, private _activatedRoute: ActivatedRoute) { }

ngOnInit(): void {
  this._service.movie=this.movie;
}

updateMovieFormSubmit(){
  this._service.updateMovieByEmail(this.movie).subscribe(
    data=>{
      console.log(data)
      this._router.navigate(['/crud'])
    }
  )
}

goToList(){
  this._router.navigate(['/']);
}


}
