import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
    
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class LoginRoutingModule { 


  }