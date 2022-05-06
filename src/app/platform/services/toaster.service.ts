import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ToasterEnum } from '@app/global/enums/toaster-type.enum';
import { Toaster } from '@app/global/models/toaster.model';


@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  public toaster: Subject<Toaster> = new Subject();

  constructor() { }

  public showNotification(text: string, status: ToasterEnum = ToasterEnum.Success): void {
    const toaster = new Toaster({
      status,
      text,
    });
    this.toaster.next(toaster);
  }
}
