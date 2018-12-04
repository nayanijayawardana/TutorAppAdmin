
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})

export class StudentComponent implements OnInit {


  ngOnInit() {

  }

  countries: string[] = ['Rathnapura', 'Colombo', 'kegalle'];
    default: string = 'Colombo';

    countryForm: FormGroup;

    constructor() {
        this.countryForm = new FormGroup({
            country: new FormControl(null)
        });
        this.countryForm.controls['country'].setValue(this.default, {onlySelf: true});

    }

}
