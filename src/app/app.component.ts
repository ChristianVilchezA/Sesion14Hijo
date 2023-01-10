import { Component } from '@angular/core';

interface ContactForm
{
  "nombre": string;
  "dni": string;
  "estadocivil": string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sesion14';

  model = {
    nombre: "",
    dni: "",
    estadocivil: ""
}

data=''; 

onSubmit(values :any) : void {
  console.log('Form values', values)
  this.data=values;   
}

}
