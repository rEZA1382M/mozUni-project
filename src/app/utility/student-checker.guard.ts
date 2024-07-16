import { CanActivate, Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { StudentCheckerService } from "./student-checker.service";

@Injectable({
  providedIn: 'root'
})

export class StudentCheckerGuard implements CanActivate {
  constructor(private stchsrv: StudentCheckerService, private route: Router) {  }

  canActivate(): boolean{
    if (this.stchsrv.isLoggedIn()){
      return true;
    }
    else {
      this.route.navigate(['/login']);
      return false;
    }
  }

}
