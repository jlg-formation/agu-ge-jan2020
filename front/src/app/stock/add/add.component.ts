import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('1.23', [Validators.required]),
    qty: new FormControl('200', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  submit(): void {
    console.log('submit');
  }
}
