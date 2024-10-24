import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  generarAlerta(
    title: string,
    text: string,
    icon: SweetAlertIcon,
    btnText: string
  ): void {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: btnText,
    });
  }
}
