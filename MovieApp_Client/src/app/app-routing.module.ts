import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AuthGuard } from './auth.guard';
import { CrudComponent } from './crud/crud.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:'',component:RegisterComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
 {path:'crud', component:CrudComponent , canActivate:[AuthGuard]} ,       //only when logged in
 {path: 'addMovie', component:AddMovieComponent, canActivate:[AuthGuard] },
 { path: 'editMovie', component:EditMovieComponent , canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
