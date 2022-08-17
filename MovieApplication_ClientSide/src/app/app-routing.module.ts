import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CrudComponent } from './crud/crud.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:'',component:RegisterComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
 // {path:'crud' , component:CrudComponent, canActivate:[AuthGuard]}
 {path:'crud', component:CrudComponent}        //only when logged in
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
