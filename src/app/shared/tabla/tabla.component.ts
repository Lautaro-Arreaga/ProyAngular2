import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  datos = [
    { nombre: 'Leo Messi', correo: 'leomessioficial@gmail.com', telefono: '124329' },
    { nombre: 'Neymar Jr', correo: 'neymarjr@gmail.com', telefono: '242341' },
    { nombre: 'Ronaldinho', correo: 'ronaldinho@gmail.com', telefono: '4523123' }
  ];
}