import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { CheckerServiceService } from "./checker-service.service";

@Injectable({
  providedIn: 'root'
})

export class CheckerGuard implements CanActivate{

  constructor(private chsrv: CheckerServiceService, private router: Router) { }

  canActivate() : boolean{
    if (this.chsrv.isLoggedIn()){
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
