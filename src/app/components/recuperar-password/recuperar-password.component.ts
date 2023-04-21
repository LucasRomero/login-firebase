import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseErrorService } from 'src/app/services/firebase-error.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit {
  recuperarUsuario: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseErrorService: FirebaseErrorService
  ) {
    this.recuperarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {}

  recuperar(): void {
    const email = this.recuperarUsuario.value.email;
    console.log(this.recuperarUsuario);

    // this.loading = true;
    // this.afAuth
    //   .sendPasswordResetEmail(email)
    //   .then((user) => {
    //     this.toastr.info(
    //       'Le enviamos un correo para reestablecer su contraseña',
    //       'Recuperar contraseña'
    //     );
    //     this.router.navigate(['/login']);
    //   })
    //   .catch((error) => {
    //     this.loading = true;
    //     this.toastr.info(
    //       this.firebaseErrorService.getCodeError(error.code),
    //       'Informacion',
    //       {
    //         closeButton: true
    //       }
    //     );
    //   });
  }
}
