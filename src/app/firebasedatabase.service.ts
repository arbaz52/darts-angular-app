import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebasedatabaseService {

  constructor(private _db: AngularFireDatabase) {

  }
  getQRUnits = () => {
    return this._db.object("/locations").valueChanges()
  }
  getAlerts = () => {
    return this._db.object("/Alerts").valueChanges()
  }
}
