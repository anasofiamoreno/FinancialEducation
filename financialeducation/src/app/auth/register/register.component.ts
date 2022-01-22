import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { authState, user } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { animation } from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  name: string | null = '';
  public email: string = '';
  password: string = '';
  passwordConfirm: string = '';
  sex: string | null = 'Sexo';
  age: string | null = '';
  cp: string = '28986';
  sepomex: string = '';
  state: string = '';
  city: string = '';
  study: string = 'Estudios';
  job: string = 'Ocupacion';
  passwordmessage: string = '';
  levelgeded: string | null = '2';
  namelevel: string = '';
  animationR: boolean = false;

  constructor(
    private http: HttpClient,
    private db: Firestore,
    private auth: Auth
  ) {}

  createRequestOption() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Apikey: '44e5c7f7f4af06352cc287e0e2240b6de1b953cd',
    });
    return headers;
  }

  getAdress() {
    let option = this.createRequestOption();

    return this.http
      .get<any>(this.sepomex, { headers: option })
      .subscribe((resp) => {
        this.state = resp.codigo_postal.estado;
        this.city = resp.codigo_postal.municipio;
      });
  }

  checkCp() {
    this.sepomex =
      'https://sepomex.razektheone.com/codigo_postal?cp=' + this.cp;
    this.getAdress();
  }

  ls(event: any) {
    this.cp = event.target.value;
    if (event.target.value.length >= 5) {
      console.log('bien');
      this.cp = event.target.value;
      this.checkCp();
    }
  }

  async sendForm() {
    console.log(this.sex);

    if (
      this.password.length <= 7 ||
      this.password != this.passwordConfirm ||
      this.email == ''
    ) {
      return alert('Datos Incompletos, revise correo y constraseña');
    }

    await createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then(async (userCredential) => {
        if (userCredential.user) {
          await setDoc(
            doc(
              this.db,
              'costumer',
              this.email.slice(0, this.email.indexOf('@'))
            ),
            {
              name: this.email.slice(0, this.email.indexOf('@')),
              email: this.email,
              age: this.age,
              sex: this.sex,
              cp: this.cp,
              state: this.state,
              city: this.city,
              study: this.study,
              job: this.job,
              level: this.levelgeded,
              namelevel: this.namelevel,
            }
          );
          localStorage.clear();
          window.location.href = '/courses';
        }
      })
      .catch((error) => {
        if (error.code == 'auth/email-already-in-use') {
          alert('Usuario ya registrado');
        }
        if (error.code == 'auth/weak-password') {
          alert('Contraseña Corta');
        }
      });
  }

  checkPassword(event: any) {
    if (this.password.length <= 7 && this.password != '') {
      this.passwordmessage = 'Contraseña muy corta';
    } else {
      this.passwordmessage = '';
      if (this.password != this.passwordConfirm) {
        this.passwordmessage = 'Contraseñas no coinsiden';
      }
    }
  }

  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    this.levelgeded = localStorage.getItem('level');
    this.age = localStorage.getItem('age');
    this.sex = localStorage.getItem('gender');

    switch (this.levelgeded) {
      case '1':
        this.namelevel = 'Elfo ahorrador';
        break;
      case '2':
        this.namelevel = 'Escudero del dinero';
        break;
      case '3':
        this.namelevel = 'Caballero del ahorro';
        break;
      case '4':
        this.namelevel = 'Mago de las finanzas';
        break;
      case '5':
        this.namelevel = 'Leyenda de las inversiones';
        break;
      default:
    }

    setTimeout(() => {
      this.animationR = true;
    }, 3000);
  }
}
