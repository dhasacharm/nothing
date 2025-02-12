import { Component } from '@angular/core';
import { RegisterForm } from '../data/fullRegister';
@Component({
  selector: 'app-fullregister',
  templateUrl: './fullregister.component.html',
  styleUrl: './fullregister.component.css'
})
export class FullregisterComponent {


  input_data_list = RegisterForm

}
