import { Component } from '@angular/core';



// import { AuthService } from 'src/app/Service/auth.service';
import { AuthService } from '../Service/auth.service';


@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.css']
})
export class LayerComponent {
  islogin:boolean=false;
  constructor(private _Authservice : AuthService){
   _Authservice.userdata.subscribe({
    next:()=>{
      if(_Authservice.userdata.getValue()!== null){
        this.islogin = true;
      }
      else{
        this.islogin = false;

      }
    }
   })

}

  logOut(){
    this._Authservice.logOut();
    
  }



}
