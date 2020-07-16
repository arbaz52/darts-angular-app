import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';
import { ToasterService } from './toaster.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  constructor(private adminService: AdminService, private toaster: ToasterService) { }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    try {
      var data: any = await this.adminService.getCurrentAdmin().subscribe()
      alert(data)
      console.log(data)
      return true
    } catch (err) {
      console.log(err)
      this.toaster.err(err)
      return false
    }
  }

}
