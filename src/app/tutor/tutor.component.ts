
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.scss']
})

export class TutorComponent implements OnInit {


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