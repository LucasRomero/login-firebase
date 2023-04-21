import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../Utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseErrorService {
  constructor() {}

  getCodeError(code: string) {
    switch (code) {
      // correo ya existe
      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
        return 'El usuario ya existe';

      // contraseña debil
      case FirebaseCodeErrorEnum.WeakPassword:
        return 'La contraseña es muy debil';

      // correo invalido
      case FirebaseCodeErrorEnum.InvalidEmail:
        return 'Correo no valido';

      // password incorrecta
      case FirebaseCodeErrorEnum.WrongPassword:
        return 'Correo electronico o contraseña incorrecta';

      // usuario no existe
      case FirebaseCodeErrorEnum.UserNotFound:
        return 'El usuario no existe';
      default:
        return 'Error desconocido';
    }
  }
}
